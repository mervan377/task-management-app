import axios from "axios";

export const connectPostman = (method: string, url: string, headers = null, data: null): void => {
  var config = {
    method: "get",
    url: "http://localhost:5000/api/auth/all-users",
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));

      console.log(response.data.payload)
    })
    .catch(function (error) {
      console.log(error);
    });
};
