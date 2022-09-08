import React from 'react'
import { Outlet } from "react-router-dom";
import { observer } from 'mobx-react-lite';
import { ITaskModel } from '../models/tasks/TaskModel';

interface ICreateTaskFormProps {
    selectedTask?: ITaskModel
}

const LoginLayout: React.FC<ICreateTaskFormProps> = observer(() => {
    return (
        <div>
            <Outlet />
        </div>
    )
})

export default LoginLayout