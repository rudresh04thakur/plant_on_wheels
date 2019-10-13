import React, { Component } from "react";
import "./Myaccount.css";
export class Myaccount extends Component {
  render() {
    return (
      <div className="component-Myaccount">
        <div className="breadcrumb-area gray-bg">
          <div className="container">
            <div className="breadcrumb-content">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="active">My Account </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="checkout-area pb-55 pt-75">
          <div className="container">
            <div className="row">
              <div className="ml-auto mr-auto col-lg-9">
                <div className="checkout-wrapper">
                  <div id="faq" className="panel-group">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h5 className="panel-title">
                          <span>1</span>{" "}
                          <a
                            data-toggle="collapse"
                            data-parent="#faq"
                            href="#my-account-1"
                          >
                            Edit your account information{" "}
                          </a>
                        </h5>
                      </div>
                      <div
                        id="my-account-1"
                        className="panel-collapse collapse show"
                      >
                        <div className="panel-body">
                          <div className="billing-information-wrapper">
                            <div className="account-info-wrapper">
                              <h4>My Account Information</h4>
                              <h5>Your Personal Details</h5>
                            </div>
                            <div className="row">
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>First Name</label>
                                  <input type="text" />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Last Name</label>
                                  <input type="text" />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="billing-info">
                                  <label>Email Address</label>
                                  <input type="email" />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Telephone</label>
                                  <input type="text" />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Fax</label>
                                  <input type="text" />
                                </div>
                              </div>
                            </div>
                            <div className="billing-back-btn">
                              <div className="billing-back">
                                <a href="#">
                                  <i className="ion-arrow-up-c" /> back
                                </a>
                              </div>
                              <div className="billing-btn">
                                <button type="submit">Continue</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h5 className="panel-title">
                          <span>2</span>{" "}
                          <a
                            data-toggle="collapse"
                            data-parent="#faq"
                            href="#my-account-2"
                          >
                            Change your password{" "}
                          </a>
                        </h5>
                      </div>
                      <div
                        id="my-account-2"
                        className="panel-collapse collapse"
                      >
                        <div className="panel-body">
                          <div className="billing-information-wrapper">
                            <div className="account-info-wrapper">
                              <h4>Change Password</h4>
                              <h5>Your Password</h5>
                            </div>
                            <div className="row">
                              <div className="col-lg-12 col-md-12">
                                <div className="billing-info">
                                  <label>Password</label>
                                  <input type="password" />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="billing-info">
                                  <label>Password Confirm</label>
                                  <input type="password" />
                                </div>
                              </div>
                            </div>
                            <div className="billing-back-btn">
                              <div className="billing-back">
                                <a href="#">
                                  <i className="ion-arrow-up-c" /> back
                                </a>
                              </div>
                              <div className="billing-btn">
                                <button type="submit">Continue</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h5 className="panel-title">
                          <span>3</span>{" "}
                          <a
                            data-toggle="collapse"
                            data-parent="#faq"
                            href="#my-account-3"
                          >
                            Modify your address book entries{" "}
                          </a>
                        </h5>
                      </div>
                      <div
                        id="my-account-3"
                        className="panel-collapse collapse"
                      >
                        <div className="panel-body">
                          <div className="billing-information-wrapper">
                            <div className="account-info-wrapper">
                              <h4>Address Book Entries</h4>
                            </div>
                            <div className="entries-wrapper">
                              <div className="row">
                                <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                  <div className="entries-info text-center">
                                    <p>Farhana hayder (shuvo) </p>
                                    <p>hastech </p>
                                    <p> Road#1 , Block#c </p>
                                    <p> Rampura. </p>
                                    <p>Dhaka </p>
                                    <p>Bangladesh </p>
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                  <div className="entries-edit-delete text-center">
                                    <a className="edit" href="#">
                                      Edit
                                    </a>
                                    <a href="#">Delete</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="billing-back-btn">
                              <div className="billing-back">
                                <a href="#">
                                  <i className="ion-arrow-up-c" /> back
                                </a>
                              </div>
                              <div className="billing-btn">
                                <button type="submit">Continue</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h5 className="panel-title">
                          <span>4</span>{" "}
                          <a href="wishlist.html">Modify your wish list </a>
                        </h5>
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
