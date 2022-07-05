import React from 'react'
import ProffesorProfile from '../components/ProfessorProfile'
import Sidebar from '../components/Sidebar'

function ProfessorProfile() {
  return (
    <div>
      <Sidebar/>
      <div className='prof'>
          <ProffesorProfile/>
      </div>
    </div>
  )
}

export default ProfessorProfile