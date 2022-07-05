import React from 'react'
import Id from '../components/Id';
import Sidebar from '../components/Sidebar';

function UserID() {

  return (
    <div>
      <Sidebar/>
      <div className='studentID'>
        <Id></Id>
      </div>
    </div>
  )
}

export default UserID;