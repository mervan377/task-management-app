import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { Button, ContactGroupIcon } from '@fluentui/react-northstar';
import { useNavigate } from 'react-router-dom';
import { strings } from '../i18n';

interface INotFoundProps { }

const NotFound: React.FC<INotFoundProps> = observer(() => {
    const navigate = useNavigate()

    const strCurrentUser = localStorage.getItem("user")

    const { t } = strings

    return strCurrentUser === null ? (
        <React.Fragment>
            <h1>{t("ui.pageNotFound")}</h1>
            <Button icon iconPosition="before" primary>
                <ContactGroupIcon xSpacing="after" />
                <Button.Content content={t("menus.login")} onClick={() => {
                    navigate("/Login")
                }} />
            </Button>
        </React.Fragment>
    ) : (
        <React.Fragment>
            <h1> {t("ui.pageNotFound")} </h1>
            <Button icon iconPosition="before" primary>
                <ContactGroupIcon xSpacing="after" />
                <Button.Content content={t("menus.home")}  onClick={() => {
                    navigate("/")
                }} />
            </Button>
        </React.Fragment>
    )

})


export default NotFound;