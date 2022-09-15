import { action, makeObservable, observable, toJS } from "mobx";
import { setAuth } from "../../../api/api";
import { Departments, ILoginModel } from "../../../models/login/LoginModel";

export class AuthStore {
  constructor() {
    makeObservable(this);

    this.loginModel = {
      email: "",
      password: "",
    };
  }

  /* Select Current User */
  @observable
  loginModel: ILoginModel;

  @action
  login = (): void => {
    setAuth("post", "/login", toJS(this.loginModel));
  };

  /* Logout user */
  @action
  logout = (): void => {
    localStorage.removeItem("user");
    window.location.href = "/Login";
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
