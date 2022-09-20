import { Dialog } from '@fluentui/react-northstar';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { store } from '../pages/tasks/stores/TaskStore';


interface ILogoutWarningFormProps {
}

const LogoutWarningDialog: React.FC<ILogoutWarningFormProps> = observer(() => {
    const { isLogoutWarningOpenModal, changeLogoutWarningOpenModal } = store;
    return (
        <Dialog
            open={isLogoutWarningOpenModal}
            cancelButton="Close"
            onCancel={() => {
                changeLogoutWarningOpenModal(false)
            }}
            confirmButton="Logout"
            onConfirm={() => {
                localStorage.removeItem("user");
                window.location.href = "/Login";
            }} 
            header="Are you sure you want to logout?"
        />
    )

});



export default LogoutWarningDialog;