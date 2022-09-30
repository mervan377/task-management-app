import { action, makeObservable, observable } from "mobx";
import {
  Departments,
  ITaskModel,
  TaskStatus,
  TaskUrls,
} from "../../../models/tasks/TaskModel";
import { userJWTToken } from "../../../api/api";
import {
  ITaskCreateRequestModel,
  ITaskUpdateRequestModel,
} from "../../../models/request_response/tasks/CreateTask";
import axios from "axios";

axios.defaults.headers.common["Authorization"] = `Bearer ${userJWTToken}`;
axios.defaults.headers.post["Content-Type"] = "application/json";

export class TaskStore {
  constructor() {
    makeObservable(this);
  }

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

  /* Select Current Task */
  @observable
  selectedTask: ITaskModel | undefined;
  @action
  setSelectedTask = (task: ITaskModel): void => {
    this.selectedTask = { ...task };
  };

  /* Add Task to List */
  @action
  createTask = (): void => {
    this.showLoading();
    const requestPayload: ITaskCreateRequestModel = {
      title: this.selectedTask!.title,
      description: this.selectedTask!.description,
      assignedDepartment: this.selectedTask!.assignedDepartment,
    };
    axios
      .post("http://localhost:5000/api/task", requestPayload)
      .then(function (response) {
        store.initalizesTaskList();
        store.changeTaskSuccessOrNotPopup(true, "taskCreated");
        store.changeTaskAdd(true);
        store.isCreateFormOpen = false;
        store.hideLoading();
      })
      .catch(function (error) {
        console.log(error);
        store.hideLoading();
      });
  };

  @observable isTaskEditedID: any = 0;

  /* Update Task From List */
  @action
  updateTask = (): void => {
    this.showLoading();
    const requestPayload: ITaskUpdateRequestModel = {
      title: this.selectedTask!.title,
      description: this.selectedTask!.description,
    };
    axios
      .put(
        `http://localhost:5000/api/task/${this.selectedTask!.id}`,
        requestPayload
      )
      .then(function (response) {
        store.isUpdateFormOpen = false;
        store.hideLoading();
        store.initializesMyTasks();
        store.changeTaskSuccessOrNotPopup(true, "taskUpdated");
        store.changeIsTaskUpdated(true);
        store.isTaskEditedID = store.selectedTask?.id;
      })
      .catch(function (error) {
        console.log(error);
        store.hideLoading();
      });
  };

  /* Update Task From List */
  @action
  deleteTask = (): void => {
    this.showLoading();
    axios
      .delete(`http://localhost:5000/api/task/${this.selectedTask!.id}`)
      .then(function (response) {
        store.initializesMyTasks();
        store.changeTaskSuccessOrNotPopup(true, "taskDeleted");
        store.hideLoading();
      })
      .catch(function (error) {
        console.log(error);
        store.hideLoading();
      });
    this.isDeleteFormOpen = false;
  };

  @action
  changeStatusTask = (): void => {
    this.showLoading();
    axios
      .get(`http://localhost:5000/api/task/complete/${this.selectedTask!.id}`)
      .then(function (response) {
        store.initializesPendingTasks();
        store.hideLoading();
      })
      .catch(function (error) {
        console.log(error);
        store.hideLoading();
      });
  };

  /* Initilazie My Tasks */
  @action
  initializesAllTasks = async (): Promise<void> => {
    this.showLoading();
    try {
      const response = await axios.get("http://localhost:5000/api/task");
      store.allTasks = response.data.payload;
    } catch (error) {
      console.log("occured error");
    } finally {
      store.hideLoading();
    }
  };

  /* Initilazie My Tasks */
  @action
  initializesMyTasks = async (): Promise<void> => {
    this.showLoading();
    try {
      const response = await axios.get(
        "http://localhost:5000/api/task/my-tasks"
      );
      store.myTasks = response.data.payload;
    } catch (error) {
      console.log("Occured sth error");
    } finally {
      store.hideLoading();
    }
  };

  /* Initilazie Pending Tasks */
  @action
  initializesPendingTasks = async (): Promise<void> => {
    this.showLoading();
    try {
      const response = await axios.get(
        "http://localhost:5000/api/task/pendings"
      );
      store.pendingTasks = response.data.payload;
    } catch (error) {
      console.log("Occured sth error");
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

  /*  Update Form Open  */
  @observable
  isUpdateFormOpen: boolean = false;
  @action
  changeUpdatePopupVisibility = (isOpen: boolean): void => {
    this.isUpdateFormOpen = isOpen;
  };

  /*  Create Form Open  */
  @observable
  isCreateFormOpen: boolean = false;
  @action
  changeCreatePopupVisibility = (isOpen: boolean): void => {
    this.isCreateFormOpen = isOpen;
  };

  /*  Delete Form Open  */
  @observable
  isDeleteFormOpen: boolean = false;
  @action
  changeDeletePopupVisibility = (isOpen: boolean): void => {
    this.isDeleteFormOpen = isOpen;
  };

  /*  Warning Modal Open Close   */
  @observable
  isLogoutWarningOpenModal: boolean = false;
  @action
  changeLogoutWarningOpenModal = (isOpen: boolean): void => {
    this.isLogoutWarningOpenModal = isOpen;
  };

  /*  Warning Modal Open Close   */
  @observable
  isTaskSuccessOrNotPopup: boolean = false;
  @observable
  isActionType: string = "";
  @observable
  Interval: number = 3000;
  @action
  changeTaskSuccessOrNotPopup = (isOpen: boolean, isType: string): void => {
    this.isTaskSuccessOrNotPopup = isOpen;
    this.isActionType = isType;
    setInterval(function () {
      store.isTaskSuccessOrNotPopup = false;
    }, this.Interval);
  };

  /*  Task Add or Updated for doing background success   */
  @observable
  isTaskUpdated: boolean = false;
  @action
  changeIsTaskUpdated = (isOpen: boolean): void => {
    this.isTaskUpdated = isOpen;
    setInterval(function () {
      store.isTaskUpdated = false;
    }, this.Interval);
  };

  /*  Task Add or Updated for doing background success   */
  @observable
  isTaskAdd: boolean = false;
  @action
  changeTaskAdd = (isOpen: boolean): void => {
    this.isTaskAdd = isOpen;
    setInterval(function () {
      store.isTaskAdd = false;
    }, this.Interval);
  };

  /******************************************** */
  @observable
  allTasks: ITaskModel[] = [];

  @observable
  myTasks: ITaskModel[] = [];

  @observable
  pendingTasks: ITaskModel[] = [];

  getStatusAsString = (status: TaskStatus): string => {
    switch (status) {
      case TaskStatus.Pending:
        return "Pending";
      case TaskStatus.Completed:
        return "Completed";
      case TaskStatus.Rejected:
        return "Rejected";
      default:
        return "Error";
    }
  };

  getDepartmentAsString = (status: Departments): string => {
    switch (status) {
      case Departments.HumanResources:
        return "Human Resources Deparment";
      case Departments.Sales:
        return "Sales Deparment";
      case Departments.Marketing:
        return "Advertisement Deparment";
      default:
        return "Error";
    }
  };

  getURLAsString = (status: TaskUrls): string => {
    switch (status) {
      case TaskUrls.Home:
        return "/";
      case TaskUrls.AllTasks:
        return "/all-tasks";
      case TaskUrls.MyTasks:
        return "/my-tasks";
      case TaskUrls.PendingTasks:
        return "/pending-tasks";
      case TaskUrls.NotFound:
        return "*";
      default:
        return "Error";
    }
  };

  getTaskActionTypes = (actionType: string): string => {
    switch (actionType) {
      case "taskCreated":
        return "Task Create Successfully";
      case "taskDeleted":
        return "Task Deleted Successfully";
      case "taskUpdated":
        return "Task Updated Successfully";
      default:
        return "Error";
    }
  };
}

export const store = new TaskStore();
