import { action, makeObservable, observable } from "mobx";
import {
  Departments,
  ITaskModel,
  TaskStatus,
} from "../../../models/tasks/TaskModel";
import {
  ITaskCreateRequestModel,
  ITaskUpdateRequestModel,
} from "../../../models/request_response/tasks/CreateTask";
import axios from "axios";
import { BringAsString } from "../../../services/services";

export class TaskStore {
  constructor() {
    makeObservable(this);
  }

  /* Add Task to List */
  @action
  createTask = async (): Promise<void> => {
    this.showLoading();

    if (
      this.selectedTask?.title.trim() === "" ||
      this.selectedTask?.description.trim() === ""
    ) {
      this.changeFormModalIsEmptyVisibility(false);
      store.hideLoading();
      return;
    }

    const requestPayload: ITaskCreateRequestModel = {
      title: this.selectedTask!.title,
      description: this.selectedTask!.description,
      assignedDepartment: this.selectedTask!.assignedDepartment,
    };

    try {
      const response = await axios.post("/task", requestPayload);
      console.log(response);
      store.initalizesTaskList();
      store.changeTaskSuccessOrNotPopup(response.data.code);
      store.changeTaskAdd();
      store.isCreateFormOpen = false;
    } catch (error) {
      console.log((error as any).message);
    } finally {
      store.hideLoading();
    }
  };

  /*  Create Form Open  */
  @observable
  isCreateFormOpen: boolean = false;
  @action
  changeCreatePopupVisibility = (isOpen: boolean): void => {
    this.isCreateFormOpen = isOpen;
  };

  /*  Task Add for doing background success   */
  @observable
  isTaskAdd: boolean = false;
  @action
  changeTaskAdd = (): void => {
    // Silinecek
    this.isTaskAdd = true;
    setTimeout(function () {
      store.isTaskAdd = false;
    }, this.intervalTime);
  };

  @observable isTaskEditedID: number | undefined = 0;

  /* Update Task From List */
  @action
  updateTask = async (): Promise<void> => {
    this.showLoading();

    if (
      this.selectedTask?.title.trim() === "" ||
      this.selectedTask?.description.trim() === ""
    ) {
      this.changeFormModalIsEmptyVisibility(false);
      store.hideLoading();
      return;
    }
    const requestPayload: ITaskUpdateRequestModel = {
      title: this.selectedTask!.title,
      description: this.selectedTask!.description,
    };

    try {
      const response = await axios.put(
        `/task/${this.selectedTask!.id}`,
        requestPayload
      );
      store.isUpdateFormOpen = false;
      store.initializesMyTasks();
      store.changeTaskSuccessOrNotPopup(response.data.code);
      store.changeIsTaskUpdated();
      store.isTaskEditedID = store.selectedTask!.id;
    } catch (error) {
      console.log((error as any).message);
    } finally {
      store.hideLoading();
    }
  };

  /*  Task Updated for doing background success   */
  @observable
  isTaskUpdated: boolean = false;
  @action
  changeIsTaskUpdated = (): void => {
    this.isTaskUpdated = true;
    setTimeout(function () {
      store.isTaskUpdated = false;
    }, this.intervalTime);
  };

  /*  Update Form Open  */
  @observable
  isUpdateFormOpen: boolean = false;
  @action
  changeUpdatePopupVisibility = (isOpen: boolean): void => {
    this.isUpdateFormOpen = isOpen;
  };

  /* Delete Task From List */
  @action
  deleteTask = async (): Promise<void> => {
    this.showLoading();
    try {
      const response = await axios.delete(`/task/${this.selectedTask!.id}`);
      store.initializesMyTasks();
      store.changeTaskSuccessOrNotPopup(response.data.code);
    } catch (error) {
      console.log((error as any).message);
    } finally {
      store.hideLoading();
      this.isDeleteFormOpen = false;
    }
  };

  /*  Delete Form Open  */
  @observable
  isDeleteFormOpen: boolean = false;
  @action
  changeDeletePopupVisibility = (isOpen: boolean): void => {
    this.isDeleteFormOpen = isOpen;
  };

  /* Change Status Task Complete or Reject */
  @action
  taskComplete = async (): Promise<void> => {
    this.showLoading();
    try {
      await axios.get(`/task/complete/${this.selectedTask!.id}`);
      store.initializesPendingTasks();
    } catch (error) {
      console.log((error as any).message);
    } finally {
      store.hideLoading();
    }
  };

  /* Change Status Task Complete or Reject */
  @action
  taskReject = async (): Promise<void> => {
    this.showLoading();
    try {
      await axios.get(`/task/reject/${this.selectedTask!.id}`);
      store.initializesPendingTasks();
    } catch (error) {
      console.log((error as any).message);
    } finally {
      store.hideLoading();
    }
  };

  /* Initilazie My Tasks */
  @action
  initializesAllTasks = async (): Promise<void> => {
    this.showLoading();
    try {
      const response = await axios.get("/task");
      store.allTasks = response.data.payload;
    } catch (error) {
      console.log((error as any).message);
    } finally {
      store.hideLoading();
    }
  };

  /* Initilazie My Tasks */
  @action
  initializesMyTasks = async (): Promise<void> => {
    this.showLoading();
    try {
      const response = await axios.get("/task/my-tasks");
      store.myTasks = response.data.payload;
    } catch (error) {
      console.log((error as any).message);
    } finally {
      store.hideLoading();
    }
  };

  /* Initilazie Pending Tasks */
  @action
  initializesPendingTasks = async (): Promise<void> => {
    this.showLoading();
    try {
      const response = await axios.get("/task/pendings");
      store.pendingTasks = response.data.payload;
    } catch (error) {
      console.log((error as any).message);
    } finally {
      store.hideLoading();
    }
  };

  @action
  initalizesTaskList = (): void => {
    this.initializesAllTasks();
    this.initializesMyTasks();
    this.initializesPendingTasks();
  };

  /* Considered Each Tasks Types */
  @observable
  allTasks: ITaskModel[] = [];

  @observable
  myTasks: ITaskModel[] = [];

  @observable
  pendingTasks: ITaskModel[] = [];

  /* Initilazie Pending Tasks */
  @action
  resetData = async (): Promise<void> => {
    this.showLoading();
    try {
      await axios.get("/task/reset-data");
      this.initializesMyTasks();
      this.initializesAllTasks();
    } catch (error) {
      console.log((error as any).message);
    }
    this.hideLoading();
  };

  /* Select Current Task */
  @observable
  selectedTask: ITaskModel | undefined;
  @action
  setSelectedTask = (task: ITaskModel): void => {
    this.selectedTask = { ...task };
  };

  /* Make Form Empty */
  @action
  initializeSelectedTask = (): void => {
    this.selectedTask = {
      id: 0,
      title: "",
      description: "",
      user: {
        id: 0,
        name: "",
      },
      assignedDepartment: Departments.HumanResources,
      status: TaskStatus.Pending,
      logs: [],
    };
  };

  @observable isFormModalIsEmpty: boolean = false;
  @action
  changeFormModalIsEmptyVisibility = (isOpen: boolean): void => {
    this.isFormModalIsEmpty = isOpen;
  };

  /*  Pending Detail Form Open  */
  @observable
  isPendingFormOpen: boolean = false;
  @action
  changePendingPopupVisibility = (isOpen: boolean): void => {
    this.isPendingFormOpen = isOpen;
  };

  /*  Detail Form Open  */
  @observable
  isDetailFormOpen: boolean = false;
  @action
  changeDetailPopupVisibility = (isOpen: boolean): void => {
    this.isDetailFormOpen = isOpen;
  };

  /*  Warning Modal Open Close   */
  @observable
  isTaskSuccessOrNotPopup: boolean = false;
  @observable
  ModalActionTypeName: string = "";
  intervalTime: number = 0;
  @action
  changeTaskSuccessOrNotPopup = (isType: string): void => {
    this.isTaskSuccessOrNotPopup = true;
    this.ModalActionTypeName = BringAsString.getTaskActionTypes(isType);
    setTimeout(function () {
      store.isTaskSuccessOrNotPopup = false;
    }, this.intervalTime += 2000);
  };

  /* Loading Effect is Show or Not */
  @observable
  isLoading: boolean = false;
  @action
  showLoading = (): void => {
    this.isLoading = true;
  };
  @action
  hideLoading = (): void => {
    this.isLoading = false;
  };
 
}

export const store = new TaskStore();
