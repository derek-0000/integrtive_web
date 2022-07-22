import React from 'react'
import { Component } from 'react'
import Cookies from 'universal-cookie'
import './Login.css'


const profURL = 'https://intregrative-api.herokuapp.com/professor'
const studURL = 'https://intregrative-api.herokuapp.com/student'
const cookies = new Cookies();
const logo = "< scaN'go >";

class PageLogin extends Component {

  login = async() =>{
    try{
        const request = await fetch (`${studURL}/${this.state.form.id}/`);
        const response = await request.json();
        if((response.password= this.state.form.password) && (response.is_student = true)){
            cookies.set('id', response.id,{path:'/'})
            cookies.set('carrer', response.carrer,{path:'/'})
            cookies.set('email', response.email,{path:'/'})
            cookies.set('first_name', response.first_name,{path:'/'})
            cookies.set('last_names', response.last_names,{path:'/'})
            window.location.href="./user";
        }else{
          this.state.form.password = ''
        }
    }catch(err){
        try{
          const request = await fetch (`${profURL}/${this.state.form.id}/`);
          const response = await request.json();
          if((response.password= this.state.form.password)){
            cookies.set('id', response.id,{path:'/'})
            cookies.set('email', response.email,{path:'/'})
            cookies.set('first_name', response.first_name,{path:'/'})
            cookies.set('last_names', response.last_names,{path:'/'})
            window.location.href="./professor-profile";
          }else{
            this.state.form.password = ''
          }
        }catch(err){
          console.log(err)
          throw new Error(err);
        }
    }
}

state={
    form:{
        id:'',
        password:''
    }
}

handleChange = async e =>{
    await this.setState({
        form:{
            ...this.state.form,
            [e.target.name]: e.target.value
        }
    });
    console.log(this.state.form);
}

componentDidMount(){
    if(cookies.get('id')){
        window.location.href="./user";
    }
}

  render(){
    return (
      <div className="html">
      <div className='bodyLogin'>
        <div className="c-login">
          <div className="c-login-elements">
            <div className="left-login-elements">
              <div className="welcome">Welcome to </div>
              <div className="logo">{logo}</div>
            </div>

            <div className="right-login-elements">
              <input type="value" placeholder="Username" className="userid" name="id" onChange={this.handleChange}/>
              <input type="password" placeholder="Password" className="password" name="password" onChange={this.handleChange}/>
              <div className="c-mini-elements">
                <div className="c-checkbox">
                <label>
                  <input type="checkbox" id="remind" />
                  <span className="checkmark"></span>
                  Remember Me
                </label>
                </div>
                <div className="forgot">Forgot Password</div>
              </div>
              <a className="loginButton" onClick={()=>this.login()}>
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    ) 
  }
}

export default PageLogin