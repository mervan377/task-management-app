import axios from "axios";
import { action, makeObservable, observable } from "mobx";
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
  login = async (): Promise<void> => {
    const requestPayload: ILoginModel = {
      email: this.loginModel.email,
      password: this.loginModel.password,
    };

    try {
      const response = await axios.post("/auth/login", requestPayload);
      localStorage.setItem("user", JSON.stringify(response.data.payload));
      window.location.href = "/";
    } catch (error) {
      console.log("Occured sth error", error);
    }
  };

  /*  Warning Modal Open Close   */
  @observable
  isLogoutWarningOpenModal: boolean = false;
  @action
  changeLogoutWarningOpenModal = (isOpen: boolean): void => {
    this.isLogoutWarningOpenModal = isOpen;
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
