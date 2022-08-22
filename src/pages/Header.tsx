import { Menu, Button } from '@fluentui/react-northstar'
import {LeaveIcon } from '@fluentui/react-icons-northstar';
import React from 'react'
import "../App.css"

function Header() {

  const LogoutHandle = () => {
    alert("Çıkış yapıalcak")
  }

  return (
    <div>
      <Menu 
        items={[
          {
            content: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI1OjKY1KKU5K4Yym9v7bJbBQoJuskcHgx8A&usqp=CAU' className="logo" />,
            href: '/'
          },
          {
            content: 'Home',
            href: '/',
          },
          {
            content: 'All Tasks',
            href: '/AllTasks',
          },
          {
            content: 'My Tasks',
            href: '/MyTasks',
          },
          {
            content: 'Pending Tasks',
            href: '/PendingTasks',
          },
          {
            content: 'Create Tasks',
            href: '/CreateTasks',
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