import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TasksLayout from './pages/tasks/TasksLayout';
import Alltasks from './pages/tasks/AllTasks';
import Home from './pages/Home';
import MyTasks from './pages/tasks/MyTasks';
import {CreateTasks} from './pages/tasks/CreateTasks';
import PendingTasks from './pages/tasks/PendingTasks';

import Login from './pages/Login';

const App = () => {

  //const session = localStorage.getItem('session') || false;
  //Başa breadcrumb koy
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TasksLayout />} >
            <Route path='/' element={<Home />} />
            <Route path='/Alltasks' element={<Alltasks />} />
            <Route path='/MyTasks' element={<MyTasks />} />
            <Route path='/CreateTasks' element={<CreateTasks />} />
            <Route path='/PendingTasks' element={<PendingTasks />} /> 
          </Route>
          <Route path='/Login' element={<Login />} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;