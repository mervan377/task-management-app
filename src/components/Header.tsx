import { Menu, Button } from '@fluentui/react-northstar'
import { LeaveIcon } from '@fluentui/react-icons-northstar';
import "../App.css"
import { useNavigate } from 'react-router-dom'
import { authStore } from "../pages/login/stores/authStore"
import { store } from '../pages/tasks/stores/TaskStore';
import { observer } from 'mobx-react-lite';
import LogoutWarningDailog from './LogoutWarningDailog'
import React from 'react';
import { TaskUrls } from '../models/tasks/TaskModel';
import { BringAsString } from '../services/services';

interface IHeaderProps { }

const Header: React.FC<IHeaderProps> = observer(() => {
  const navigate = useNavigate();
  const { changeLogoutWarningOpenModal } = authStore
  const { getURLAsString } = BringAsString

  let userName: string = ""
  if (localStorage.getItem("user") !== null) {
    userName = JSON.parse(localStorage.getItem("user") || "").name;
  }

  return (
    <React.Fragment>
      <Menu
        items={[
          {
            content: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI1OjKY1KKU5K4Yym9v7bJbBQoJuskcHgx8A&usqp=CAU' className='logo' alt='' />,
            key: 'logo',
            onClick: () => navigate(getURLAsString(TaskUrls.Home))
          },
          {
            content: "Home",
            key: 'Home',
            onClick: () => navigate(getURLAsString(TaskUrls.Home)),
          },
          {
            content: 'All Tasks',
            key: 'AllTasks',
            onClick: () => navigate(getURLAsString(TaskUrls.AllTasks))
          },
          {
            content: "My Tasks",
            key: 'MyTasks',
            onClick: () => navigate(getURLAsString(TaskUrls.MyTasks))
          },
          {
            content: "Pending Tasks",
            key: 'PendingTasks',
            onClick: () => navigate(getURLAsString(TaskUrls.PendingTasks))
          }
        ]}
      />
      <div style={{ position: "absolute", top: "1rem", right: "2rem" }}>
        <span className='welcome-user'>
          Welcome {userName}
        </span>
        <Button content="Logout" onClick={() => {
          changeLogoutWarningOpenModal(true)
        }} icon={<LeaveIcon />} />
      </div>
      <LogoutWarningDailog />
      {
        store.isTaskSuccessOrNotPopup ? (
          <>
            <div className="message-container">
              <div className={`message-response message-animate`}>
                {
                  store.ModalActionTypeName
                }
              </div>
            </div>
          </>
        ) : (
          ""
        )
      }
    </React.Fragment>
  )
})

export default Header