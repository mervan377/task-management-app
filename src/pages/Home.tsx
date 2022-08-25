import { NotesIcon } from '@fluentui/react-northstar'
import React from 'react'

function Home() {
  return (
    <div>
      <div className="home_bar">
        <div className='extra_info'>
          <div className='extra_info_icon'>
            <NotesIcon />
          </div>
          <div className="extra_info_text">
            <p>All Pending Tasks</p>
            <p>4</p>
          </div>
        </div>
      </div>
    </div>
  )
} 
export default Home