import React from 'react'
import './Id.css'
import Cookies from 'universal-cookie'
import { Component } from 'react';
var ReactDOM = require('react-dom');
var Barcode = require('react-barcode');

const cookies = new Cookies();
const data = cookies.getAll()

class Id extends Component{
  componentDidMount(){
    if(!cookies.get('id')){
        window.location.href="./";
    }
  }
  render(){
  return (
    <>
    <div className='background'>
        <div className='elements-container'>
            <div className='image'>                    
                <img src='photo-1511367461989-f85a21fda167.png' alt="pfp" width="300px" className='student-pic'/>
            </div>
            <div className='card-element first_name'>{data.first_name + " " + data.last_names}</div>
            <div className='card-element'>{data.carrer}</div>
            <div className='card-element'>{data.email}</div>
            <div className='card-element'>{data.id}</div>
            <div className='c-barcode'>
                <Barcode className='barcode' value={data.id} />
            </div>
        </div>
    </div>
    </>
  )
          }
}
export default Id;

