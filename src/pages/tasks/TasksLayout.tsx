import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../Header';
import "../../App.css"
import CreateTaskDialog from './components/CreateTaskDialog';
import BreadcrumbTop from '../components/Breadcrumb';
import { CreateTaskStore } from "./stores/CreateTaskStore"


function TasksLayout() {
    return (
        <div>
            <Header />
            <div className='container'>
                <div className="container-content">
                    <BreadcrumbTop />

                    <CreateTaskDialog createTaskStore={CreateTaskStore} />

                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default TasksLayout


