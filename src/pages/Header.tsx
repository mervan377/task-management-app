import { Menu, Button } from '@fluentui/react-northstar'
import { LeaveIcon } from '@fluentui/react-icons-northstar';
import "../App.css"
import { NavLink as Nav } from 'react-router-dom'


function Header() {
  const LogoutHandle = () => {
    localStorage.removeItem("user")
    window.location.href = "/Login"
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
            content: <Nav to="/" className="header-menu-item">Home</Nav>,
            href: '/',
            key: 'Home'
          },
          {
            content: <Nav to="AllTasks" className="header-menu-item">All Tasks</Nav>,
            href: '/AllTasks',
            key: 'AllTasks'
          },
          {
            content: <Nav to="MyTasks" className="header-menu-item">My Tasks</Nav>,
            href: '/MyTasks',
            key: 'MyTasks'
          },
          {
            content: <Nav to="PendingTasks" className="header-menu-item">Pending Tasks</Nav>,
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