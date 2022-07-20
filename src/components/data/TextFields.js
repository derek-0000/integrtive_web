import React from 'react'
import Cookies from 'universal-cookie'
const cookies = new Cookies();
const data = cookies.getAll()

export const TextFields=[
    {
        containerClassName:'txt-name c-txt-field',
        className:'name txt-field',
        label:'Name',
        data:`${data.first_name}`
    },
    {
        containerClassName:'txt-name c-txt-field',
        className:'lastname txt-field',
        label:'Last Name',
        data:`${data.last_names}`
    },
    {
        containerClassName:'txt-id c-txt-field',
        className:'id txt-field',
        label:'ID',
        data:`${data.id}`
    },
    {
        containerClassName:'txt-group c-txt-field',
        className:'group txt-field',
        label:'Group',
        data:`${data.id + "addgroup"}`
    },
    {
        containerClassName:'txt-carrer c-txt-field',
        className:'carrer txt-field',
        label:'Carrer',
        data:`${data.carrer}`
    },
    {
        containerClassName:'txt-email c-txt-field',
        className:'email txt-field',
        label:'E-mail',
        data:`${data.email}`
    },
]
{/* <div className='c-image'>
        <img className='user-pictue' src='https://pbs.twimg.com/profile_images/1477216165776994306/y-bgBXbD_400x400.jpg' width='300px'></img>
      </div>
      <div className='txt-name c-txt-field'>
        <input className='name txt-field'/>
      </div>
      <div className='txt-lastname c-txt-field'>
        <input className='lastname txt-field'/>
      </div>
      <div className='txt-id c-txt-field'>
        <input className='id txt-field'/>
      </div>
      <div className='txt-group c-txt-field'>
        <input className='group txt-field'/>
      </div>
      <div className='txt-carrer c-txt-field'>
        <input className='carrer txt-field'/>
      </div>
      <div className='txt-email c-txt-field'>
        <input className='email txt-field'/>
      </div> */}