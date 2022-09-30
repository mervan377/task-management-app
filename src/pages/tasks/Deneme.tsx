import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { store } from './stores/TaskStore';
import axios from 'axios';

interface IMyTasksProps { }

const fff: React.FC<IMyTasksProps> = observer(() => {




  let sonuc = false;

  let islem = function (resolve: any, reject: any) {
    if (sonuc) {
      resolve("Başarılı işlem");
      axios
        .get("http://localhost:5000/api/task")
        .then(function (response) {
          store.allTasks = response.data.payload;
        })
        .catch(function (error) {
          console.log(error);
          store.hideLoading();
        })

    } else {
      reject("Başarısız işlem");
    }
  }

  islem(resolve, reject);

  function resolve(data: any) {
    console.log(data);
  }

  function reject(data: any) {
    console.log(data);
  }




  return (
    <React.Fragment>
    </React.Fragment>
  )
})

export default fff;