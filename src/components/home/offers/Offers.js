import React, { Component } from "react";
import "./Offers.css";
export default class Offers extends Component {
  render() {
    return (
      <div className="component-Offers" style={{ marginTop: "30px" }}>
        <div className="banner-area">
          <div className="container">
            <div className="banner-wrap">
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div className="single-banner img-zoom mb-30">
                    <a href="#">
                      <img
                        src={require("../../../assets/img/banner/banner-1.png")}
                        alt=""
                      />
                    </a>
                    <div className="banner-content">
                      <h4>Camellias</h4>
                      <a href="#">shop Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="single-banner img-zoom mb-30">
                    <a href="#">
                      <img
                        src={require("../../../assets/img/banner/banner-2.png")}
                        alt=""
                      />
                    </a>
                    <div className="banner-content">
                      <h4>Bergamot</h4>
                      <a href="#">shop Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="single-banner mb-xs-banner img-zoom mb-30">
                    <a href="#">
                      <img
                        src={require("../../../assets/img/banner/banner-3.png")}
                        alt=""
                      />
                    </a>
                    <div className="banner-content">
                      <h4>Bottlebrush</h4>
                      <a href="#">shop Now</a>
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
