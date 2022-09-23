import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { store } from './stores/TaskStore';
import axios from 'axios';

interface IMyTasksProps { }

const fff: React.FC<IMyTasksProps> = observer(() => {

 

  let req1 = new Promise(function (resolve, reject) {
    axios
      .get("http://localhost:5000/api/task")
      .then(function (response) {
        store.allTasks = response.data.payload;
      })
      .catch(function (error) {
        console.log(error);
        store.hideLoading();
      });
  });

  let req2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject('Second!');
    }, 2000);
  });


  Promise.all([req1, req2]).then(function (results) {
    console.log('Then: ', results);
  }).catch(function (err) {
    console.log('Catch: ', err);
  });



  return (
    <React.Fragment>
    </React.Fragment>
  )
})

export default fff;