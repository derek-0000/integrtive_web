import React from 'react'
import StudentProfile from '../../components/StudentProfile';
import Sidebar from '../../components/Sidebar';

function Profile() {
  return (
    <div>
      <Sidebar/>
      <div className='profile'>
        <StudentProfile/>
      </div>
    </div>
  )
}

export default Profile;