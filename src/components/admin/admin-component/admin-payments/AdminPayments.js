import React, { Component } from "react";
import "./AdminPayments.css";
import Create from "./create/Create";
import { Route, Link } from "react-router-dom";
export default class AdminPayments extends Component {
  render() {
    return (
      <div className="component-AdminPayments">
        <Route path={"/admin/payments/create"} component={Create} />
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Payments</h4>
              <hr />
              <p className="card-description">
                Create new payments
                <Link
                  to="/admin/payments/create"
                  className="float-right nav-link fa fa-plus-circle"
                  aria-hidden="true"
                />
              </p>

              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>ID </th>
                    <th>Payments</th>
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
