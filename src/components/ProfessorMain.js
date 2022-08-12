import React, { Component } from 'react'
import './ProfessorMain.css'
import GroupDetail from '../pages/professors/GroupDetail';
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
const URL = "https://intregrative-api.herokuapp.com/groups/" 
const cookies = new Cookies();

class ProfessorMain extends Component{
  state={
    groups:[],
  };
  componentDidMount = () => {
    this.groups();
  }
  groups = async() =>{
    try{
      const request = await fetch(`${URL}/${cookies.get("id")}/`);
      const response = await request.json();
      this.setState({ groups: response.results });
    }catch(err){
      throw new Error(err)
    }
  }

render(){
  return (
    <>
      {this.state.groups.map((group) => {
        return (
            <div className='groups'>
              <Link to = {`/group/${group.name}`}>
                <div className="top"><h3>{group.name}</h3></div>
              </Link>
            </div>
        );
      })}
    </>

  )
}
}

export default ProfessorMain