import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../Header';
import "../../App.css"
import BreadcrumbTop from '../components/Breadcrumb';
import { AddIcon, Button } from '@fluentui/react-northstar';

import TaskCreateDialog from './components/TaskCreateDialog';
import { observer } from 'mobx-react-lite';
import { ITaskModel } from '../../models/tasks/TaskModel';
import { store } from "./stores/TaskStore"

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
                    <Button content="Create Task" icon={<AddIcon />} iconPosition="after" onClick={() => {
                        store.initializeSelectedTask()
                        store.changeCreatePopupVisibility(true)
                    }} />
                    <TaskCreateDialog taskStore={store} />
                    <Outlet />
                </div>
            </div>
        </div>
    )
})

export default TasksLayout