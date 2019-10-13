import React, { Component } from "react";
import "./Saverplantpack.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default class Saverplantpack extends Component {
  render() {
    return (
      <div className="product-area pt-40 pb-70">
        <div className="container">
          <div className="product-top-bar section-border mb-35">
            <div className="section-title-wrap">
              <h3 className="section-title section-bg-white">
                Super Saver Plant Packs
              </h3>
            </div>
          </div>
          <div className="tab-content jump">
            <div id="tab1" className="tab-pane active">
              <OwlCarousel
                items={6}
                margin={10}
                rewind
                className="featured-product-active owl-carousel product-nav"
              >
                <div className="product-wrapper">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        alt=""
                        src={require("../../../assets/img/product/product-1.jpg")}
                      />
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
                      <img
                        alt=""
                        src={require("../../../assets/img/product/product-2.jpg")}
                      />
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
                        src={require("../../../assets/img/product/product-3.jpg")}
                      />
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
                      <img
                        alt=""
                        src={require("../../../assets/img/product/product-4.jpg")}
                      />
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
                      <img
                        alt=""
                        src={require("../../../assets/img/product/product-1.jpg")}
                      />
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
                      <img
                        alt=""
                        src={require("../../../assets/img/product/product-2.jpg")}
                      />
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
              </OwlCarousel>
            </div>
            <div id="tab2" className="tab-pane">
              <OwlCarousel
                items={6}
                rewind
                margin={10}
                className="featured-product-active owl-carousel product-nav"
              >
                <div className="product-wrapper">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        alt=""
                        src={require("../../../assets/img/product/product-5.jpg")}
                      />
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
                        src={require("../../../assets/img/product/product-1.jpg")}
                      />
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
                      <img
                        alt=""
                        src={require("../../../assets/img/product/product-6.jpg")}
                      />
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
                      <img
                        alt=""
                        src={require("../../../assets/img/product/product-7.jpg")}
                      />
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
                        src={require("../../../assets/img/product/product-8.jpg")}
                      />
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
                        src={require("../../../assets/img/product/product-6.jpg")}
                      />
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
                      <a href="product-details.html">Jack in the Pulpit</a>
                    </h4>
                    <div className="product-price-wrapper">
                      <span>$100.00</span>
                      <span className="product-price-old">$120.00 </span>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
            <div id="tab3" className="tab-pane">
              <OwlCarousel
                items={6}
                rewind
                margin={10}
                className="featured-product-active owl-carousel product-nav"
              >
                <div className="product-wrapper">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        alt=""
                        src={require("../../../assets/img/product/product-1.jpg")}
                      />
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
                      <img
                        alt=""
                        src={require("../../../assets/img/product/product-4.jpg")}
                      />
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
                      <img
                        alt=""
                        src={require("../../../assets/img/product/product-2.jpg")}
                      />
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
                      <img
                        alt=""
                        src={require("../../../assets/img/product/product-1.jpg")}
                      />
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
                      <img
                        alt=""
                        src={require("../../../assets/img/product/product-3.jpg")}
                      />
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
                      <img
                        alt=""
                        src={require("../../../assets/img/product/product-2.jpg")}
                      />
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
              </OwlCarousel>
            </div>
            <div id="tab4" className="tab-pane">
              <OwlCarousel
                items={6}
                margin={10}
                rewind
                className="featured-product-active owl-carousel product-nav"
              >
                <div className="product-wrapper">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        alt=""
                        src={require("../../../assets/img/product/product-1.jpg")}
                      />
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
                      <img
                        alt=""
                        src={require("../../../assets/img/product/product-8.jpg")}
                      />
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
                        src={require("../../../assets/img/product/product-6.jpg")}
                      />
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
                      <img
                        alt=""
                        src={require("../../../assets/img/product/product-5.jpg")}
                      />
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
                        src={require("../../../assets/img/product/product-7.jpg")}
                      />
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
                        src={require("../../../assets/img/product/product-4.jpg")}
                      />
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
                      <a href="product-details.html">Jack in the Pulpit</a>
                    </h4>
                    <div className="product-price-wrapper">
                      <span>$100.00</span>
                      <span className="product-price-old">$120.00 </span>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
