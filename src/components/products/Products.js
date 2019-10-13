import React, { Component } from "react";
import "./Products.css";
import axios from "axios";
import { Link } from "react-router-dom";
export class Products extends Component {

  // FETCHING ALL PRODUCTS WITH ALL CATEGORY
  componentDidMount() {
    axios.get("http://localhost:9000/Products").then(res => {
      this.setState({ products: res.data.rows });
      // console.log(this.props.match.params.nav);
      //console.log(this.state.products);
    });
  }
  // ADD TO CART  ---AND--- VIEW BY ID
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      product: {},
      cart: {},
      api: "http://localhost:9000/Carts",
      api2: "http://localhost:9000/Wishlists"
    };
  }
  // view product by id
  view(id) {
    axios.get("http://localhost:9000/Products/" + id).then(res => {
      this.setState({ product: res.data });
      //console.log(res);
    });
  }
  //
  sendtocart(id) {
    axios.get("http://localhost:9000/Products/" + id).then(res => {
      this.setState({ cart: res.data });
      console.log(this.state.cart, "data");


      axios.post(this.state.api, {
        ProductName: this.state.cart.ProductName,
        ProductID: this.state.cart.CategoryID,
        Discount: this.state.cart.Discount,
        Picture: this.state.cart.Picture,
        Quantity: 1,
        UserID: 'demo',
        OrderID: 'demo',
        UnitPrice: this.state.cart.UnitPrice,
        access_token: "SfrjBV5d0tHbP9G7wx8Gq4NQM446ExdH"
      })
        .then(res => {
          console.log(res);
        });
    });
  }
  sendtowishlist(id) {
    axios.get("http://localhost:9000/Products/" + id).then(res => {
      this.setState({ cart: res.data });
      console.log(this.state.cart, "data");


      axios.post(this.state.api2, {
        ProductName: this.state.cart.ProductName,
        ProductID: this.state.cart.CategoryID,
        Discount: this.state.cart.Discount,
        Picture: this.state.cart.Picture,
        Quantity: 1,
        UserID: 'demo',
        OrderID: 'demo',
        UnitPrice: this.state.cart.UnitPrice,
        access_token: "SfrjBV5d0tHbP9G7wx8Gq4NQM446ExdH"
      })
        .then(res => {
          console.log(res);
        });
    });
  }

  render() {
    return (
      <div className="component-Filtershoplist">
        <div className="breadcrumb-area gray-bg">
          <div className="container">
            <div className="breadcrumb-content">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="active">Shop List Style </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="shop-page-area pt-75 pb-75">
          <div className="container">
            <div className="row flex-row-reverse">
              <div className="col-lg-9">
                <div className="banner-area pb-30">
                  <a href="product-details.html">
                    <img
                      alt=""
                      src={require("../../assets/img/banner/banner-49.jpg")}
                    />
                  </a>
                </div>
                <div className="shop-topbar-wrapper">
                  <div className="shop-topbar-left">
                    <ul className="view-mode">
                      <li className="active">
                        <a href="#product-grid" data-view="product-grid">
                          <i className="fa fa-grid-ul" />
                        </a>
                      </li>
                      <li className="active">
                        <a href="#product-list" data-view="product-list">
                          <i className="fa fa-list-ul" />
                        </a>
                      </li>
                    </ul>
                    <p>Showing 1 - 20 of 30 results </p>
                  </div>
                  <div className="product-sorting-wrapper">
                    <div className="product-shorting shorting-style">
                      <label>View:</label>
                      <select>
                        <option value=""> 20</option>
                        <option value=""> 23</option>
                        <option value=""> 30</option>
                      </select>
                    </div>
                    <div className="product-show shorting-style">
                      <label>Sort by:</label>
                      <select>
                        <option value="">Default</option>
                        <option value=""> Name</option>
                        <option value=""> price</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="grid-list-product-wrapper">
                  <div className="product-list product-view pb-20">
                    <div className="row">
                      {this.state.products.map(element => (
                        <div className="product-width col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mb-30">
                          <div className="product-wrapper">
                            <div className="product-img">
                              <Link
                                to={`/product/${element.id}`}
                                onClick={this.view.bind(this, element.id)}
                              >
                                <img
                                  alt=""
                                  src={element.Picture}
                                />
                              </Link>
                              {/* {this.state.discount.map(e => {
                                if (e.Discount != null) {
                                  <span>-{e.Discount}%</span>;
                                }
                              })} */}

                              <span>-{element.Discount}%</span>

                              <div className="product-action">
                                <a
                                  className="action-wishlist"
                                  href="#"
                                  title="Wishlist"
                                >
                                  <i className="icon-heart" />
                                </a>
                                <Link
                                  to={`/product/${element.id}`}
                                  className="action-cart"
                                  onClick={this.sendtocart.bind(
                                    this,
                                    element.id
                                  )}
                                  title="Add To Cart">
                                  <i className="icon-handbag" />
                                </Link>

                                <a
                                  className="action-compare"
                                  href="#"
                                  data-target="#exampleModal"
                                  data-toggle="modal"
                                  title="Quick View"
                                >
                                  <i className="icon-magnifier-add" />
                                </a>
                              </div>
                            </div>
                            <div className="product-content text-center">
                              <h4>
                                {/* <Link
                                  to="/product/p-details"
                                  onClick={this.onClick}
                                >
                                  {element.ProductName}
                                </Link> */}
                              </h4>
                              <div className="product-price-wrapper">
                                <span>$100.00</span>
                                <span className="product-price-old">
                                  $120.00{" "}
                                </span>
                              </div>
                            </div>
                            <div className="product-list-details">
                              <h4>
                                <Link
                                  to={`/product/${element.id}`}
                                  onClick={this.view.bind(this, element.id)}
                                >
                                  {element.ProductName}
                                </Link>
                              </h4>
                              <div className="product-price-wrapper">
                                <span>$ {element.UnitPrice}</span>
                                <span className="product-price-old"> </span>
                              </div>
                              <p>{element.ProductDescription}</p>
                              <div className="shop-list-cart-wishlist">
                                <button
                                  className="action-cart"
                                  onClick={this.sendtowishlist.bind(
                                    this,
                                    element.id
                                  )}
                                  title="Add To Cart"
                                >
                                  <i className="icon-heart" />
                                </button>
                                {/* <Link
                                  to={`/products/cart/${element.id}`}
                                  className="action-cart"
                                  onClick={this.sendtocart.bind(
                                    this,
                                    element.id
                                  )}
                                  title="Add To Cart"
                                > */}
                                <button
                                  className="action-cart"
                                  onClick={this.sendtocart.bind(
                                    this,
                                    element.id
                                  )}
                                  title="Add To Cart"
                                >
                                  <i className="icon-handbag" />
                                </button>
                                <a
                                  href="#"
                                  data-target="#exampleModal"
                                  data-toggle="modal"
                                  title="Quick View"
                                >
                                  <i className="icon-magnifier-add" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pagination-total-pages">
                    <div className="pagination-style">
                      <ul>
                        <li>
                          <a className="prev-next prev" href="#">
                            <i className="ion-ios-arrow-left" /> Prev
                          </a>
                        </li>
                        <li>
                          <a className="active" href="#">
                            1
                          </a>
                        </li>
                        <li>
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">...</a>
                        </li>
                        <li>
                          <a href="#">10</a>
                        </li>
                        <li>
                          <a className="prev-next next" href="#">
                            Next
                            <i className="ion-ios-arrow-right" />{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="total-pages">
                      <p>Showing 1 - 20 of 30 results </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="shop-sidebar-wrapper gray-bg-7 shop-sidebar-mrg">
                  <div className="shop-widget">
                    <h4 className="shop-sidebar-title">Shop By Categories</h4>
                    <div className="shop-catigory">
                      <ul id="faq">
                        <li>
                          {" "}
                          <a
                            data-toggle="collapse"
                            data-parent="#faq"
                            href="#shop-catigory-1"
                          >
                            Birthday Bouquets{" "}
                            <i className="ion-ios-arrow-down" />
                          </a>
                          <ul
                            id="shop-catigory-1"
                            className="panel-collapse collapse show"
                          >
                            <li>
                              <a href="#">Aster</a>
                            </li>
                            <li>
                              <a href="#">Aubrieta</a>
                            </li>
                            <li>
                              <a href="#">Basket of Gold</a>
                            </li>
                            <li>
                              <a href="#">Bellflower</a>
                            </li>
                            <li>
                              <a href="#">Buttercup</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          {" "}
                          <a
                            data-toggle="collapse"
                            data-parent="#faq"
                            href="#shop-catigory-2"
                          >
                            Bride's Bouquets
                            <i className="ion-ios-arrow-down" />
                          </a>
                          <ul
                            id="shop-catigory-2"
                            className="panel-collapse collapse"
                          >
                            <li>
                              <a href="#">Calendula</a>
                            </li>
                            <li>
                              <a href="#">Carnation</a>
                            </li>
                            <li>
                              <a href="#">Castor Bean</a>
                            </li>
                            <li>
                              <a href="#">Catmint</a>
                            </li>
                            <li>
                              <a href="#">Chives</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          {" "}
                          <a
                            data-toggle="collapse"
                            data-parent="#faq"
                            href="#shop-catigory-3"
                          >
                            Funeral Flowers <i className="ion-ios-arrow-down" />
                          </a>
                          <ul
                            id="shop-catigory-3"
                            className="panel-collapse collapse"
                          >
                            <li>
                              <a href="#">Cleome</a>
                            </li>
                            <li>
                              <a href="#">Columbine</a>
                            </li>
                            <li>
                              <a href="#">Coneflower</a>
                            </li>
                            <li>
                              <a href="#">Coreopsis</a>
                            </li>
                            <li>
                              <a href="#">Cosmos</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          {" "}
                          <a href="#">Interior Decor</a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a href="#">Wedding Decor</a>
                        </li>
                        <li>
                          {" "}
                          <a href="#">Custom Orders</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="shop-price-filter mt-40 shop-sidebar-border pt-35">
                    <h4 className="shop-sidebar-title">Price Filter</h4>
                    <div className="price_filter mt-25">
                      <span>Range: $100.00 - 1.300.00 </span>
                      <div id="slider-range" />
                      <div className="price_slider_amount">
                        <div className="label-input">
                          <input
                            type="text"
                            id="amount"
                            name="price"
                            placeholder="Add Your Price"
                          />
                        </div>
                        <button type="button">Filter</button>
                      </div>
                    </div>
                  </div>
                  <div className="shop-widget mt-40 shop-sidebar-border pt-35">
                    <h4 className="shop-sidebar-title">By Category</h4>
                    <div className="sidebar-list-style mt-20">
                      <ul>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Plants</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Seeds</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Pots</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Pebbles</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Bulbs</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Accessories</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Fertilizers</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="shop-widget mt-40 shop-sidebar-border pt-35">
                    <h4 className="shop-sidebar-title">By Color</h4>
                    <div className="sidebar-list-style mt-20">
                      <ul>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Black </a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Blue </a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Green </a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Grey </a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Red</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">White </a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Yellow </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="shop-widget mt-40 shop-sidebar-border pt-35">
                    <h4 className="shop-sidebar-title">Compare Products</h4>
                    <div className="compare-product">
                      <p>You have no item to compare. </p>
                      <div className="compare-product-btn">
                        <span>Clear all </span>
                        <a href="#">
                          Compare <i className="fa fa-check" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="shop-widget mt-40 shop-sidebar-border pt-35">
                    <h4 className="shop-sidebar-title">Popular Tags</h4>
                    <div className="shop-tags mt-25">
                      <ul>
                        <li>
                          <a href="#">Bouquet</a>
                        </li>
                        <li>
                          <a href="#">Event</a>
                        </li>
                        <li>
                          <a href="#">Gift</a>
                        </li>
                        <li>
                          <a href="#">Joy</a>
                        </li>
                        <li>
                          <a href="#">Love </a>
                        </li>
                        <li>
                          <a href="#">Special</a>
                        </li>
                      </ul>
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
