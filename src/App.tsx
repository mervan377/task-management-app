import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TasksLayout from './pages/tasks/TasksLayout';
import Alltasks from './pages/tasks/AllTasks';
import Home from './pages/Home';
import MyTasks from './pages/tasks/MyTasks';
import PendingTasks from './pages/tasks/PendingTasks';

import Login from './pages/login/Login';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<TasksLayout />} >
            <Route path='/' element={<Home />} />
            <Route path='/Alltasks' element={<Alltasks />} />
            <Route path='/MyTasks' element={<MyTasks />} />
            <Route path='/PendingTasks' element={<PendingTasks />} />
          </Route>
          <Route path='/Login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;