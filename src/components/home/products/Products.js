import React, { Component } from "react";
import "./Products.css";
export class Products extends Component {
  render() {
    return (
      <div classNameName="component-Products">
        <div className="product-area pt-40 pb-70">
          <div className="container">
            <div className="product-top-bar section-border mb-35">
              <div className="section-title-wrap">
                <h3 className="section-title section-bg-white">Products</h3>
              </div>
              <div className="product-tab-list nav section-bg-white">
                <a className="active" data-toggle="tab" href="#tab1">
                  <h4>All </h4>
                </a>
                <a data-toggle="tab" href="#tab2">
                  <h4>Winter </h4>
                </a>
                <a data-toggle="tab" href="#tab3">
                  <h4> Various </h4>
                </a>
                <a data-toggle="tab" href="#tab4">
                  <h4>Greens </h4>
                </a>
              </div>
            </div>
            <div className="tab-content jump">
              <div id="tab1" className="tab-pane active">
                <div className="featured-product-active owl-carousel product-nav">
                  <div className="product-wrapper">
                    <div className="product-img">
                      <a href="product-details.html">
                        <img
                          alt=""
                          src={require("../../assets/img/product/product-1.jpg")}
                        />
                      </a>
                      <span>-30%</span>
                      <div className="product-action">
                        <a
                          className="action-wishlist"
                          href="#"
                          title="Wishlist"
                        >
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
                        <img
                          alt=""
                          src={require("../../assets/img/product/product-2.jpg")}
                        />
                      </a>
                      <div className="product-action">
                        <a
                          className="action-wishlist"
                          href="#"
                          title="Wishlist"
                        >
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
                        <a href="product-details.html">Flowers Bouquet Pink </a>
                      </h4>
                      <div className="product-price-wrapper">
                        <span>$100.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrapper">
                    <div className="product-img">
                      <a href="product-details.html">
                        <img
                          alt=""
                          src={require("../../assets/img/product/product-3.jpg")}
                        />
                      </a>
                      <span>-30%</span>
                      <div className="product-action">
                        <a
                          className="action-wishlist"
                          href="#"
                          title="Wishlist"
                        >
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
                        <img
                          alt=""
                          src={require("../../assets/img/product/product-4.jpg")}
                        />
                      </a>
                      <div className="product-action">
                        <a
                          className="action-wishlist"
                          href="#"
                          title="Wishlist"
                        >
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
                        <img
                          alt=""
                          src={require("../../assets/img/product/product-2.jpg")}
                        />
                      </a>
                      <span>-30%</span>
                      <div className="product-action">
                        <a
                          className="action-wishlist"
                          href="#"
                          title="Wishlist"
                        >
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
              <div id="tab2" className="tab-pane">
                <div className="featured-product-active owl-carousel product-nav">
                  <div className="product-wrapper">
                    <div className="product-img">
                      <a href="product-details.html">
                        <img
                          alt=""
                          src={require("../../assets/img/product/product-5.jpg")}
                        />
                      </a>
                      <span>-30%</span>
                      <div className="product-action">
                        <a
                          className="action-wishlist"
                          href="#"
                          title="Wishlist"
                        >
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
                        <a href="product-details.html">Golden Marguerite</a>
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
                        <img
                          alt=""
                          src={require("../../assets/img/product/product-6.jpg")}
                        />
                      </a>
                      <div className="product-action">
                        <a
                          className="action-wishlist"
                          href="#"
                          title="Wishlist"
                        >
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
                        <img
                          alt=""
                          src={require("../../assets/img/product/product-7.jpg")}
                        />
                      </a>
                      <span>-30%</span>
                      <div className="product-action">
                        <a
                          className="action-wishlist"
                          href="#"
                          title="Wishlist"
                        >
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
                        <a href="product-details.html">Polka Dot Plant</a>
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
                        <img
                          alt=""
                          src={require("../../assets/img/product/product-8.jpg")}
                        />
                      </a>
                      <div className="product-action">
                        <a
                          className="action-wishlist"
                          href="#"
                          title="Wishlist"
                        >
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
                        <a href="product-details.html">Glory of the Snow</a>
                      </h4>
                      <div className="product-price-wrapper">
                        <span>$100.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrapper">
                    <div className="product-img">
                      <a href="product-details.html">
                        <img
                          alt=""
                          src={require("../../assets/img/product/product-6.jpg")}
                        />
                      </a>
                      <span>-30%</span>
                      <div className="product-action">
                        <a
                          className="action-wishlist"
                          href="#"
                          title="Wishlist"
                        >
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
                        <a href="product-details.html">Jack in the Pulpit</a>
                      </h4>
                      <div className="product-price-wrapper">
                        <span>$100.00</span>
                        <span className="product-price-old">$120.00 </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab3" className="tab-pane">
                <div className="featured-product-active owl-carousel product-nav">
                  <div className="product-wrapper">
                    <div className="product-img">
                      <a href="product-details.html">
                        <img
                          alt=""
                          src={require("../../assets/img/product/product-4.jpg")}
                        />
                      </a>
                      <span>-30%</span>
                      <div className="product-action">
                        <a
                          className="action-wishlist"
                          href="#"
                          title="Wishlist"
                        >
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
                        <img
                          alt=""
                          src={require("../../assets/img/product/product-2.jpg")}
                        />
                      </a>
                      <div className="product-action">
                        <a
                          className="action-wishlist"
                          href="#"
                          title="Wishlist"
                        >
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
                        <img
                          alt=""
                          src={require("../../assets/img/product/product-1.jpg")}
                        />
                      </a>
                      <span>-30%</span>
                      <div className="product-action">
                        <a
                          className="action-wishlist"
                          href="#"
                          title="Wishlist"
                        >
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
                        <img
                          alt=""
                          src={require("../../assets/img/product/product-3.jpg")}
                        />
                      </a>
                      <div className="product-action">
                        <a
                          className="action-wishlist"
                          href="#"
                          title="Wishlist"
                        >
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
                        <img
                          alt=""
                          src={require("../../assets/img/product/product-2.jpg")}
                        />
                      </a>
                      <span>-30%</span>
                      <div className="product-action">
                        <a
                          className="action-wishlist"
                          href="#"
                          title="Wishlist"
                        >
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
              <div id="tab4" className="tab-pane">
                <div className="featured-product-active owl-carousel product-nav">
                  <div className="product-wrapper">
                    <div className="product-img">
                      <a href="product-details.html">
                        <img
                          alt=""
                          src={require("../../assets/img/product/product-8.jpg")}
                        />
                      </a>
                      <span>-30%</span>
                      <div className="product-action">
                        <a
                          className="action-wishlist"
                          href="#"
                          title="Wishlist"
                        >
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
                        <a href="product-details.html">Golden Marguerite</a>
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
                        <img
                          alt=""
                          src={require("../../assets/img/product/product-6.jpg")}
                        />
                      </a>
                      <div className="product-action">
                        <a
                          className="action-wishlist"
                          href="#"
                          title="Wishlist"
                        >
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
                        <img
                          alt=""
                          src={require("../../assets/img/product/product-5.jpg")}
                        />
                      </a>
                      <span>-30%</span>
                      <div className="product-action">
                        <a
                          className="action-wishlist"
                          href="#"
                          title="Wishlist"
                        >
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
                        <a href="product-details.html">Polka Dot Plant</a>
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
                        <img
                          alt=""
                          src={require("../../assets/img/product/product-7.jpg")}
                        />
                      </a>
                      <div className="product-action">
                        <a
                          className="action-wishlist"
                          href="#"
                          title="Wishlist"
                        >
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
                        <a href="product-details.html">Glory of the Snow</a>
                      </h4>
                      <div className="product-price-wrapper">
                        <span>$100.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrapper">
                    <div className="product-img">
                      <a href="product-details.html">
                        <img
                          alt=""
                          src={require("../../assets/img/product/product-4.jpg")}
                        />
                      </a>
                      <span>-30%</span>
                      <div className="product-action">
                        <a
                          className="action-wishlist"
                          href="#"
                          title="Wishlist"
                        >
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
                        <a href="product-details.html">Jack in the Pulpit</a>
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
        </div>
      </div>
    );
  }
}
