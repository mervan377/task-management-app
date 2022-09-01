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
      name: "John Doe",
      id: 2002,
    };
    this.allTasks.push({ ...this.selectedTask! });
    this.myTasks.push({ ...this.selectedTask! });
  };

  /* Update Task From List */
  @action
  updateSelectedTaskFromList = (rak: ITaskModel): void => {
    this.selectedTask = {
      id: rak.id,
      title: rak.title,
      description: "",
      user: {
        id: 0,
        name: "",
      },
      assignedDepartment: Departments.HumanResources,
      status: TaskStatus.Pending,
      logs: [],
    }
     
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
  ];

  @observable
  myTasks: ITaskModel[] = [
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
  ];

  @observable
  pendingTasks: ITaskModel[] = [
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
  ];

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
        return "Marketing Deparment";
      default:
        return "Error";
    }
  };
}

export const store = new TaskStore();
