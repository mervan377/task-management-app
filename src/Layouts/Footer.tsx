import { observer } from 'mobx-react-lite'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TaskUrls } from '../models/tasks/TaskModel'
import { BringAsString } from '../services/services'

interface IFooterProps { }
const Footer: React.FC<IFooterProps> = observer(() => {
    const navigate = useNavigate()
    const { getURLAsString } = BringAsString
    return (
        <React.Fragment>

            <footer className="footer">

                <div className="footer-container">

                    <div className="footer-logo">
                        TASK MANAGEMENT APP
                    </div>

                    <div className='about-project'>
                        <div>Task Management App</div>
                        <div>Manage your to do stuff and manage your time</div>
                        <div>Created by Mervan Yalcin</div>
                    </div>

                    <div className="footer-menus">
                        <ul>
                            <li onClick={() => {
                                navigate(getURLAsString(TaskUrls.Home))
                            }}> Home</li>
                            <li onClick={() => {
                                navigate(getURLAsString(TaskUrls.AllTasks))
                            }}>
                                All Tasks
                            </li>
                            <li onClick={() => {
                                navigate(getURLAsString(TaskUrls.MyTasks))
                            }}>
                                My Tasks
                            </li>
                            <li onClick={() => {
                                navigate(getURLAsString(TaskUrls.PendingTasks))
                            }}>
                                Pendings
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>

        </React.Fragment >
    )
})
export default Footer