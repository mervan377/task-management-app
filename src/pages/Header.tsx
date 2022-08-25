import { Menu, Button } from '@fluentui/react-northstar'
import { LeaveIcon } from '@fluentui/react-icons-northstar';
import React from 'react'
import "../App.css"

import CreateTaskDialog from './components/CreateTaskDialog'

function Header() {

  const LogoutHandle = () => {
    alert("it is going to quit'")
  }

  return (
    <div>
      <Menu key='asd'
        items={[
          {
            content: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI1OjKY1KKU5K4Yym9v7bJbBQoJuskcHgx8A&usqp=CAU' className="logo" />,
            href: '/',
            key: 'logo'
          },
          {
            content: 'Home',
            href: '/',
            key: 'Home'
          },
          {
            content: 'All Tasks',
            href: '/AllTasks',
            key: 'AllTasks'
          },
          {
            content: 'My Tasks',
            href: '/MyTasks',
            key: 'MyTasks'
          },
          {
            content: 'Pending Tasks',
            href: '/PendingTasks',
            key: 'PendingTasks'
          },
          {
            content: <CreateTaskDialog />
          },
          {
            content: <Button content="Logout" onClick={LogoutHandle} icon={<LeaveIcon />} />
          },

        ]}
      />
    </div>
  )
}

export default Header