import React from "react";
import "./Login.css";

const logo = "< scaN'go >";

function Login() {
  return (
    <html id="login">
      <body id="body">
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
      </body>
    </html>
  );
}

export default Login;
