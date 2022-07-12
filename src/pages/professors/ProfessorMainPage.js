import React from 'react'
import ProfessorMain from '../../components/ProfessorMain'
import SidebarProfessors from '../../components/SidebarProfessors'

function ProfessorMainPage() {
  return (
    <div>
      <SidebarProfessors/>
      <div className='professor-main'>
          <ProfessorMain/>
      </div>
    </div>
  )
}

export default ProfessorMainPage