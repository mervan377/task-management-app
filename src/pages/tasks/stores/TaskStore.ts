import { action, makeObservable, observable } from "mobx";
import {
  Departments,
  ITaskModel,
  TaskStatus,
} from "../../../models/tasks/TaskModel";

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

  /* Initilazie My Tasks */
  @action
  initializesMyTasks = (): void => {
    this.myTasks = this.allTasks.filter((key) => key.user.id === 1001);
  };

  /* Initilazie Pending Tasks */
  @action
  initializesPendingTasks = (): void => {
    this.pendingTasks = this.allTasks.filter((key) => key.status === 0)
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

  /* Add Task to List */
  @action
  addSelectedTaskToLists = (): void => {
    this.selectedTask!.user = {
      name: "Mary Glenn",
      id: 1001,
    };
    this.selectedTask!.status = 0
    this.allTasks.push({ ...this.selectedTask! });
    this.myTasks.push({ ...this.selectedTask! });
  };

  /* Update Task From List */
  @action
  updateSelectedTaskFromList = (): void => {
    const currentSelectedID = this.selectedTask?.id;
    const expandedIndex = this.myTasks.findIndex(
      (link) => link.id === currentSelectedID
    );
    this.myTasks[expandedIndex] = { ...this.selectedTask! };
    this.isUpdateFormOpen = false;
  };

  /* Update Task From List */
  @action
  deleteSelectedTaskFromList = (): void => {
    const currentSelectedID = this.selectedTask?.id;
    const expandedIndex = this.myTasks.findIndex(
      (link) => link.id === currentSelectedID
    );
    if (expandedIndex > -1) {
      this.myTasks.splice(expandedIndex, 1);
    }
    this.isDeleteFormOpen = false;
  };

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  /* ******************************************* */
  @observable
  allTasks: ITaskModel[] = [
    {
      id: 8054,
      title: "Department Employee List",
      description:
        "Please send Sales Department Employee List us via email, Thanks.",
      status: TaskStatus.Pending,
      assignedDepartment: Departments.HumanResources,
      user: {
        name: "John Doe",
        id: 2002,
      },
      logs: [],
    },
    {
      id: 4381,
      title: "Product Price List",
      description: "We need to Product Price List in this week, Thanks",
      status: TaskStatus.Pending,
      assignedDepartment: Departments.Sales,
      user: {
        name: "Mary Glenn",
        id: 1001,
      },
      logs: [],
    },
    {
      id: 4055,
      title: "Human Employee List",
      description: "lorem ipsum dolar sit amet",
      status: TaskStatus.Pending,
      assignedDepartment: Departments.Sales,
      user: {
        name: "Mary Glenn",
        id: 1001,
      },
      logs: [],
    },
  ];

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
