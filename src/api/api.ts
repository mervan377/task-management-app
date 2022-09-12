import axios from "axios";

export const getAllUsers = (email: string, pass: string): void => {
  var config = {
    method: "get",
    url: "http://localhost:5000/api/auth/all-users",
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));

      console.log(response.data.payload);
    })
    .catch(function (error) {
      console.log(error);
    });
};

