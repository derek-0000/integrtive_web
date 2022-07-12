import React from 'react'
import ProffesorProfile from '../../components/ProfessorProfile'
import SidebarProfessors from '../../components/SidebarProfessors'

function ProfessorProfile() {
  return (
    <div>
      <SidebarProfessors/>
      <div className='prof'>
          <ProffesorProfile/>
      </div>
    </div>
  )
}

export default ProfessorProfile