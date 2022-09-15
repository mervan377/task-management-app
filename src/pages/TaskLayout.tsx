import React from 'react'
import { Outlet } from "react-router-dom";
import Header from './Header';
import BreadcrumbTop from './Breadcrumb'; 
import TaskCreateDialog from '../components/TaskCreateDialog';
import { observer } from 'mobx-react-lite';
import { ITaskModel } from '../models/tasks/TaskModel';
import { store } from "./tasks/stores/TaskStore"

interface ICreateTaskFormProps {
    selectedTask?: ITaskModel
}

const TasksLayout: React.FC<ICreateTaskFormProps> = observer(() => {
    return (
        <div>
            <Header />
            <div className='container'>
                <div className="container-content">
                    <BreadcrumbTop />

                    <TaskCreateDialog taskStore={store} />
                    <Outlet />
                </div>
            </div>
        </div>
    )
})

export default TasksLayout