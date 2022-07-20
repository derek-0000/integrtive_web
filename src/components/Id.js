import React from 'react'
import './Id.css'
import Cookies from 'universal-cookie'
var ReactDOM = require('react-dom');
var Barcode = require('react-barcode');

const cookies = new Cookies();
const data = cookies.getAll()

export default function Id() {
  console.log(data.fist_name)
  return (
    <>
    <div className='background'>
        <div className='elements-container'>
            <div className='card-element'>{data.first_name + " " + data.last_names}</div>
            <div className='image'>                    
                <img src="https://pbs.twimg.com/media/FTxn1pEWUAIPiO4?format=png&name=small" alt="logo" width="300px" className='student-pic'/>
            </div>
            <div className='card-element'>{data.carrer}</div>
            <div className='card-element'>{data.email}</div>
            <div className='card-element'>{data.id}</div>
            <div className='c-barcode'>
                <Barcode className='barcode' value={data.id} />
            </div>
            {/* <div className='barcode'>||||||||||||</div */}
        </div>
    </div>
    </>
  )
}

