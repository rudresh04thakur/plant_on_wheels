import React, { Component } from "react";
import "./Home.css";
import $ from "jquery";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Trending from "./trending/Trending";
import Offers from "./offers/Offers";
import Saverplantpack from "./saverplantpack/Saverplantpack";
import Accessories from "./accessories/Accessories";
import Bestselling from "./bestselling/Bestselling";

export class Home extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="Landing-page">
        <div
          className="slider-area"
          style={{ minHeight: "250px", maxHeight: "250px", overflow: "hidden" }}
        >
          <OwlCarousel
            items
            responsiveClass={1}
            rewind
            autoplay
            className="owl-theme"
          >
            <div
              className="single-slider pt-175 pb-258 bg-img"
              style={{
                backgroundImage: `url(${require("../../assets/img/slider/slider-1.jpg")})`
              }}
            >
              <div className="container">
                <div className="slider-content slider-animated-1">
                  <h3 className="animated">New Arrivals</h3>
                  <h1 className="animated">For Mother’s Day!</h1>
                  <h5 className="animated">
                    Exclusive Offer -10% Off This Week
                  </h5>
                  <div className="slider-btn mt-45">
                    <a className="animated" href="product-details.html">
                      shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="single-slider pt-175 pb-258 bg-img"
              style={{
                backgroundImage: `url(${require("../../assets/img/slider/slider-1.jpg")})`
              }}
            >
              <div className="container">
                <div className="slider-content slider-animated-2">
                  <h3 className="animated">New Arrivals</h3>
                  <h1 className="animated">For Mother’s Day!</h1>
                  <h5 className="animated">
                    Exclusive Offer -10% Off This Week
                  </h5>
                  <div className="slider-btn mt-45">
                    <a className="animated" href="product-details.html">
                      shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
        <Trending />
        <Offers />
        <Saverplantpack />
        <Bestselling />
        <Accessories />
      </div>
    );
  }
}
