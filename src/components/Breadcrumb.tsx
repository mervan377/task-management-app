import { Breadcrumb, ChevronEndIcon } from '@fluentui/react-northstar';
import { observer } from 'mobx-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface IBreadcrumbProps { }
const BreadcrumbTop: React.FC<IBreadcrumbProps> = observer(() => {


    const location = useLocation();
    let currentLocation: string = location.pathname.replace('-', ' ').replace('/', '')

    return (
        <React.Fragment>
            <Breadcrumb aria-label="breadcrumb" className='breadcrumb_header'>
                <Breadcrumb.Item>
                    <Link to="/" >Home</Link>
                </Breadcrumb.Item>
                {
                    currentLocation ? (
                        <Breadcrumb.Divider>
                            <ChevronEndIcon />
                        </Breadcrumb.Divider>
                    ) : (
                        ""
                    )
                }
                <Breadcrumb.Item>
                    <div className="current-location" style={{ textTransform: "capitalize" }}>{currentLocation}</div>
                </Breadcrumb.Item>
            </Breadcrumb>
        </React.Fragment>
    )
})

export default BreadcrumbTop
