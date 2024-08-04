import React, { useState } from 'react';

export default function Sidebar() {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  function handleExpand() {

    setSidebarExpanded(!sidebarExpanded);

    const lineOne = document.querySelector(".line-1")
    const lineTwo = document.querySelector(".line-2")
    const lineThree = document.querySelector(".line-3")

  }


  const sidebarMenu = (
    <div className='sidebar-button' onClick={handleExpand}>
      <div className='line-1'></div>
      <div className='line-2'></div>
      <div className='line-3'></div>
    </div>
  );

  return (
    <>
      {sidebarExpanded ? (
        <div className='sidebar'>
            {sidebarMenu}
            <div className='s-navbar'>
              <div><i className="fa-solid fa-house"></i> Home</div>
              <div><i className="fa-solid fa-feather"></i> Other</div>
            </div>
        </div>
      ) : (
        <div className='sidebarClosed'>
          {sidebarMenu}
        </div>
      )}
    </>
  );
}
