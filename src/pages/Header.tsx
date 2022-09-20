import { Menu, Button } from '@fluentui/react-northstar'
import { LeaveIcon } from '@fluentui/react-icons-northstar';
import "../App.css"
import { useNavigate } from 'react-router-dom'
import { store } from "./tasks/stores/TaskStore"
import { observer } from 'mobx-react-lite';
import LogoutWarningDailog from '../components/LogoutWarningDailog'
import React from 'react';

interface IHeaderProps { }

const Header: React.FC<IHeaderProps> = observer(() => {

  const navigate = useNavigate();

  const { changeLogoutWarningOpenModal } = store

  return (
    <React.Fragment>
      <Menu
        items={[
          {
            content: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI1OjKY1KKU5K4Yym9v7bJbBQoJuskcHgx8A&usqp=CAU' className='logo' alt='' />,
            key: 'logo',
            onClick: () => navigate("/")
          },
          {
            content: "Home",
            key: 'Home',
            onClick: () => navigate("/"),
          },
          {
            content: 'All Tasks',
            key: 'AllTasks',
            onClick: () => navigate("/all-tasks")
          },
          {
            content: "My Tasks",
            key: 'MyTasks',
            onClick: () => navigate("/my-tasks")
          },
          {
            content: "Pending Tasks",
            key: 'PendingTasks',
            onClick: () => navigate("/pending-tasks")
          }
        ]}
      />

      <div style={{ position: "absolute", top: "1rem", right: "2rem" }}>
        <span className='welcome-user'>
          Welcome {`${JSON.parse(localStorage.getItem("user") || "").name}`}
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
                  store.getTaskActionTypes(store.isActionType)
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