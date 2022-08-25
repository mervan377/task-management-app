import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../Header';
import "../../App.css"
import { Breadcrumb, ChevronEndIcon } from '@fluentui/react-northstar';

function TasksLayout() {
    return (
        <div>
            <Header />
            <div className='container'>
                <div className="container-content">
                    <Breadcrumb aria-label="breadcrumb" className='breadcrumb_header'>
                        <Breadcrumb.Item>
                            <Breadcrumb.Link href="">Home</Breadcrumb.Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Divider>
                            <ChevronEndIcon />
                        </Breadcrumb.Divider>
                        <Breadcrumb.Item>
                            <Breadcrumb.Link href="">Store</Breadcrumb.Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Divider>
                            <ChevronEndIcon />
                        </Breadcrumb.Divider>
                        <Breadcrumb.Item aria-current="page">T-shirt</Breadcrumb.Item>
                    </Breadcrumb>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default TasksLayout

// En sağ tarafta logout
//Sol tarafta Logo
