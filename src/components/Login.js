import React from "react";
import "./Login.css";

const logo = "< scaN'go >";

function Login() {
  return (
    <html id="login">
      <div className="c-black-container">
        <div class="c-logo">
          <div className="c-elements">
          <div className="c-elements-login">
            <div className="elements-login">
              <div class="logo">
                <div class="logotext">{logo}</div>
                <img
                  src="https://pbs.twimg.com/media/FTxn1pEWUAIPiO4?format=png&name=small"
                  alt="logo"
                  width="250px"
                />
              </div>
              <div class="form-control">
                <input type="value" required="" placeholder="Username" />
                <input type="password" required="" placeholder="Password" />
              </div>
              <div class="c-extra-elements">
                <div class="c-checkbox">
                  <label>
                    <input type="checkbox" id="remind" />
                    <span class="checkmark"></span>
                    Remember Me
                  </label>
                </div>
                <div class="c-forgot">
                  <div class="forgot">Forgot Password</div>
                </div>
              </div>
              <div class="c-login-button">
                <a id="loginButton" href="/user">
                  Login
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </html>
  );
}

export default Login;
