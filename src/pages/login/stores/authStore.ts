import { action, makeObservable, observable } from "mobx";
import {
  Departments,
  ILoginModel,
  IUserModel,
} from "../../../models/login/LoginModel";

export class AuthStore {
  constructor() {
    makeObservable(this);
  }

  /* Select Current User */
  @observable
  selectedUser: ILoginModel | undefined;
  @action
  setSelectedUser = (login: ILoginModel): void => {
    console.log(login);
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

export const authStore = new AuthStore();
