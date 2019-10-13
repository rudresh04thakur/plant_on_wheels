import React, { Component } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import axios from "axios"
export default class Sidebar extends Component {
  // componentDidMount() {
  //   axios.get("http://localhost:9000/Users/" + this.state.id).then(res => {
  //     this.setState({ user: res.data });
  //     // console.log(this.props.match.params.nav);
  //     console.log(this.state.user);
  //     //console.log(this.state.products);
  //   });
  // }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     user: {},
  //     access_token: "SfrjBV5d0tHbP9G7wx8Gq4NQM446ExdH",
  //     // for temp use
  //     id: "5c1b7ede3436c917e0795c24"
  //   };
  // }
  render() {
    return (
      <div className="component-Sidebar">
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            <li className="nav-item nav-profile">
              <a href="#" className="nav-link">
                <div className="nav-profile-image">
                  <img
                    src={require("../../../assets/admin/images/faces/face1.jpg")}
                    alt="profile"
                  />
                  <span className="login-status online" />
                </div>
                <div className="nav-profile-text d-flex flex-column">
                  <span className="font-weight-bold mb-2">David Grey. H</span>
                  <span className="text-secondary text-small">
                    Project Manager
                  </span>
                </div>
                <i className="mdi mdi-bookmark-check text-success nav-profile-badge" />
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                <span className="menu-title">Dashboard</span>
                <i className="mdi mdi-view-dashboard menu-icon" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/category">
                <span className="menu-title">Category</span>
                <i className="mdi  mdi-pencil-box menu-icon" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/clocation">
                <span className="menu-title">C - Location</span>
                <i className="mdi  mdi-map-marker menu-icon" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/customers">
                <span className="menu-title">Customers</span>
                <i className="mdi mdi-account-box-outline menu-icon" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/orderdetails">
                <span className="menu-title">Order Details</span>
                <i className="mdi mdi-information-outline menu-icon" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/orders">
                <span className="menu-title">Orders</span>
                <i className="mdi mdi-format-list-bulleted menu-icon" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/payments">
                <span className="menu-title">Payments</span>
                <i className="mdi mdi-cash-multiple menu-icon" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/products">
                <span className="menu-title">Products</span>
                <i className="mdi mdi-pencil-box-outline menu-icon" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/slocation">
                <span className="menu-title">S - Location</span>
                <i className="mdi mdi-map-marker menu-icon" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/supplier">
                <span className="menu-title">Supplier</span>
                <i className="mdi mdi-account menu-icon" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
