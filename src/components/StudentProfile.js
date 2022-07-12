import React from 'react'
import './UserProfile.css'
import { TextFields } from './data/TextFields'

function StudentProfile() {
  return (
    <>
    <div className='c-profile'>
      <div className='c-image'>
        <img className='user-picture' src='https://pbs.twimg.com/profile_images/1477216165776994306/y-bgBXbD_400x400.jpg' width='300px'></img>
      </div>

      { TextFields.map((item, index) => {
        return(
        <div key={index} className={item.containerClassName}>
            <input id={index} className={item.className} placeholder={item.label}/>
        </div>
        )
      })},
    </div>
    </>
  )
}

export default StudentProfile