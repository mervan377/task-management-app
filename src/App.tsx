import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TasksLayout from './pages/TaskLayout';
import Alltasks from './pages/tasks/AllTasks';
import Home from './pages/Home';
import MyTasks from './pages/tasks/MyTasks';
import PendingTasks from './pages/tasks/PendingTasks';

import Login from './pages/login/Login';
import Deneme from './pages/tasks/Deneme';
import LoginLayout from './pages/LoginLayout';

const App: React.FC = () => {

  const strCurrentUser = localStorage.getItem("user");


  return strCurrentUser !== null ? (
    <BrowserRouter>
      <Routes>
        <Route element={<TasksLayout />} >
          <Route path='/' element={<Home />} />
          <Route path='/Alltasks' element={<Alltasks />} />
          <Route path='/MyTasks' element={<MyTasks />} />
          <Route path='/Deneme' element={<Deneme />} />
          <Route path='/PendingTasks' element={<PendingTasks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  ) : (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LoginLayout />} >
            <Route path='/Login' element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export { App }