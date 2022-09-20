import axios from "axios";
import { ILoginModel } from "../models/login/LoginModel";
import { store } from "../pages/tasks/stores/TaskStore";

export let userJWTToken: string = "";

if (localStorage.getItem("user") !== null) {
  userJWTToken = JSON.parse(localStorage.getItem("user") || "").jwtToken;
}

export const getTasks = (method: string, url: string, data: any) => {
  var config = {
    method: method,
    url: `http://localhost:5000/api/task${url}`,
    headers: {
      Authorization: `Bearer ${userJWTToken}`,
    },
    data: data,
  };
  axios(config).then(function (response) {
    if (response.data.code === "allTasksSuccess") {
      store.allTasks = response.data.payload;
    } else if (response.data.code === "pendingTasksSuccess") {
      store.pendingTasks = response.data.payload;
    } else if (response.data.code === "myTasksSuccess") {
      store.myTasks = response.data.payload;
    }
  });
};

export const setTasks = (method: string, url: string, data: string) => {
  var config = {
    method: method,
    url: `http://localhost:5000/api/task${url}`,
    headers: {
      Authorization: `Bearer ${userJWTToken}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      // if (response.data.code === "taskCreated") {
      //   store.changeTaskCRUDSuccessOrNotPopup(true, "taskCreated");
      // } else if (response.data.code === "taskUpdated") {
      //   store.changeTaskCRUDSuccessOrNotPopup(true, "taskUpdated");
      // }
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const setAuth = (method: string, url: string, data: ILoginModel) => {
  var config = {
    method: method,
    url: `http://localhost:5000/api/auth${url}`,
    data: data,
  };

  axios(config)
    .then(function (response) {
      localStorage.setItem("user", JSON.stringify(response.data.payload));
      window.location.href = "/";
    })
    .then(function () {
      store.changeDetailPopupVisibility(true);
    })
    .catch(function (error) {
      console.log(error);
    });
};
