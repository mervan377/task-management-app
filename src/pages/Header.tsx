import { Menu, Button } from '@fluentui/react-northstar'
import { LeaveIcon } from '@fluentui/react-icons-northstar';
import "../App.css"
import { useNavigate } from 'react-router-dom'
import { authStore } from './login/stores/authStore'; 


function Header() {

  const { logout } = authStore
  const navigate = useNavigate();

  return (
    <div>
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
            onClick: () => navigate("/AllTasks")
          },
          {
            content: "My Tasks",
            key: 'MyTasks',
            onClick: () => navigate("/MyTasks")
          },
          {
            content: "Pending Tasks",
            key: 'PendingTasks',
            onClick: () => navigate("/PendingTasks")
          },
          {
            content: <Button content="Logout" onClick={logout} icon={<LeaveIcon />} />,
            key: 'logout'
          }
        ]}
      />

    </div>
  )
}

export default Header