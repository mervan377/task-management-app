import { NotesIcon, PersonIcon, TaskListIcon } from '@fluentui/react-northstar'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { Link } from 'react-router-dom'
import { TaskUrls } from '../models/tasks/TaskModel'
import { BringAsString } from '../services/services'
import { store } from '../pages/tasks/stores/TaskStore'
import { strings } from '../i18n'


interface IHomePageProps { }

const Home: React.FC<IHomePageProps> = observer(() => {

  const { allTasks, myTasks, pendingTasks } = store
  const { getURLAsString } = BringAsString
  const { t } = strings

  React.useEffect(() => {
    store.initalizesTaskList();
  }, [])

  return (
    <div>
      <div className="home_box_wrapper">
        <Link to={getURLAsString(TaskUrls.AllTasks)}>
          <div className="home_box">
            <div className='extra_info'>
              <div className='extra_info_icon'>
                <NotesIcon />
              </div>
              <div className="extra_info_text">
                <p>{t("menus.allTasks")}</p>
                <p>{allTasks.length}</p>
              </div>
            </div>
          </div>
        </Link>

        <Link to={getURLAsString(TaskUrls.MyTasks)}>
          <div className="home_box">
            <div className='extra_info'>
              <div className='extra_info_icon'>
                <PersonIcon />
              </div>
              <div className="extra_info_text">
                <p>{t("menus.myTasks")}</p>
                <p>{myTasks.length}</p>
              </div>
            </div>
          </div>
        </Link>

        <Link to={getURLAsString(TaskUrls.PendingTasks)}>
          <div className="home_box">
            <div className='extra_info'>
              <div className='extra_info_icon'>
                <TaskListIcon />
              </div>
              <div className="extra_info_text">
                <p> {(t("menus.pendingTasks"))} </p>
                <p>{pendingTasks.length}</p>
              </div>
            </div>
          </div>
        </Link>
      </div >
    </div >
  )
})

export default Home