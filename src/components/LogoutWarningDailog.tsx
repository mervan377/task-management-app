import { Dialog } from '@fluentui/react-northstar';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { strings } from '../i18n';
import { authStore } from '../pages/login/stores/authStore';


interface ILogoutWarningFormProps {
}

const LogoutWarningDialog: React.FC<ILogoutWarningFormProps> = observer(() => {
    const { isLogoutWarningOpenModal, changeLogoutWarningOpenModal, logout } = authStore;
    const { t } = strings
    return (
        <Dialog
            open={isLogoutWarningOpenModal}
            cancelButton={t("dialogTexts.close")}
            onCancel={() => {
                changeLogoutWarningOpenModal(false)
            }}
            confirmButton={t("menus.logout")}
            onConfirm={() => {
                logout()
            }} 
            header={t("dialogTexts.logoutTitle")}
        />
    )

});



export default LogoutWarningDialog;