import React, { Component } from "react";
import "./AdminOders.css";
import Create from "./create/Create";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

export default class AdminOders extends Component {
  render() {
    return (
      <div className="component-AdminOders">
        <Route path={"/admin/orders/create"} component={Create} />
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Orders</h4>
              <hr />
              <p className="card-description">
                Create new order
                <Link
                  to="/admin/orders/create"
                  className="float-right nav-link fa fa-plus-circle"
                  aria-hidden="true"
                />
              </p>

              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Order Names</th>
                    <th>Active</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{""}</td>
                    <td>Messsy Adam</td>
                    <td>{""}</td>
                    <td>
                      <div className="row">
                        <div>
                          <Link
                            to="/view"
                            className="nav-link fa fa-eye"
                          />
                        </div>
                        <div>
                          <Link
                            to="/edit"
                            className="nav-link fa fa-edit"
                          />
                        </div>
                        <div>
                          <Link
                            to="/delete"
                            className="nav-link fa fa-trash"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
