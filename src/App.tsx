import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TasksLayout from './pages/TaskLayout';
import Alltasks from './pages/tasks/AllTasks';
import Home from './pages/Home';
import MyTasks from './pages/tasks/MyTasks';
import PendingTasks from './pages/tasks/PendingTasks';

import Login from './pages/login/Login';
import NotFound from './pages/NotFound';
import LoginLayout from './pages/LoginLayout';
import { TaskUrls } from './models/tasks/TaskModel';
import { observer } from 'mobx-react-lite';
import { store } from './pages/tasks/stores/TaskStore';

interface IAppProps {}

const App: React.FC<IAppProps> = observer(() => {

  console.log(store.getURLAsString(TaskUrls.AllTasks))

  const strCurrentUser = localStorage.getItem("user")

  return strCurrentUser !== null ? (
    <BrowserRouter>
      <Routes>
        <Route element={<TasksLayout />} >
          <Route path={store.getURLAsString(TaskUrls.Home)} element={<Home />} />
          <Route path={store.getURLAsString(TaskUrls.AllTasks)} element={<Alltasks />} />
          <Route path={store.getURLAsString(TaskUrls.MyTasks)} element={<MyTasks />} />
          <Route path={store.getURLAsString(TaskUrls.PendingTasks)} element={<PendingTasks />} />
          <Route path={store.getURLAsString(TaskUrls.NotFound)} element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  ) : (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LoginLayout />} >
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
})

export { App }