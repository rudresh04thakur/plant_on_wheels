import React, { Component } from "react";
import "./Category.css";
import Create from "./create/Create";
import axios from "axios";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

export default class Category extends Component {
  componentDidMount() {
    axios.get("http://localhost:9000/Categories").then(res => {
      this.setState({ categories: res.data.rows });
      // console.log(this.props.match.params.nav);
      //console.log(this.state.products);
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      i: 1
    }
  }
  render() {
    return (
      <div className="component-Category">
        <Route path={"/admin/category/create"} component={Create} />
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Category</h4>
              <hr />
              <p className="card-description">
                Create new category
                <Link
                  to="/admin/category/create"
                  className="float-right nav-link fa fa-plus-circle"
                  aria-hidden="true"
                />
              </p>

              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Category Name</th>
                    <th>Active</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {this.state.categories.map(element => (
                  <tbody>
                    <tr>
                      <td>{this.state.i++}</td>
                      <td>{element.CategoryName}</td>
                      <td></td>
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
                ))}
              </table>
            </div>
          </div>
        </div>
      </div >
    );
  }
}
