import React, { Component } from "react";
import "./Bestselling.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default class Bestselling extends Component {
  render() {
    return (
      <div className="best-selling-product pt-70 pb-75 gray-bg">
        <div className="container">
          <div className="product-top-bar section-border mb-35">
            <div className="section-title-wrap">
              <h3 className="section-title section-bg-gray">
                Best Selling Products
              </h3>
            </div>
          </div>
          <div className="best-selling-wrap">
            <OwlCarousel
              items={1}
              className="best-selling-active owl-carousel product-nav"
            >
              <div className="single-best-selling">
                <div className="row">
                  <div className="col-lg-6 col-xl-5 col-md-6">
                    <div className="single-best-img">
                      <img
                        className="tilter"
                        src={require("../../../assets/img/banner/deal-1.png")}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-7 col-md-6">
                    <div className="deals-content text-center deal-mrg">
                      <img
                        alt=""
                        src={require("../../../assets/img/icon-img/deals-2.png")}
                      />
                      <h2>
                        Hot Deal ! Sale Up To <span>20% Off</span>
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.{" "}
                      </p>
                      <div className="timer timer-style">
                        <div data-countdown="2018/09/01" />
                      </div>
                      <div className="deals-btn">
                        <a href="#">Shop Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-best-selling">
                <div className="row">
                  <div className="col-lg-6 col-xl-5 col-md-6">
                    <div className="single-best-img">
                      <img
                        className="tilter"
                        src={require("../../../assets/img/banner/deal-1.png")}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-7 col-md-6">
                    <div className="deals-content text-center deal-mrg">
                      <img
                        alt=""
                        src={require("../../../assets/img/icon-img/deals-2.png")}
                      />
                      <h2>
                        Hot Deal ! Sale Up To <span>20% Off</span>
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.{" "}
                      </p>
                      <div className="timer timer-style">
                        <div data-countdown="2018/09/01" />
                      </div>
                      <div className="deals-btn">
                        <a href="#">Shop Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    );
  }
}
