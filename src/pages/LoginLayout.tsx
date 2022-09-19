import React from 'react'
import { Outlet } from "react-router-dom";
import { observer } from 'mobx-react-lite';

interface ILoginLayoutProps {
}

const LoginLayout: React.FC<ILoginLayoutProps> = observer(() => {
    return (
        <div>
            <Outlet />
        </div>
    )
})

export default LoginLayout