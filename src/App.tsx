import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TasksLayout from './pages/tasks/Layout/TaskLayout';
import Alltasks from './pages/tasks/AllTasks';
import Home from './Layouts/Home';
import MyTasks from './pages/tasks/MyTasks';
import PendingTasks from './pages/tasks/PendingTasks';
import Deneme from './pages/tasks/Deneme';
import Login from './pages/login/Login';
import NotFound from './Layouts/NotFound';
import LoginLayout from './pages/login/Layout/LoginLayout';
import { TaskUrls } from './models/tasks/TaskModel';
import { observer } from 'mobx-react-lite';
import axios from 'axios';
import { BringAsString } from './services';
import "./i18n"

let currentUser: string = ""
if (localStorage.getItem('user') !== null) {
  currentUser = JSON.parse(localStorage.getItem("user") || "").jwtToken
}

axios.defaults.headers.common["Authorization"] = `Bearer ${currentUser}`;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.baseURL = "http://localhost:5000/api"

interface IAppProps { }
const App: React.FC<IAppProps> = observer(() => {

  const { getURLAsString } = BringAsString

  return currentUser.length ? (
    <BrowserRouter>
      <Routes>
        <Route element={<TasksLayout />} >
          <Route path={getURLAsString(TaskUrls.Home)} element={<Home />} />
          <Route path={getURLAsString(TaskUrls.AllTasks)} element={<Alltasks />} />
          <Route path={getURLAsString(TaskUrls.MyTasks)} element={<MyTasks />} />
          <Route path={getURLAsString(TaskUrls.PendingTasks)} element={<PendingTasks />} />
          <Route path={"/Deneme"} element={<Deneme />} />
          <Route path={getURLAsString(TaskUrls.NotFound)} element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  ) : (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LoginLayout />} >
            <Route path='/Login' element={<Login />} />
            <Route path={"/Deneme"} element={<Deneme />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
})
export { App }

