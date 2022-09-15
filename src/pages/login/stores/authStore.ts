import axios from "axios";
import { action, makeObservable, observable, toJS } from "mobx";
import { ILoginModel } from "../../../models/login/LoginModel";

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
    var config = {
      method: "post",
      url: "http://localhost:5000/api/auth/login",
      data: toJS(this.loginModel),
    };

    axios(config)
      .then(function (response) {
        localStorage.setItem("user", JSON.stringify(response.data.payload));
        window.location.href = "/";
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  @action
  logout = (): void => {
    localStorage.removeItem("user");
    window.location.href = "/Login";
  };
}

export const authStore = new AuthStore();
