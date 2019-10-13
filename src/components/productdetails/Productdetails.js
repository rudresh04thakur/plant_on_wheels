import React, { Component } from "react";
import "./Productdetails.css";
import axios from "axios";
import { Link } from "react-router-dom";
export default class Productdetails extends Component {
  componentDidMount() {
    // console.log(this.props.match.params.id);
    axios
      .get("http://localhost:9000/Products/" + this.props.match.params.id)
      .then(res => {
        // console.log(res.data.data[0]);
        this.setState({ product: res.data });
        console.log(this.state.product);
      });


    // VIEW GET PRODUCT BY ID FROM CART
    axios
      .get("http://localhost:9000/Carts/" + this.props.match.params.id)
      .then(res => {
        // console.log(res.data.data[0]);
        this.setState({ product: res.data });
        console.log(this.state.product);
      });

  }
  // SEND TO CART --AND-- VIEW PRODUCT BY ID
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      cart: {},
      api: "http://localhost:9000/Carts"
    };
  }

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
  render() {
    return (
      <div className="component-Productdetails">
        <div className="breadcrumb-area gray-bg">
          <div className="container">
            <div className="breadcrumb-content">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="active">Product Details </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="product-details pt-75 pb-65">
          <div className="container">
            <div className="row">

              <div className="col-lg-6 col-md-12">
                <div className="product-details-img">
                  <img
                    className="zoompro"
                    src={this.state.product.Picture}
                    data-zoom-image="assets/img/product-details/product-detalis-bl1.jpg"
                    alt="zoom"
                  />
                  <div
                    id="gallery"
                    className="mt-20 product-dec-slider owl-carousel"
                  >
                    <a
                      data-image="assets/img/product-details/product-detalis-l1.jpg"
                      data-zoom-image="assets/img/product-details/product-detalis-bl1.jpg"
                    >
                      <img
                        src="assets/img/product-details/product-detalis-s1.jpg"
                        alt=""
                      />
                    </a>
                    <a
                      data-image="assets/img/product-details/product-detalis-l2.jpg"
                      data-zoom-image="assets/img/product-details/product-detalis-bl2.jpg"
                    >
                      <img
                        src="assets/img/product-details/product-detalis-s2.jpg"
                        alt=""
                      />
                    </a>
                    <a
                      data-image="assets/img/product-details/product-detalis-l3.jpg"
                      data-zoom-image="assets/img/product-details/product-detalis-bl3.jpg"
                    >
                      <img
                        src="assets/img/product-details/product-detalis-s3.jpg"
                        alt=""
                      />
                    </a>
                    <a
                      data-image="assets/img/product-details/product-detalis-l4.jpg"
                      data-zoom-image="assets/img/product-details/product-detalis-bl4.jpg"
                    >
                      <img
                        src="assets/img/product-details/product-detalis-s4.jpg"
                        alt=""
                      />
                    </a>
                    <a
                      data-image="assets/img/product-details/product-detalis-l5.jpg"
                      data-zoom-image="assets/img/product-details/product-detalis-bl5.jpg"
                    >
                      <img
                        src="assets/img/product-details/product-detalis-s5.jpg"
                        alt=""
                      />
                    </a>
                    <a
                      data-image="assets/img/product-details/product-detalis-l2.jpg"
                      data-zoom-image="assets/img/product-details/product-detalis-bl2.jpg"
                    >
                      <img
                        src="assets/img/product-details/product-detalis-s2.jpg"
                        alt=""
                      />
                    </a>
                  </div>

                  <span>-{this.state.product.Discount}%</span>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="product-details-content">
                  <h4>{this.state.product.ProductName}</h4>
                  <div className="rating-review">
                    <div className="pro-dec-rating">
                      <i className="ion-android-star-outline theme-star" />
                      <i className="ion-android-star-outline theme-star" />
                      <i className="ion-android-star-outline theme-star" />
                      <i className="ion-android-star-outline theme-star" />
                      <i className="ion-android-star-outline" />
                    </div>
                    <div className="pro-dec-review">
                      <ul>
                        <li>32 Reviews </li>
                        <li> Add Your Reviews</li>
                      </ul>
                    </div>
                  </div>
                  <span>$ {this.state.product.UnitPrice}</span>
                  <div className="in-stock">
                    <p>
                      Available: <span>In stock</span>
                    </p>
                  </div>
                  <p>{this.state.product.ProductDescription}</p>
                  <div className="pro-dec-feature">
                    <ul>
                      <li>
                        <input type="checkbox" /> Protection Plan:{" "}
                        <span> 2 year $4.99</span>
                      </li>
                      <li>
                        <input type="checkbox" /> Remote Holder:{" "}
                        <span> $9.99</span>
                      </li>
                      <li>
                        <input type="checkbox" /> Koral Alexa Voice Remote Case:{" "}
                        <span> Red $16.99</span>
                      </li>
                      <li>
                        <input type="checkbox" /> Amazon Basics HD Antenna:{" "}
                        <span>25 Mile $14.99</span>
                      </li>
                    </ul>
                  </div>
                  <div className="quality-add-to-cart">
                    <div className="quality">
                      <label>Qty:</label>
                      <input
                        className="cart-plus-minus-box"
                        type="text"
                        name="qtybutton"
                        value="02"
                      />
                    </div>
                    <div className="shop-list-cart-wishlist">
                      <button
                        className="action-cart"
                        onClick={this.sendtocart.bind(
                          this,
                          this.state.product.id
                        )}
                        title="Add To Cart"
                      >
                        <i className="icon-handbag" />
                      </button>
                      {/* <Link
                        to={`/products/cart/${this.state.product.id}`}
                        className="action-cart"
                        onClick={this.sendtocart.bind(
                          this,
                          this.state.product.id
                        )}
                        title="Add To Cart"
                      >
                        <i className="icon-handbag" />
                      </Link> */}
                      <a title="Wishlist" href="#">
                        <i className="icon-heart" />
                      </a>
                    </div>
                  </div>
                  <div className="pro-dec-categories">
                    <ul>
                      <li className="categories-title">Categories:</li>
                      <li>
                        <a href="#">Birthday,</a>
                      </li>
                      <li>
                        <a href="#"> Bouquets, </a>
                      </li>
                      <li>
                        <a href="#">Custom Orders,</a>
                      </li>
                      <li>
                        <a href="#">Home Decor,</a>
                      </li>
                      <li>
                        <a href="#">Weddings, </a>
                      </li>
                    </ul>
                  </div>
                  <div className="pro-dec-categories">
                    <ul>
                      <li className="categories-title">Tags: </li>
                      <li>
                        <a href="#"> Bouquet,</a>
                      </li>
                      <li>
                        <a href="#"> Event, </a>
                      </li>
                      <li>
                        <a href="#"> Gift,</a>
                      </li>
                      <li>
                        <a href="#"> Joy,</a>
                      </li>
                      <li>
                        <a href="#"> Love </a>
                      </li>
                    </ul>
                  </div>
                  <div className="pro-dec-social">
                    <ul>
                      <li>
                        <a className="tweet" href="#">
                          <i className="ion-social-twitter" /> Tweet
                        </a>
                      </li>
                      <li>
                        <a className="share" href="#">
                          <i className="ion-social-facebook" /> Share
                        </a>
                      </li>
                      <li>
                        <a className="google" href="#">
                          <i className="ion-social-googleplus-outline" />{" "}
                          Google+
                        </a>
                      </li>
                      <li>
                        <a className="pinterest" href="#">
                          <i className="ion-social-pinterest" /> Pinterest
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="description-review-area pb-70">
          <div className="container">
            <div className="description-review-wrapper">
              <div className="description-review-topbar nav text-center">
                <a className="active" data-toggle="tab" href="#des-details1">
                  Description
                </a>
                <a data-toggle="tab" href="#des-details2">
                  Tags
                </a>
                <a data-toggle="tab" href="#des-details3">
                  Review
                </a>
              </div>
              <div className="tab-content description-review-bottom">
                <div id="des-details1" className="tab-pane active">
                  <div className="product-description-wrapper">
                    <p>
                      Duis autem vel eum iriure dolor in hendrerit in vulputate
                      velit esse molestie consequat, vel illum dolore eu feugiat
                      nulla facilisis at vero eros et accumsan et iusto odio
                      dignissim qui blandit praesent luptatum zzril delenit
                      augue duis dolore te feugait nulla facilisi. Nam liber
                      tempor cum soluta nobis eleifend option congue nihil
                      imperdiet doming id quod mazim placerat facer possim
                      assum. Typi non habent claritatem insitam est usus
                      legentis in iis qui facit eorum claritatem.{" "}
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud exerci tation ullamcorper suscipit lobortis
                      nisl ut aliquip ex ea commodo consequat.{" "}
                    </p>
                    <ul>
                      <li>- Typi non habent claritatem insitam</li>
                      <li>
                        - Est usus legentis in iis qui facit eorum claritatem.{" "}
                      </li>
                      <li>
                        - Investigationes demonstraverunt lectores legere me
                        lius quod ii legunt saepius.
                      </li>
                      <li>
                        - Claritas est etiam processus dynamicus, qui sequitur
                        mutationem consuetudium lectorum.
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="des-details2" className="tab-pane">
                  <div className="product-anotherinfo-wrapper">
                    <ul>
                      <li>
                        <span>Tags:</span>
                      </li>
                      <li>
                        <a href="#"> bouquet,</a>
                      </li>
                      <li>
                        <a href="#"> event,</a>
                      </li>
                      <li>
                        <a href="#"> gift,</a>
                      </li>
                      <li>
                        <a href="#"> joy,</a>
                      </li>
                      <li>
                        <a href="#"> love ,</a>
                      </li>
                      <li>
                        <a href="#"> special</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="des-details3" className="tab-pane">
                  <div className="rattings-wrapper">
                    <div className="sin-rattings">
                      <div className="star-author-all">
                        <div className="ratting-star f-left">
                          <i className="ion-star theme-color" />
                          <i className="ion-star theme-color" />
                          <i className="ion-star theme-color" />
                          <i className="ion-star theme-color" />
                          <i className="ion-star theme-color" />
                          <span>(5)</span>
                        </div>
                        <div className="ratting-author f-right">
                          <h3>tayeb rayed</h3>
                          <span>12:24</span>
                          <span>9 March 2018</span>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Utenim ad minim veniam, quis nost
                        rud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Utenim ad
                        minim veniam, quis nost.
                      </p>
                    </div>
                    <div className="sin-rattings">
                      <div className="star-author-all">
                        <div className="ratting-star f-left">
                          <i className="ion-star theme-color" />
                          <i className="ion-star theme-color" />
                          <i className="ion-star theme-color" />
                          <i className="ion-star theme-color" />
                          <i className="ion-star theme-color" />
                          <span>(5)</span>
                        </div>
                        <div className="ratting-author f-right">
                          <h3>farhana shuvo</h3>
                          <span>12:24</span>
                          <span>9 March 2018</span>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Utenim ad minim veniam, quis nost
                        rud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Utenim ad
                        minim veniam, quis nost.
                      </p>
                    </div>
                  </div>
                  <div className="ratting-form-wrapper">
                    <h3>Add your Comments :</h3>
                    <div className="ratting-form">
                      <form action="#">
                        <div className="star-box">
                          <h2>Rating:</h2>
                          <div className="ratting-star">
                            <i className="ion-star theme-color" />
                            <i className="ion-star theme-color" />
                            <i className="ion-star theme-color" />
                            <i className="ion-star theme-color" />
                            <i className="ion-star" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="rating-form-style mb-20">
                              <input placeholder="Name" type="text" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="rating-form-style mb-20">
                              <input placeholder="Email" type="text" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="rating-form-style form-submit">
                              <textarea name="message" placeholder="Message" />
                              <input type="submit" value="add review" />
                            </div>
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
        <div className="product-area pb-70">
          <div className="container">
            <div className="product-top-bar section-border mb-35">
              <div className="section-title-wrap">
                <h3 className="section-title section-bg-white">
                  Related Products
                </h3>
              </div>
            </div>
            <div className="featured-product-active hot-flower owl-carousel product-nav">
              <div className="product-wrapper">
                <div className="product-img">
                  <a href="product-details.html">
                    <img alt="" src="assets/img/product/product-5.jpg" />
                  </a>
                  <span>-30%</span>
                  <div className="product-action">
                    <a className="action-wishlist" href="#" title="Wishlist">
                      <i className="icon-heart" />
                    </a>
                    <a className="action-cart" href="#" title="Add To Cart">
                      <i className="icon-handbag" />
                    </a>
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
                    <a href="product-details.html">Dutchman's Breeches </a>
                  </h4>
                  <div className="product-price-wrapper">
                    <span>$100.00</span>
                    <span className="product-price-old">$120.00 </span>
                  </div>
                </div>
              </div>
              <div className="product-wrapper">
                <div className="product-img">
                  <a href="product-details.html">
                    <img alt="" src="assets/img/product/product-6.jpg" />
                  </a>
                  <div className="product-action">
                    <a className="action-wishlist" href="#" title="Wishlist">
                      <i className="icon-heart" />
                    </a>
                    <a className="action-cart" href="#" title="Add To Cart">
                      <i className="icon-handbag" />
                    </a>
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
                    <a href="product-details.html">Flowers Bouquet Pink</a>
                  </h4>
                  <div className="product-price-wrapper">
                    <span>$100.00</span>
                  </div>
                </div>
              </div>
              <div className="product-wrapper">
                <div className="product-img">
                  <a href="product-details.html">
                    <img alt="" src="assets/img/product/product-7.jpg" />
                  </a>
                  <span>-30%</span>
                  <div className="product-action">
                    <a className="action-wishlist" href="#" title="Wishlist">
                      <i className="icon-heart" />
                    </a>
                    <a className="action-cart" href="#" title="Add To Cart">
                      <i className="icon-handbag" />
                    </a>
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
                    <a href="product-details.html">Evergreen Candytuft </a>
                  </h4>
                  <div className="product-price-wrapper">
                    <span>$100.00</span>
                    <span className="product-price-old">$120.00 </span>
                  </div>
                </div>
              </div>
              <div className="product-wrapper">
                <div className="product-img">
                  <a href="product-details.html">
                    <img alt="" src="assets/img/product/product-8.jpg" />
                  </a>
                  <div className="product-action">
                    <a className="action-wishlist" href="#" title="Wishlist">
                      <i className="icon-heart" />
                    </a>
                    <a className="action-cart" href="#" title="Add To Cart">
                      <i className="icon-handbag" />
                    </a>
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
                    <a href="product-details.html">Pearly Everlasting</a>
                  </h4>
                  <div className="product-price-wrapper">
                    <span>$100.00</span>
                  </div>
                </div>
              </div>
              <div className="product-wrapper">
                <div className="product-img">
                  <a href="product-details.html">
                    <img alt="" src="assets/img/product/product-6.jpg" />
                  </a>
                  <span>-30%</span>
                  <div className="product-action">
                    <a className="action-wishlist" href="#" title="Wishlist">
                      <i className="icon-heart" />
                    </a>
                    <a className="action-cart" href="#" title="Add To Cart">
                      <i className="icon-handbag" />
                    </a>
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
                    <a href="product-details.html">Yellow Loosestrife</a>
                  </h4>
                  <div className="product-price-wrapper">
                    <span>$100.00</span>
                    <span className="product-price-old">$120.00 </span>
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
