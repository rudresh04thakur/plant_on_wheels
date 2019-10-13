import React, { Component } from "react";
import "./Footer.css";
export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-area pt-58 gray-bg-3">
        <div className="footer-top gray-bg-3 pb-20">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="footer-widget footer-widget-red footer-black-color mb-40">
                  <div className="footer-title mb-30">
                    <h4>About Us</h4>
                  </div>
                  <div className="footer-about">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      sed do eiusmod tempor incididun
                    </p>
                    <div className="footer-contact mt-20">
                      <ul>
                        <li>
                          Address: 123 Main Street, Anytown, CA 12345 - USA.
                        </li>
                        <li>Telephone: (012) 800 456 789-987 </li>
                        <li>
                          Email: <a href="#">yourmail@example.com</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="social-icon">
                    <ul>
                      <li>
                        <a className="facebook" href="#">
                          <i className="ion-social-facebook" />
                        </a>
                      </li>
                      <li>
                        <a className="twitter" href="#">
                          <i className="ion-social-twitter" />
                        </a>
                      </li>
                      <li>
                        <a className="instagram" href="#">
                          <i className="ion-social-instagram-outline" />
                        </a>
                      </li>
                      <li>
                        <a className="googleplus" href="#">
                          <i className="ion-social-googleplus-outline" />
                        </a>
                      </li>
                      <li>
                        <a className="rss" href="#">
                          <i className="ion-social-rss" />
                        </a>
                      </li>
                      <li>
                        <a className="dribbble" href="#">
                          <i className="ion-social-dribbble-outline" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer-widget mb-40">
                  <div className="footer-title mb-30">
                    <h4>Information</h4>
                  </div>
                  <div className="footer-content">
                    <ul>
                      <li>
                        <a href="about-us.html">About Us</a>
                      </li>
                      <li>
                        <a href="#">Delivery Information</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Terms & Conditions</a>
                      </li>
                      <li>
                        <a href="#">Customer Service</a>
                      </li>
                      <li>
                        <a href="#">Return Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer-widget mb-40">
                  <div className="footer-title mb-30">
                    <h4>My Account</h4>
                  </div>
                  <div className="footer-content">
                    <ul>
                      <li>
                        <a href="my-account.html">My Account</a>
                      </li>
                      <li>
                        <a href="about-us.html">Order History</a>
                      </li>
                      <li>
                        <a href="wishlist.html">WishList</a>
                      </li>
                      <li>
                        <a href="#">Newsletter</a>
                      </li>
                      <li>
                        <a href="about-us.html">Order History</a>
                      </li>
                      <li>
                        <a href="#">International Orders</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="footer-widget mb-40">
                  <div className="footer-title mb-30">
                    <h4>Join Our Newsletter Now</h4>
                  </div>
                  <div className="footer-newsletter">
                    <p>
                      Get E-mail updates about our latest shop and special
                      offers.
                    </p>
                    <div id="mc_embed_signup" className="subscribe-form">
                      <form
                        action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef"
                        method="post"
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        className="validate"
                        target="_blank"
                        novalidate
                      >
                        <div id="mc_embed_signup_scroll" className="mc-form">
                          <input
                            type="email"
                            value=""
                            name="EMAIL"
                            className="email"
                            placeholder="Your Email Address..."
                            required
                          />

                          <div className="mc-news" aria-hidden="true">
                            <input
                              type="text"
                              name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"
                              value=""
                            />
                          </div>
                          <div className="clear-2">
                            <input
                              type="submit"
                              value="Subscribe"
                              name="subscribe"
                              id="mc-embedded-subscribe"
                              className="button"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom pb-25 pt-25 gray-bg-2">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="copyright">
                  <p>
                    Copyright © <a href="#">Phuler</a>. All Right Reserved.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="payment-img f-right">
                  <a href="#">
                    <img
                      alt=""
                      src={require("../../assets/img/icon-img/payment.png")}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
