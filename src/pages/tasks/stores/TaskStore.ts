import { action, makeObservable, observable } from "mobx";
import {
  Departments,
  ITaskModel,
  TaskStatus,
  TaskUrls,
} from "../../../models/tasks/TaskModel";
import { getTasks, setTasks } from "../../../api/api";

export class TaskStore {
  constructor() {
    makeObservable(this);
  }

  /* Select Current Task */
  @observable
  selectedTask: ITaskModel | undefined;
  @action
  setSelectedTask = (task: ITaskModel): void => {
    this.selectedTask = { ...task };
  };

  /* Add Task to List */
  @action
  addSelectedTaskToLists = (): void => {
    const title = this.selectedTask?.title;
    const description = this.selectedTask?.description;
    const assignedDepartment = this.selectedTask?.assignedDepartment;
    var data = JSON.stringify({
      title: title,
      description: description,
      assignedDepartment: assignedDepartment,
    });
    setTasks("post", "/", `${data}`);
    this.initalizesTaskList();
    store.changeTaskSuccessOrNotPopup(true, "taskCreated");
    store.changeTaskAddOrUpdated(true)
    this.isCreateFormOpen = false;
  };

  /* Update Task From List */
  @action
  updateSelectedTaskFromList = (): void => {
    const currentSelectedID = this.selectedTask?.id;
    const title = this.selectedTask?.title;
    const description = this.selectedTask?.description;

    var data = JSON.stringify({
      title: title,
      description: description,
    });
    if (this.selectedTask?.status === 0) {
      setTasks("put", `/${currentSelectedID}`, `${data}`);
      this.initalizesTaskList();
      store.changeTaskSuccessOrNotPopup(true, "taskUpdated");
      store.changeTaskAddOrUpdated(true) 
    } else {
      this.changeTaskWarningOpenModal(true);
    }

    this.isUpdateFormOpen = false;
  };

  /* Update Task From List */
  @action
  deleteSelectedTaskFromList = (): void => {
    if (this.selectedTask?.status === 0) {
      const currentSelectedID = this.selectedTask?.id;
      getTasks("delete", `/${currentSelectedID}`, "");
      this.initalizesTaskList();
      store.changeTaskSuccessOrNotPopup(true, "taskDeleted");
    } else {
      this.changeTaskWarningOpenModal(true);
    }
    this.isDeleteFormOpen = false;
  };

  @action
  changeStatusTask = (statusName: string): void => {
    statusName = statusName.toString().toLowerCase();
    if (this.selectedTask?.status === 0) {
      const currentSelectedID = this.selectedTask?.id;
      getTasks("get", `/${statusName}/${currentSelectedID}`, "");
      this.initalizesTaskList();
    } else {
      this.changeTaskWarningOpenModal(true);
    }
  };

  /* Initilazie My Tasks */
  @action
  initializesAllTasks = (): void => {
    getTasks("get", "/", "");
  };

  /* Initilazie My Tasks */
  @action
  initializesMyTasks = (): void => {
    getTasks("get", "/my-tasks", "");
  };

  /* Initilazie Pending Tasks */
  @action
  initializesPendingTasks = (): void => {
    getTasks("get", "/pendings", "");
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

  /*  Status   */
  @observable
  isStatusModalOpen: any = "Pending";
  @action
  changeStatusModalOpen = (isOpen: any): void => {
    this.isStatusModalOpen = isOpen;
  };

  /*  Warning Modal Open Close   */
  @observable
  isTaskWarningOpenModal: boolean = false;
  @action
  changeTaskWarningOpenModal = (isOpen: boolean): void => {
    this.isTaskWarningOpenModal = isOpen;
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
  isActionType: string = ""
  @action
  changeTaskSuccessOrNotPopup = (isOpen: boolean, isType: string): void => {
    this.isTaskSuccessOrNotPopup = isOpen;
    this.isActionType = isType
    setTimeout(function () {
      store.isTaskSuccessOrNotPopup = false;
    }, 3000);
  };

  /*  Task Add or Updated for doing background success   */
  @observable
  isTaskAddOrUpdated: boolean = false;
  @action
  changeTaskAddOrUpdated = (isOpen: boolean): void => {
    this.isTaskAddOrUpdated = isOpen;
    setTimeout(function () {
      store.isTaskAddOrUpdated = false;
    }, 3000);
  };

  /* ******************************************* */
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
