import axios from "axios";
import { action, makeObservable, observable, toJS } from "mobx";
import { Departments, ILoginModel } from "../../../models/login/LoginModel";

export class AuthStore {
  constructor() {
    makeObservable(this);

    this.loginModel = {
      email: "",
      password: ""
    }
  }


  /* Select Current User */
  @observable
  loginModel: ILoginModel ;

  @action
  login = (): void => {
    var config = {
      method: "post",
      url: "http://localhost:5000/api/auth/login",
      data: toJS(this.loginModel),
    };

    axios(config)
      .then(function (response) {
        localStorage.setItem("user",JSON.stringify(response.data.payload))
        window.location.href = "/"
      })
      .catch(function (error) {
        console.log(error);
      });
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