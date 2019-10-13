import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
export default class Header extends Component {
  render() {

    return (
      <header className="header-area clearfix">
        <div className="header-top">
          <div className="container">
            <div className="border-bottom-1">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="welcome-area">
                    <p>{}</p>
                  </div>
                </div>
                <div className="col-lg-8 col-md-8 col-12">
                  <div className="account-curr-lang-wrap f-right">
                    <ul>
                      <li className="top-hover">
                        <a href="#">
                          My Account <i className="ion-chevron-down" />
                        </a>
                        <ul>
                          <li>
                            <Link to="/wishlist" className="nav-link">
                              Wishlist{" "}
                            </Link>
                          </li>
                          <li>
                            <Link to="/login" className="nav-link">
                              Login
                            </Link>
                          </li>
                          <li>
                            <Link to="/register" className="nav-link">
                              Register
                            </Link>
                          </li>
                          <li>
                            <Link to="/myaccount" className="nav-link">
                              My account
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="top-hover">
                        <a href="#">
                          $Doller (US) <i className="ion-chevron-down" />
                        </a>
                        <ul>
                          <li>
                            <a href="#">Taka (BDT)</a>
                          </li>
                          <li>
                            <a href="#">Riyal (SAR)</a>
                          </li>
                          <li>
                            <a href="#">Rupee (INR)</a>
                          </li>
                          <li>
                            <a href="#">Dirham (AED)</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            alt="flag"
                            src={require("../../assets/img/icon-img/en.jpg")}
                          />{" "}
                          English <i className="ion-chevron-down" />
                        </a>
                        <ul>
                          <li>
                            <a href="#">
                              <img
                                alt="flag"
                                src={require("../../assets/img/icon-img/bl.jpg")}
                              />
                              Bangla{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                alt="flag"
                                src={require("../../assets/img/icon-img/ar.jpg")}
                              />
                              Arabic
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                alt="flag"
                                src={require("../../assets/img/icon-img/in.jpg")}
                              />
                              Hindi{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                alt="flag"
                                src={require("../../assets/img/icon-img/sp.jpg")}
                              />
                              Spanish
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom transparent-bar">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-4">
                <div className="logo">
                  <Link to={"/"}>
                    <img
                      alt=""
                      src={require("../../assets/img/logo/logo.png")}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-8 col-md-10 col-3">
                <form className="serachForm">
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <span className="input-group-addon">
                      <i className="fa fa-search" aria-hidden="true" />
                    </span>
                  </div>
                </form>
              </div>

              <div className="header-cart">
                <a href="#">
                  <div className="cart-icon">
                    <i className="ion-bag" />
                    <span className="count-style">02</span>
                  </div>
                  <div className="cart-text">
                    <span className="digit">My Cart</span>
                    <span>$0.00</span>
                  </div>
                </a>
                <div className="shopping-cart-content">
                  <ul>
                    <li className="single-shopping-cart">
                      <div className="shopping-cart-img">
                        <a href="#">
                          <img
                            alt=""
                            src={require("../../assets/img/cart/cart-2.jpg")}
                          />
                        </a>
                      </div>
                      <div className="shopping-cart-title">
                        <h4>
                          <a href="#">Phantom Remote</a>
                        </h4>
                        <h6>Qty: 02</h6>
                        <span>$260.00</span>
                      </div>
                      <div className="shopping-cart-delete">
                        <a href="#">
                          <i className="ion ion-close" />
                        </a>
                      </div>
                    </li>
                  </ul>
                  <div className="shopping-cart-total">
                    <h4>
                      Shipping : <span>$20.00</span>
                    </h4>
                    <h4>
                      Total : <span className="shop-total">$260.00</span>
                    </h4>
                  </div>
                  <div className="shopping-cart-btn">
                    <Link to="/cart">view cart</Link>
                    <Link to="/checkout">checkout</Link>
                  </div>
                </div>
              </div>

              <div className="mobile-menu-area">
                <div className="mobile-menu">
                  <nav id="mobile-menu-active">
                    <ul className="menu-overflow">
                      <li>
                        <a href="#">HOME</a>
                        <ul>
                          <li>
                            <a href="index.html">home version 1</a>
                          </li>
                          <li>
                            <a href="index-2.html">home version 2</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">pages</a>
                        <ul>
                          <li>
                            <a href="about-us.html">about us </a>
                          </li>
                          <li>
                            <a href="shop.html">shop Grid</a>
                          </li>
                          <li>
                            <a href="shop-list.html">shop list</a>
                          </li>
                          <li>
                            <a href="product-details.html">product details</a>
                          </li>
                          <li>
                            <a href="cart-page.html">cart page</a>
                          </li>
                          <li>
                            <a href="checkout.html">checkout</a>
                          </li>
                          <li>
                            <a href="wishlist.html">wishlist</a>
                          </li>
                          <li>
                            <a href="my-account.html">my account</a>
                          </li>
                          <li>
                            <a href="login-register.html">login / register</a>
                          </li>
                          <li>
                            <a href="contact.html">contact</a>
                          </li>
                          <li>
                            <a href="testimonial.html">Testimonials</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="shop.html"> Shop </a>
                        <ul>
                          <li>
                            <a href="#">Categories 01</a>
                            <ul>
                              <li>
                                <a href="shop.html">Aconite</a>
                              </li>
                              <li>
                                <a href="shop.html">Ageratum</a>
                              </li>
                              <li>
                                <a href="shop.html">Allium</a>
                              </li>
                              <li>
                                <a href="shop.html">Anemone</a>
                              </li>
                              <li>
                                <a href="shop.html">Angelica</a>
                              </li>
                              <li>
                                <a href="shop.html">Angelonia</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Categories 02</a>
                            <ul>
                              <li>
                                <a href="shop.html">Balsam</a>
                              </li>
                              <li>
                                <a href="shop.html">Baneberry</a>
                              </li>
                              <li>
                                <a href="shop.html">Bee Balm</a>
                              </li>
                              <li>
                                <a href="shop.html">Begonia</a>
                              </li>
                              <li>
                                <a href="shop.html">Bellflower</a>
                              </li>
                              <li>
                                <a href="shop.html">Bergenia</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Categories 03</a>
                            <ul>
                              <li>
                                <a href="shop.html">Caladium</a>
                              </li>
                              <li>
                                <a href="shop.html">Calendula</a>
                              </li>
                              <li>
                                <a href="shop.html">Carnation</a>
                              </li>
                              <li>
                                <a href="shop.html">Catmint</a>
                              </li>
                              <li>
                                <a href="shop.html">Celosia</a>
                              </li>
                              <li>
                                <a href="shop.html">Chives</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Categories 04</a>
                            <ul>
                              <li>
                                <a href="shop.html">Daffodil</a>
                              </li>
                              <li>
                                <a href="shop.html">Dahlia</a>
                              </li>
                              <li>
                                <a href="shop.html">Daisy</a>
                              </li>
                              <li>
                                <a href="shop.html">Diascia</a>
                              </li>
                              <li>
                                <a href="shop.html">Dusty Miller</a>
                              </li>
                              <li>
                                <a href="shop.html">Dame’s Rocket</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">BLOG</a>
                        <ul>
                          <li>
                            <a href="blog-masonry.html">Blog Masonry</a>
                          </li>
                          <li>
                            <a href="#">Blog Standard</a>
                            <ul>
                              <li>
                                <a href="blog-left-sidebar.html">
                                  left sidebar
                                </a>
                              </li>
                              <li>
                                <a href="blog-right-sidebar.html">
                                  right sidebar
                                </a>
                              </li>
                              <li>
                                <a href="blog-no-sidebar.html">no sidebar</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Post Types</a>
                            <ul>
                              <li>
                                <a href="blog-details-standerd.html">
                                  Standard post
                                </a>
                              </li>
                              <li>
                                <a href="blog-details-audio.html">audio post</a>
                              </li>
                              <li>
                                <a href="blog-details-video.html">video post</a>
                              </li>
                              <li>
                                <a href="blog-details-gallery.html">
                                  gallery post
                                </a>
                              </li>
                              <li>
                                <a href="blog-details-link.html">link post</a>
                              </li>
                              <li>
                                <a href="blog-details-quote.html">quote post</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html"> Contact us </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="container float-right">
            <div className="row">
              <div className="main-menu">
                <nav>
                  <ul>
                    <li>
                      <Link to={"/products/plants"} className="nav-link">
                        PLANTS
                      </Link>
                    </li>
                    <li>
                      <Link to={"/products/pots"} className="nav-link">
                        POTS
                      </Link>
                    </li>
                    <li>
                      <Link to={"/products/pebbles"} className="nav-link">
                        PEBBLES
                      </Link>
                    </li>
                    <li>
                      <Link to={"/products/seeds"} className="nav-link">
                        SEEDS
                      </Link>
                    </li>
                    <li>
                      <Link to={"/products/bulbs"} className="nav-link">
                        BULBS
                      </Link>
                    </li>
                    <li>
                      <Link to={"/cust-orders"} className="nav-link">
                        CUSTOMIZE ORDER
                      </Link>
                    </li>
                    {/* <li>
                      <Link to={"/more"} className="nav-link">
                        MORE
                      </Link>
                    </li> */}
                    <li>
                      <div className="account-curr-lang-wrap">
                        <ul>
                          <li className="top-hove">
                            <a href="#">
                              MORE
                              <i className="ion-chevron-down" />
                            </a>
                            <ul>
                              <li>
                                <Link
                                  to="/products/accessories"
                                  className="nav-link"
                                >
                                  Accessories
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/products/event gifts"
                                  className="nav-link"
                                >
                                  EventGifts
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/products/fertilizers"
                                  className="nav-link"
                                >
                                  Fertilizers
                                </Link>
                              </li>
                              <li>
                                <Link to="/bulkorder" className="nav-link">
                                  BulkOrders
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
