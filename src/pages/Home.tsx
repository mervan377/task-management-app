import { NotesIcon, PersonIcon, TaskListIcon } from '@fluentui/react-northstar'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { Link } from 'react-router-dom'
import { TaskUrls } from '../models/tasks/TaskModel'
import { store } from './tasks/stores/TaskStore'

interface IHomePageProps { }

const Home: React.FC<IHomePageProps> = observer(() => {

  const { allTasks, myTasks, pendingTasks } = store

  React.useMemo(() => {
    store.initalizesTaskList();
  }, [])

  return (
    <div>
      <div className="home_box_wrapper">
        <Link to={store.getURLAsString(TaskUrls.AllTasks)}>
          <div className="home_box">
            <div className='extra_info'>
              <div className='extra_info_icon'>
                <NotesIcon />
              </div>
              <div className="extra_info_text">
                <p>All Tasks</p>
                <p>{allTasks.length}</p>
              </div>
            </div>
          </div>
        </Link>

        <Link to={store.getURLAsString(TaskUrls.MyTasks)}>
          <div className="home_box">
            <div className='extra_info'>
              <div className='extra_info_icon'>
                <PersonIcon />
              </div>
              <div className="extra_info_text">
                <p>My Tasks</p>
                <p>{myTasks.length}</p>
              </div>
            </div>
          </div>
        </Link>

        <Link to={store.getURLAsString(TaskUrls.PendingTasks)}>
          <div className="home_box">
            <div className='extra_info'>
              <div className='extra_info_icon'>
                <TaskListIcon />
              </div>
              <div className="extra_info_text">
                <p> Pending Tasks</p>
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