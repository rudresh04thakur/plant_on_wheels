import React, { Component } from "react";
import $ from "jquery";
import "../../assets/admin/vendors/iconfonts/mdi/css/materialdesignicons.min.css";
import "../../assets/admin/vendors/css/vendor.bundle.base.css";
import "../../assets/admin/css/style.css";
import "./Admin.css";

import scriptLoader from "react-async-script-loader";

import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";

import Dashboard from "./admin-component/dashboard/Dashboard";
import AdminCategory from "./admin-component/admin-category/Category";
import AdminClocation from "./admin-component/admin-clocation/AdminClocation";
import AdminCustomers from "./admin-component/admin-customers/AdminCustomers";
import AdminOderDetails from "./admin-component/admin-oderdetails/AdminOderdetails";
import AdminOders from "./admin-component/admin-oders/AdminOders";
import AdminPayments from "./admin-component/admin-payments/AdminPayments";
import AdminProducts from "./admin-component/admin-products/AdminProducts";
import AdminSlocation from "./admin-component/admin-slocation/AdminSlocation";
import AdminSupplier from "./admin-component/admin-supplier/AdminSupplier";

// import Create from "./admin-component/admin-category/create/Create";
// import Create from "./admin-component/admin-clocation/create/Create";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class Admin extends Component {
  // propTypes: {
  //   title: React.PropTypes.string
  // }
  componentWillReceiveProps({ isScriptLoaded, isScriptLoadSucceed }) {
    if (isScriptLoaded && !this.props.isScriptLoaded) {
      // load finished
      if (isScriptLoadSucceed) {
        this.initEditor();
      } else this.props.onError();
    }
  }

  componentDidMount() {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props;
    if (isScriptLoaded && isScriptLoadSucceed) {
      this.initEditor();
    }
  }
  render() {
    return (
      <Router>
        <div className="container-scroller">
          <Header />
          <div className="container-fluid page-body-wrapper">
            <Sidebar />
            <div className="main-panel">
              <div className="content-wrapper">
                <Route exact path={"/admin"} component={Dashboard} />
                <Route path={"/admin/category"} component={AdminCategory} />
                <Route path={"/admin/clocation"} component={AdminClocation} />
                <Route path={"/admin/customers"} component={AdminCustomers} />
                <Route
                  path={"/admin/orderdetails"}
                  component={AdminOderDetails}
                />
                <Route path={"/admin/orders"} component={AdminOders} />
                <Route path={"/admin/payments"} component={AdminPayments} />
                <Route path={"/admin/products"} component={AdminProducts} />
                <Route path={"/admin/slocation"} component={AdminSlocation} />
                <Route path={"/admin/supplier"} component={AdminSupplier} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
scriptLoader(
  "/assets/admin/vendors/js/vendor.bundle.base.js",
  "/assets/admin/vendors/js/vendor.bundle.addons.js",
  "/assets/admin/js/off-canvas.js",
  "/assets/admin/js/misc.js",
  "/assets/admin/js/dashboard.js"
)(Admin);
