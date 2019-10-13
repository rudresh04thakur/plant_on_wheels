import React, { Component } from "react";
import "./Accessories.css";
export default class Accessories extends Component {
  render() {
    return (
      <div className="component-Offers" style={{ marginTop: "30px" }}>
        <div className="banner-area">
          <div className="container">
            <div className="banner-wrap">
              <div className="row">
                <div className="col-lg-3 col-md-3">
                  <div className="single-banner img-zoom mb-30">
                    <a href="#">
                      <img
                        src={require("../../../assets/img/product/product-1.jpg")}
                        alt=""
                      />
                    </a>
                    <div className="banner-content">
                      <h4>Camellias</h4>
                      <a href="#">shop Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3">
                  <div className="single-banner img-zoom mb-30">
                    <a href="#">
                      <img
                        src={require("../../../assets/img/product/product-1.jpg")}
                        alt=""
                      />
                    </a>
                    <div className="banner-content">
                      <h4>Bergamot</h4>
                      <a href="#">shop Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3">
                  <div className="single-banner img-zoom mb-30">
                    <a href="#">
                      <img
                        src={require("../../../assets/img/product/product-1.jpg")}
                        alt=""
                      />
                    </a>
                    <div className="banner-content">
                      <h4>Bergamot</h4>
                      <a href="#">shop Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3">
                  <div className="single-banner mb-xs-banner img-zoom mb-30">
                    <a href="#">
                      <img
                        src={require("../../../assets/img/product/product-1.jpg")}
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
