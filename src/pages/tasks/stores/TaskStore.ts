import { action, makeObservable, observable } from "mobx";
import {
  Departments,
  ITaskModel,
  TaskStatus,
} from "../../../models/tasks/TaskModel";
import { getTasks } from "../../../api/api";

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
    const currentSelectedID = this.selectedTask?.id;
    const title = this.selectedTask?.title;
    const description = this.selectedTask?.description;
    const assignedDepartment = this.selectedTask?.assignedDepartment;

    var data = JSON.stringify({
      title: title,
      description: description, 
      assignedDepartment: assignedDepartment
    });

    getTasks("post", `${currentSelectedID}`, `${data}`);

    this.isUpdateFormOpen = false;
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

    console.log(data)

    getTasks("put", `${currentSelectedID}`, `${data}`);

    this.isUpdateFormOpen = false;
  };

  /* Update Task From List */
  @action
  deleteSelectedTaskFromList = (): void => {
    const currentSelectedID = this.selectedTask?.id;
    getTasks("delete", `/${currentSelectedID}`, "");
  };

  /* Initilazie My Tasks */
  @action
  initilizesAllTasks = (): void => {
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
}

export const store = new TaskStore();
