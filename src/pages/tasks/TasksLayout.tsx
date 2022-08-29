import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../Header';
import "../../App.css"
import TaskCreateDialog from './components/CreateTaskDialog';
import BreadcrumbTop from '../components/Breadcrumb';
import { TaskStore } from "./stores/TaskStore"


function TasksLayout() {
    return (
        <div>
            <Header />
            <div className='container'>
                <div className="container-content">
                    <BreadcrumbTop />

                    <TaskCreateDialog createTaskStore={new TaskStore()} />

                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default TasksLayout


