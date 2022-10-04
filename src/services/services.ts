import { Departments, TaskStatus, TaskUrls } from "../models/tasks/TaskModel";

export class BringAsString {
  public static getStatusAsString = (status: TaskStatus): string => {
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

  public static getDepartmentAsString = (status: Departments): string => {
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

  public static getURLAsString = (status: TaskUrls): string => {
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

  public static getTaskActionTypes = (actionType: string): string => {
    switch (actionType) {
      case "taskCreated":
        return "Task Created Successfully";
      case "taskDeleted":
        return "Task Deleted Successfully";
      case "taskUpdated":
        return "Task Updated Successfully";
      default:
        return "Error";
    }
  };
}
