import React, { Component } from "react";
import "./Shoppingcart.css";
import axios from "axios";
import { Link } from "react-router-dom";
export class Shoppingcart extends Component {
  componentDidMount() {

    // FETCHING ALL PRODUCTS IN CART 
    axios.get("http://localhost:9000/Carts").then(res => {
      // console.log(res.data.data[0]);
      this.setState({ carts: res.data.rows });
      console.log(this.state.carts);
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      carts: []
    };
  }

  // VIEW PRODUCT BY ID
  view(id) {
    axios.get("http://localhost:9000/Products/" + id).then(res => {
      this.setState({ product: res.data });
      //console.log(res);
    });
  }

  // DELETE PRODUCT BY ID 
  delete(id) {
    axios.delete("Carts/" + id).then(res => {

    });

  }

  render() {
    return (
      <div className="component-Shoppingcart">
        <div className="breadcrumb-area gray-bg">
          <div className="container">
            <div className="breadcrumb-content">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="active">Cart </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="cart-main-area pt-60 pb-65">
          <div className="container">
            <h3 className="page-title">Your cart items</h3>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <form action="#">
                  <div className="table-content table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Product Name</th>
                          <th>Until Price</th>
                          <th>Qty</th>
                          <th>Subtotal</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      {this.state.carts.map(element => (
                        <tbody>
                          <tr>
                            <td className="product-thumbnail">
                              <a href="#">
                                <img alt="" src={element.Picture} />
                              </a>
                            </td>
                            <td className="product-name">
                              <Link
                                to={`/product/${element.id}`}
                                onClick={this.view.bind(this, element.id)}
                              >
                                {element.ProductName}
                              </Link>
                            </td>
                            <td className="product-price-cart">
                              <span className="amount">
                                {element.UnitPrice}
                              </span>
                            </td>
                            <td className="product-quantity">
                              <div className="pro-dec-cart">
                                <input
                                  className="cart-plus-minus-box"
                                  type="text"
                                  value=""
                                  name="qtybutton"
                                />
                              </div>
                            </td>
                            <td className="product-subtotal">
                              {element.UnitPrice}
                            </td>
                            <td className="product-remove">

                              <a href="#">
                                <i className="fa fa-pencil" />
                              </a>
                              <button
                                onClick={this.delete.bind(this, element.id)} >
                                <i className="fa fa-times" />
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      ))}
                    </table>
                  </div>

                  <div className="row">
                    <div className="col-lg-12">
                      <div className="cart-shiping-update-wrapper">
                        <div className="cart-shiping-update">
                          <Link to="/cart">Continue Shopping</Link>
                        </div>
                        <div className="cart-clear">
                          <button>Update Shopping Cart</button>
                          <a href="#">Clear Shopping Cart</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="cart-tax">
                      <div className="title-wrap">
                        <h4 className="cart-bottom-title section-bg-gray">
                          Estimate Shipping And Tax
                        </h4>
                      </div>
                      <div className="tax-wrapper">
                        <p>
                          Enter your destination to get a shipping estimate.
                        </p>
                        <div className="tax-select-wrapper">
                          <div className="tax-select">
                            <label>* Country</label>
                            <select className="email s-email s-wid">
                              <option>Bangladesh</option>
                              <option>Albania</option>
                              <option>Åland Islands</option>
                              <option>Afghanistan</option>
                              <option>Belgium</option>
                            </select>
                          </div>
                          <div className="tax-select">
                            <label>* Region / State</label>
                            <select className="email s-email s-wid">
                              <option>Bangladesh</option>
                              <option>Albania</option>
                              <option>Åland Islands</option>
                              <option>Afghanistan</option>
                              <option>Belgium</option>
                            </select>
                          </div>
                          <div className="tax-select">
                            <label>* Zip/Postal Code</label>
                            <input type="text" />
                          </div>
                          <button className="cart-btn-2" type="submit">
                            Get A Quote
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="discount-code-wrapper">
                      <div className="title-wrap">
                        <h4 className="cart-bottom-title section-bg-gray">
                          Use Coupon Code
                        </h4>
                      </div>
                      <div className="discount-code">
                        <p>Enter your coupon code if you have one.</p>
                        <form>
                          <input type="text" required="" name="name" />
                          <button className="cart-btn-2" type="submit">
                            Apply Coupon
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <div className="grand-totall">
                      <div className="title-wrap">
                        <h4 className="cart-bottom-title section-bg-gary-cart">
                          Cart Total
                        </h4>
                      </div>
                      <h5>
                        Total products <span>$260.00</span>
                      </h5>
                      <div className="total-shipping">
                        <h5>Total shipping</h5>
                        <ul>
                          <li>
                            <input type="checkbox" /> Standard{" "}
                            <span>$20.00</span>
                          </li>
                          <li>
                            <input type="checkbox" /> Express{" "}
                            <span>$30.00</span>
                          </li>
                        </ul>
                      </div>
                      <h4 className="grand-totall-title">
                        Grand Total <span>$260.00</span>
                      </h4>
                      <a href="#">Proceed to Checkout</a>
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
