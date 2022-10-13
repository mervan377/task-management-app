import { observer } from 'mobx-react-lite'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { strings } from '../i18n'
import { TaskUrls } from '../models/tasks/TaskModel'
import { BringAsString } from '../services/services'

interface IFooterProps { }
const Footer: React.FC<IFooterProps> = observer(() => {
    const navigate = useNavigate()
    const { getURLAsString } = BringAsString
    const { t } = strings

    return (
        <React.Fragment>

            <footer className="footer">

                <div className="footer-container">

                    <div className="footer-logo">
                        {t("ui.projectName")}
                    </div>

                    <div className='about-project'>
                        <div>{t("ui.projectName")}</div>
                        <div>{t("ui.projectAddvertisment")}</div>
                        <div>Mervan Yalcin {t("ui.createdBy")} </div>
                    </div>

                    <div className="footer-menus">
                        <ul>
                            <li onClick={() => {
                                navigate(getURLAsString(TaskUrls.Home))
                            }}>
                                {t("menus.home")}
                            </li>
                            <li onClick={() => {
                                navigate(getURLAsString(TaskUrls.AllTasks))
                            }}>
                                {t("menus.allTasks")}
                            </li>
                            <li onClick={() => {
                                navigate(getURLAsString(TaskUrls.MyTasks))
                            }}>
                                {t("menus.myTasks")}
                            </li>
                            <li onClick={() => {
                                navigate(getURLAsString(TaskUrls.PendingTasks))
                            }}>
                                {t("menus.pendingTasks")}
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>

        </React.Fragment >
    )
})
export default Footer