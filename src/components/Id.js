import React from 'react'
import './Id.css'
var ReactDOM = require('react-dom');
var Barcode = require('react-barcode');


export default function Id() {
  return (
    <>
    <div className='background'>
        <div className='elements-container'>
            <div className='card-element'>name</div>
            <div className='image'>                    
                <img src="https://pbs.twimg.com/media/FTxn1pEWUAIPiO4?format=png&name=small" alt="logo" width="300px" className='student-pic'/>
            </div>
            <div className='card-element'>Carrer</div>
            <div className='card-element'>Group</div>
            <div className='card-element'>Matricula</div>
            <div className='c-barcode'>
                <Barcode className='barcode' value="65201550022" />
            </div>
            {/* <div className='barcode'>||||||||||||</div */}
        </div>
    </div>
    </>
  )
}

