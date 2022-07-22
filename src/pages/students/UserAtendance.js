import React from 'react'
import Sidebar from '../../components/Sidebar'
import StudentAtendance from '../../components/StudentAtendance'

function UserAtendance() {
  return (
    <div>
      <Sidebar/>
      <div className='studentID'>
        <StudentAtendance></StudentAtendance>
      </div>
    </div>
  )
}

export default  UserAtendance