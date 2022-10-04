import { Dialog } from '@fluentui/react-northstar';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { authStore } from '../pages/login/stores/authStore';


interface ILogoutWarningFormProps {
}

const LogoutWarningDialog: React.FC<ILogoutWarningFormProps> = observer(() => {
    const { isLogoutWarningOpenModal, changeLogoutWarningOpenModal, logout } = authStore;
    return (
        <Dialog
            open={isLogoutWarningOpenModal}
            cancelButton="Close"
            onCancel={() => {
                changeLogoutWarningOpenModal(false)
            }}
            confirmButton="Logout"
            onConfirm={() => {
                logout()
            }} 
            header="Are you sure you want to logout?"
        />
    )

});



export default LogoutWarningDialog;