import { Menu, Button } from '@fluentui/react-northstar'
import { LeaveIcon } from '@fluentui/react-icons-northstar';
import "../App.css"
import { NavLink as Nav } from 'react-router-dom'


function Header() {
  const LogoutHandle = () => {
    alert("it is going to quit'")
  }
  return (
    <div>
      <Menu
        items={[
          {
            content: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI1OjKY1KKU5K4Yym9v7bJbBQoJuskcHgx8A&usqp=CAU' className='logo' alt='' />,
            href: '/',
            key: 'logo'
          },
          {
            content: <Nav to="/" className="">Home</Nav>,
            href: '/',
            key: 'Home'
          },
          {
            content: <Nav to="AllTasks" className="">All Tasks</Nav>,
            href: '/AllTasks',
            key: 'AllTasks'
          },
          {
            content: <Nav to="MyTasks" className="">My Tasks</Nav>,
            href: '/MyTasks',
            key: 'MyTasks'
          },
          {
            content: <Nav to="PendingTasks" className="">Pending Tasks</Nav>,
            href: '/PendingTasks',
            key: 'PendingTasks'
          },
          {
            content: <Button content="Logout" onClick={LogoutHandle} icon={<LeaveIcon />} />,
            key: 'logout'
          }
        ]}
      />

    </div>
  )
}

export default Header