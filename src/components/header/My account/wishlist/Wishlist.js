import React, { Component } from "react";
import "./Wishlist.css";
import axios from "axios";
import { Link } from "react-router-dom";
export class Wishlist extends Component {
  componentDidMount() {

    // FETCHING ALL PRODUCTS IN CART 
    axios.get("http://localhost:9000/Wishlists").then(res => {
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
  vview(id) {
    axios.get("http://localhost:9000/Products/" + id).then(res => {
      this.setState({ product: res.data });
      //console.log(res);
    });
  }

  render() {

    return (
      <div className="component-Wishlist">
        <div className="breadcrumb-area gray-bg">
          <div className="container">
            <div className="breadcrumb-content">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="active">Wishlist </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="cart-main-area pt-70 pb-75">
          <div className="container">
            <h3 className="page-title">Your cart items</h3>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <form action="#">
                  <div className="table-content table-responsive wishlist">
                    <table>
                      <thead>
                        <tr>
                          <th />
                          <th>Product Name</th>
                          <th>Until Price</th>
                          <th>Qty</th>
                          <th>Subtotal</th>
                          <th>Add To Cart</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.carts.map(element => (

                          <tr>
                            <td className="product-thumbnail">
                              <a href="#">
                                <img
                                  alt=""
                                  src={element.Picture}
                                />
                              </a>
                            </td>
                            <td className="product-name">
                              <Link to={`/product/${element.id}`}
                                onClick={this.vview.bind(this, element.id)}>
                                {element.ProductName}
                              </Link>
                            </td>
                            <td className="product-price-cart">
                              <span className="amount">$ {element.UnitPrice}</span>
                            </td>
                            <td className="product-quantity">
                              <div className="pro-dec-cart">
                                <input
                                  className="cart-plus-minus-box"
                                  type="text"
                                  value="02"
                                  name="qtybutton"
                                />
                              </div>
                            </td>
                            <td className="product-subtotal">$subtotal</td>
                            <td className="product-wishlist-cart">
                              <button>add to cart</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
