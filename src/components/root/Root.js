import React, { Component } from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/animate.css";
import "../../assets/css/owl.carousel.min.css";
import "../../assets/css/slick.css";
import "../../assets/css/chosen.min.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/simple-line-icons.css";
import "../../assets/css/ionicons.min.css";
import "../../assets/css/meanmenu.min.css";
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../header/Header";
import Footer from "../footer/Footer";

import { Home } from "../home/Home";
import { Shoppingcart } from "../header/My cart/shoppingcart/Shoppingcart";
import { Myaccount } from "../header/My account/myaccount/Myaccount";
import { Login } from "../header/My account/login/Login";
import { Register } from "../header/My account/register/Register";
import { Wishlist } from "../header/My account/wishlist/Wishlist";
import { Checkout } from "../header/My cart/checkout/Checkout";
import Productdetails from "../productdetails/Productdetails";

import { Products } from "../products/Products";

window.$ = window.jQuery = require("jquery");
export default class Root extends Component {
  render() {
    return (
      <Router>
        <div className="component-Root">
          <Header />
          {/* {this.props.children} */}
          <Switch>
            <Route exact path={"/"} component={Home} />

            {/* MY ACCOUNT IN HEADER*/}
            <Route path={"/myaccount"} component={Myaccount} />
            <Route path={"/wishlist"} component={Wishlist} />
            <Route path={"/login"} component={Login} />
            <Route path={"/register"} component={Register} />

            {/* NAVBAR IN HEADER */}
            <Route path={"/products/:category"} component={Products} />
            <Route path={"/product/:id"} component={Productdetails} />
            {/* MY CART IN HEADER */}
            <Route path={"/cart"} component={Shoppingcart} />
            <Route path={"/cart/:id"} component={Shoppingcart} />
            <Route path={"/checkout"} component={Checkout} />

            {/*  */}
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
