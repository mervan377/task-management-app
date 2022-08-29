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

  @observable
  selectedTask: ITaskModel | undefined;

  @action
  setSelectedTask = (task: ITaskModel): void => {
    this.selectedTask = task;
  };

  /*  Detail Form Open  */
  @observable
  isDetailFormOpen: boolean = false;
  @action
  changeDetailPopupVisibilty = (isOpen: boolean): void => {
    this.isDetailFormOpen = isOpen;
  };

  /*  Update Form Open  */
  @observable
  isUpdateFormOpen: boolean = false;
  @action
  changeUpdatePopupVisibilty = (isOpen: boolean): void => {
    this.isUpdateFormOpen = isOpen;
  };

  @observable
  isEditableForm: boolean = false;
  @action
  changeUpdatePopupEditable= (isEditable: boolean): void => {
    this.isEditableForm = isEditable;
  };













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
        return "Human Resources";
      case Departments.Sales:
        return "Sales";
      case Departments.Marketing:
        return "Marketing";
      default:
        return "Error";
    }
  };
}
