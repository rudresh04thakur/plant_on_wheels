import React, { Component } from "react";
import "./Checkout.css";
export class Checkout extends Component {
  render() {
    return (
      <div className="component-Checkout">
        <div className="checkout-area pb-45 pt-65">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="checkout-wrapper">
                  <div id="faq" className="panel-group">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h5 className="panel-title">
                          <span>1.</span>{" "}
                          <a
                            data-toggle="collapse"
                            data-parent="#faq"
                            href="#payment-1"
                          >
                            Checkout method
                          </a>
                        </h5>
                      </div>
                      <div
                        id="payment-1"
                        className="panel-collapse collapse show"
                      >
                        <div className="panel-body">
                          <div className="row">
                            <div className="col-lg-5">
                              <div className="checkout-register">
                                <div className="title-wrap">
                                  <h4 className="cart-bottom-title section-bg-white">
                                    CHECKOUT AS A GUEST OR REGISTER
                                  </h4>
                                </div>
                                <div className="register-us">
                                  <ul>
                                    <li>
                                      <input type="checkbox" /> Checkout as
                                      Guest
                                    </li>
                                    <li>
                                      <input type="checkbox" /> Register
                                    </li>
                                  </ul>
                                </div>
                                <h6>REGISTER AND SAVE TIME!</h6>
                                <div className="register-us-2">
                                  <p>
                                    Register with us for future convenience.
                                  </p>
                                  <ul>
                                    <li>Fast and easy checkout</li>
                                    <li>
                                      Easy access to your order history and
                                      status
                                    </li>
                                  </ul>
                                </div>
                                <a href="#">Apply Coupon</a>
                              </div>
                            </div>
                            <div className="col-lg-7">
                              <div className="checkout-login">
                                <div className="title-wrap">
                                  <h4 className="cart-bottom-title section-bg-white">
                                    LOGIN
                                  </h4>
                                </div>
                                <p>Already have an account? </p>
                                <span>Please log in below:</span>
                                <form>
                                  <div className="login-form">
                                    <label>Email Address * </label>
                                    <input type="email" name="email" />
                                  </div>
                                  <div className="login-form">
                                    <label>Password *</label>
                                    <input type="password" name="email" />
                                  </div>
                                </form>
                                <div className="login-forget">
                                  <a href="#">Forgot your password?</a>
                                  <p>* Required Fields</p>
                                </div>
                                <div className="checkout-login-btn">
                                  <a href="#">Login</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h5 className="panel-title">
                          <span>2.</span>{" "}
                          <a
                            data-toggle="collapse"
                            data-parent="#faq"
                            href="#payment-2"
                          >
                            billing information
                          </a>
                        </h5>
                      </div>
                      <div id="payment-2" className="panel-collapse collapse">
                        <div className="panel-body">
                          <div className="billing-information-wrapper">
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
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Company</label>
                                  <input type="text" />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Email Address</label>
                                  <input type="email" />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="billing-info">
                                  <label>Address</label>
                                  <input type="text" />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>city</label>
                                  <input type="text" />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>State/Province</label>
                                  <input type="text" />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Zip/Postal Code</label>
                                  <input type="text" />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-select">
                                  <label>Country</label>
                                  <select>
                                    <option value="1">United State</option>
                                    <option value="2">Azerbaijan</option>
                                    <option value="3">Bahamas</option>
                                    <option value="4">Bahrain</option>
                                    <option value="5">Bangladesh</option>
                                    <option value="6">Barbados</option>
                                  </select>
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
                            <div className="ship-wrapper">
                              <div className="single-ship">
                                <input
                                  type="radio"
                                  name="address"
                                  value="address"
                                  checked=""
                                />
                                <label>Ship to this address</label>
                              </div>
                              <div className="single-ship">
                                <input
                                  type="radio"
                                  name="address"
                                  value="dadress"
                                />
                                <label>Ship to different address</label>
                              </div>
                            </div>
                            <div className="billing-back-btn">
                              <div className="billing-back">
                                <a href="#">
                                  <i className="ion-arrow-up-c" /> back
                                </a>
                              </div>
                              <div className="billing-btn">
                                <button type="submit">Get a Quote</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h5 className="panel-title">
                          <span>3.</span>{" "}
                          <a
                            data-toggle="collapse"
                            data-parent="#faq"
                            href="#payment-3"
                          >
                            shipping information
                          </a>
                        </h5>
                      </div>
                      <div id="payment-3" className="panel-collapse collapse ">
                        <div className="panel-body">
                          <div className="shipping-information-wrapper">
                            <div className="shipping-info-2">
                              <span>HasTech</span>
                              <span>Bonosrie</span>
                              <span>D - Block</span>
                              <span>Dkaka, 1201</span>
                              <span>Bangladesh</span>
                              <span>T: +8800 879 9876 </span>
                            </div>
                            <div className="edit-address">
                              <a href="#">Edit Address</a>
                            </div>
                            <div className="billing-select">
                              <select className="email s-email s-wid">
                                <option>Select Your Address</option>
                                <option>Add New Address</option>
                                <option>Dkaka, 1201, Bangladesh</option>
                              </select>
                            </div>
                            <div className="ship-wrapper">
                              <div className="single-ship">
                                <input
                                  type="checkbox"
                                  checked=""
                                  value="address"
                                  name="address"
                                />
                                <label>Use Billing Address</label>
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
                          <span>4.</span>{" "}
                          <a
                            data-toggle="collapse"
                            data-parent="#faq"
                            href="#payment-4"
                          >
                            Shipping method
                          </a>
                        </h5>
                      </div>
                      <div id="payment-4" className="panel-collapse collapse ">
                        <div className="panel-body">
                          <div className="shipping-method-wrapper">
                            <div className="shipping-method">
                              <p>Flat Rate</p>
                              <p>Fixed $40.00</p>
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
                          <span>5.</span>{" "}
                          <a
                            data-toggle="collapse"
                            data-parent="#faq"
                            href="#payment-5"
                          >
                            payment information
                          </a>
                        </h5>
                      </div>
                      <div id="payment-5" className="panel-collapse collapse">
                        <div className="panel-body">
                          <div className="payment-info-wrapper">
                            <div className="ship-wrapper">
                              <div className="single-ship">
                                <input
                                  type="radio"
                                  checked=""
                                  value="address"
                                  name="address"
                                />
                                <label>Check / Money order </label>
                              </div>
                              <div className="single-ship">
                                <input
                                  type="radio"
                                  value="dadress"
                                  name="address"
                                />
                                <label>Credit Card (saved) </label>
                              </div>
                            </div>
                            <div className="payment-info">
                              <div className="row">
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info">
                                    <label>Name on Card </label>
                                    <input type="text" />
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-select">
                                    <label>Credit Card Type</label>
                                    <select>
                                      <option>American Express</option>
                                      <option>Visa</option>
                                      <option>MasterCard</option>
                                      <option>Discover</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                  <div className="billing-info">
                                    <label>Credit Card Number </label>
                                    <input type="text" />
                                  </div>
                                </div>
                              </div>
                              <div className="expiration-date">
                                <label>Expiration Date </label>
                                <div className="row">
                                  <div className="col-lg-6 col-md-6">
                                    <div className="billing-select">
                                      <select>
                                        <option>Month</option>
                                        <option>January</option>
                                        <option>February</option>
                                        <option> March</option>
                                        <option>April</option>
                                        <option> May</option>
                                        <option>June</option>
                                        <option>July</option>
                                        <option>August</option>
                                        <option>September</option>
                                        <option> October</option>
                                        <option> November</option>
                                        <option> December</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="col-lg-6 col-md-6">
                                    <div className="billing-select">
                                      <select>
                                        <option>Year</option>
                                        <option>2015</option>
                                        <option>2016</option>
                                        <option>2017</option>
                                        <option>2018</option>
                                        <option>2019</option>
                                        <option>2020</option>
                                        <option>2021</option>
                                        <option>2022</option>
                                        <option>2023</option>
                                        <option>2024</option>
                                        <option>2025</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-12 col-md-12">
                                  <div className="billing-info">
                                    <label>Card Verification Number</label>
                                    <input type="text" />
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
                          <span>6.</span>{" "}
                          <a
                            data-toggle="collapse"
                            data-parent="#faq"
                            href="#payment-6"
                          >
                            Order Review
                          </a>
                        </h5>
                      </div>
                      <div id="payment-6" className="panel-collapse collapse">
                        <div className="panel-body">
                          <div className="order-review-wrapper">
                            <div className="order-review">
                              <div className="table-responsive">
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th className="width-1">Product Name</th>
                                      <th className="width-2">Price</th>
                                      <th className="width-3">Qty</th>
                                      <th className="width-4">Subtotal</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <div className="o-pro-dec">
                                          <p>Fusce aliquam</p>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="o-pro-price">
                                          <p>$236.00</p>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="o-pro-qty">
                                          <p>2</p>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="o-pro-subtotal">
                                          <p>$236.00</p>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="o-pro-dec">
                                          <p>Primis in faucibus</p>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="o-pro-price">
                                          <p>$265.00</p>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="o-pro-qty">
                                          <p>3</p>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="o-pro-subtotal">
                                          <p>$265.00</p>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="o-pro-dec">
                                          <p>Etiam gravida</p>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="o-pro-price">
                                          <p>$363.00</p>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="o-pro-qty">
                                          <p>2</p>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="o-pro-subtotal">
                                          <p>$363.00</p>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="o-pro-dec">
                                          <p>Quisque in arcu</p>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="o-pro-price">
                                          <p>$328.00</p>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="o-pro-qty">
                                          <p>2</p>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="o-pro-subtotal">
                                          <p>$328.00</p>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                  <tfoot>
                                    <tr>
                                      <td colspan="3">Subtotal </td>
                                      <td colspan="1">$4,001.00</td>
                                    </tr>
                                    <tr className="tr-f">
                                      <td colspan="3">
                                        Shipping & Handling (Flat Rate - Fixed
                                      </td>
                                      <td colspan="1">$45.00</td>
                                    </tr>
                                    <tr>
                                      <td colspan="3">Grand Total</td>
                                      <td colspan="1">$4,722.00</td>
                                    </tr>
                                  </tfoot>
                                </table>
                              </div>
                              <div className="billing-back-btn">
                                <span>
                                  Forgot an Item?
                                  <a href="#"> Edit Your Cart.</a>
                                </span>
                                <div className="billing-btn">
                                  <button type="submit">Continue</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="checkout-progress">
                  <h4>Checkout Progress</h4>
                  <ul>
                    <li>Billing Address</li>
                    <li>Shipping Address</li>
                    <li>Shipping Method</li>
                    <li>Payment Method</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
