import { NotesIcon, PersonIcon, TaskListIcon } from '@fluentui/react-northstar'
import React from 'react'

function Home() {
  return (
    <div>
      <div className="home_box_wrapper">
        <div className="home_box">
          <div className='extra_info'>
            <div className='extra_info_icon'>
              <NotesIcon />
            </div>
            <div className="extra_info_text">
              <p>All Tasks</p>
              <p>59</p>
            </div>
          </div>
        </div>

        <div className="home_box">
          <div className='extra_info'>
            <div className='extra_info_icon'>
              <TaskListIcon />
            </div>
            <div className="extra_info_text">
              <p> Pending Tasks</p>
              <p>46</p>
            </div>
          </div>
        </div>

        <div className="home_box">
          <div className='extra_info'>
            <div className='extra_info_icon'>
              <PersonIcon />
            </div>
            <div className="extra_info_text">
              <p>My Tasks</p>
              <p>13</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home