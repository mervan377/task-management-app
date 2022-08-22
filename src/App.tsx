import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TasksLayout from './pages/tasks/TasksLayout';
import Alltasks from './pages/tasks/AllTasks';
import Home from './pages/Home';
import MyTasks from './pages/tasks/MyTasks';
import CreateTasks from './pages/tasks/CreateTasks';
import PendingTasks from './pages/tasks/PendingTasks';
 
import Login from './pages/Login';
import LoginLayout from './pages/LoginLayout';

function App() {

  const session = localStorage.getItem('session') || '';

  if(typeof(session) !== 'string') {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TasksLayout />} >
            <Route path='/Home' element={<Home />} />
            <Route path='/Alltasks' element={<Alltasks />} />
            <Route path='/MyTasks' element={<MyTasks />} />
            <Route path='/CreateTasks' element={<CreateTasks />} />
            <Route path='/PendingTasks' element={<PendingTasks />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  } else if(typeof(session) === 'string') {
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<LoginLayout />} >
            <Route path='/Login' element={<Login />} />
          </Route>
    </Routes>
  </BrowserRouter>
  }

  return (
    <>


    </>
  );
}

export default App;