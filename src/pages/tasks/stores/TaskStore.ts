import axios from "axios";
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

  /* Add Task to List */
  @action
  addSelectedTaskToLists = (): void => {
    
    const userJWTToken: string = JSON.parse(
      localStorage.getItem("user") || ""
    ).jwtToken;

    var data = JSON.stringify({
      title: this.selectedTask?.title,
      description: this.selectedTask?.description,
      assignedDepartment: this.selectedTask?.assignedDepartment,
    });

    var config = {
      method: "post",
      url: "http://localhost:5000/api/task",
      headers: {
        Authorization: `Bearer ${userJWTToken}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        initializeLists2();
      })
      .catch(function (error) {
        console.log(error);
      });
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

  @action
  initializeLists = (): void => {
    this.initilizesAllTasks()
    this.initializesMyTasks()
    this.initializesPendingTasks()
  }

  /* Update Task From List */
  @action
  deleteSelectedTaskFromList = (): void => {
    const currentSelectedID = this.selectedTask?.id;
    const currentSelectedIndex = this.myTasks.findIndex(
      (myTask) => myTask.id === currentSelectedID
    );
    if (currentSelectedIndex > -1) {
      this.myTasks.splice(currentSelectedIndex, 1);
    }
    this.isDeleteFormOpen = false;

    const userJWTToken: string = JSON.parse(
      localStorage.getItem("user") || ""
    ).jwtToken;

    var data = "";
    var config = {
      method: "delete",
      url: "http://localhost:5000/api/task/4381",
      headers: {
        Authorization: `Bearer ${userJWTToken}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

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
  initilizesAllTasks = (): void => {
    const userJWTToken: string = JSON.parse(
      localStorage.getItem("user") || ""
    ).jwtToken;

    var config = {
      method: "get",
      url: "http://localhost:5000/api/task",
      headers: {
        Authorization: `Bearer ${userJWTToken}`,
      },
    };
    axios(config)
      .then(function (response) {
        store.allTasks = response.data.payload;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  /* Initilazie My Tasks */
  @action
  initializesMyTasks = (): void => {
    const userJWTToken: string = JSON.parse(
      localStorage.getItem("user") || ""
    ).jwtToken;

    var config = {
      method: "get",
      url: "http://localhost:5000/api/task/my-tasks",
      headers: {
        Authorization: `Bearer ${userJWTToken}`,
      },
    };
    axios(config)
      .then(function (response) {
        store.myTasks = response.data.payload;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  /* Initilazie Pending Tasks */
  @action
  initializesPendingTasks = (): void => {
    const userJWTToken: string = JSON.parse(
      localStorage.getItem("user") || ""
    ).jwtToken;

    var config = {
      method: "get",
      url: "http://localhost:5000/api/task/pendings",
      headers: {
        Authorization: `Bearer ${userJWTToken}`,
      },
    };

    axios(config)
      .then(function (response) {
        store.pendingTasks = response.data.payload;
      })
      .catch(function (error) {
        console.log(error);
      });
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


function initializeLists2() {
  store.initializeLists()
}

