import React from 'react'

export default function Sidebar() {
  return (
    <sidebar>
        <div className='sidebar-button'>
          <div className='line-1'></div>
          <div className='line-2'></div>
          <div className='line-3'></div>
        </div>
        <div className='s-navbar'>
          <div> <i className="fa-solid fa-house"></i> Home</div>
          <div><i className="fa-solid fa-feather"></i> other</div>
        </div>
    </sidebar>
  )
}
