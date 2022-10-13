import React from 'react'
import { Outlet, useLocation } from "react-router-dom";
import Header from '../../../Layouts/Header';
import BreadcrumbTop from '../../../Layouts/Breadcrumb';
import { observer } from 'mobx-react-lite';
import Footer from '../../../Layouts/Footer';
import CreateButton from '../../../Layouts/CreateButton';

interface ITaskLayoutFormProps { }

const TasksLayout: React.FC<ITaskLayoutFormProps> = observer(() => {

    const currentLocation = useLocation()
    return (
        <React.Fragment>
            <Header />
            <div className='container'>
                <div className="container-content">
                    {
                        currentLocation.pathname === "/my-tasks" || currentLocation.pathname === "/all-tasks" ? <CreateButton /> : ""
                    }
                    <BreadcrumbTop />
                    <Outlet />
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
})

export default TasksLayout