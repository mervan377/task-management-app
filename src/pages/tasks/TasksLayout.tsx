import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../Header';
import "../../App.css"

function TasksLayout() {
    return (
        <div>
            <Header />
            <div className='container'>
                <div className="container-content">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default TasksLayout

// En sağ tarafta logout
//Sol tarafta Logo
