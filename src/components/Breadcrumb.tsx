import { Breadcrumb, ChevronEndIcon } from '@fluentui/react-northstar';
import { useLocation } from 'react-router-dom';


function BreadcrumbTop() {

    const location = useLocation();
    let currentLocation: string = location.pathname.replace('/', '')

    return (
        <>
            <Breadcrumb aria-label="breadcrumb" className='breadcrumb_header'>
                <Breadcrumb.Item>
                    <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Divider>
                    <ChevronEndIcon />
                </Breadcrumb.Divider>
                <Breadcrumb.Item>
                    <Breadcrumb.Link >{currentLocation}</Breadcrumb.Link>
                </Breadcrumb.Item>
            </Breadcrumb>
        </ >
    )
}

export default BreadcrumbTop
