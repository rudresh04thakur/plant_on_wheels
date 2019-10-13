import React, { Component } from "react";
import "./Register.css";
export class Register extends Component {
  render() {
    return (
      <div className="component-Register">
        <div className="breadcrumb-area gray-bg">
          <div className="container">
            <div className="breadcrumb-content">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="active">Register</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="login-register-area pt-70 pb-75">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                <div className="login-register-wrapper">
                  <div id="lg2" className="tab-pane">
                    <div className="login-form-container">
                      <div className="login-register-form">
                        <form action="#" method="post">
                          <h1>{"Register"}</h1>
                          <br />
                          <input
                            type="text"
                            name="user-name"
                            placeholder="Username"
                          />
                          <input
                            type="password"
                            name="user-password"
                            placeholder="Password"
                          />
                          <input
                            name="user-email"
                            placeholder="Email"
                            type="email"
                          />
                          <div className="button-box">
                            <button type="submit">
                              <span>Register</span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
