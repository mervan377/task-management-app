import React from 'react'
import { Outlet } from "react-router-dom";
import Header from './Header';
import BreadcrumbTop from './Breadcrumb';
import { observer } from 'mobx-react-lite';

interface ITaskLayoutFormProps { }

const TasksLayout: React.FC<ITaskLayoutFormProps> = observer(() => {
    return (
        <React.Fragment>
            <Header />
            <div className='container'>
                <div className="container-content">
                    <BreadcrumbTop />
                    <Outlet />
                </div>
            </div>
        </React.Fragment>
    )
})

export default TasksLayout