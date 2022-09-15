import axios from "axios";
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
  axios(config)
    .then(function (response) {
      if (response.data.code === "allTasksSuccess") {
        store.allTasks = response.data.payload;
      } else if (response.data.code === "pendingTasksSuccess") {
        store.pendingTasks = response.data.payload;
      } else if (response.data.code === "myTasksSuccess") {
        store.myTasks = response.data.payload;
      } 

      console.log(data)
    })
    .catch(function (error) {
      console.log(error);
    }); 

};

//  getTasks("put", `${currentSelectedID}`, `${data}`); <== Böyle kullanıyorum