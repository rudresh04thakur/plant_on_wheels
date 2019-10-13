
import React, { Component } from "react";
// import "../../Form.css";
import axios from "axios";

// VALIDATIONS {{{
const CategoryNameRegex = RegExp(/^([a-zA-Z]{2,20})$/);
const DiscriptionRegex = RegExp(/^([a-zA-Z]{2,10})$/);
const RemarkRegex = RegExp(/^([a-zA-Z]{2,10})$/);
const ActiveRegex = RegExp(/^([a-zA-Z]{2,10})$/);
const PictureRegex = RegExp(/^([a-zA-Z0-9]{10,13})$/)

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};
/// }}}

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.values = {
      CategoryName: "",
      Discription: "",
      Picture: "",
      Active: "",
      Remark: "",
      access_token: "SfrjBV5d0tHbP9G7wx8Gq4NQM446ExdH"
    };

    this.state = {

      formErrors: {
        CategoryName: "",
        Discription: "",
        Picture: "",
        Active: "",
        Remark: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const {
      CategoryName,
      Discription,
      Picture,
      Active,
      Remark,
      access_token
    } = this.values;


    if (formValid(this.state)) {
      console.log(`
        CategoryName:${this.state.CategoryName}
        Discription:${this.state.Discription}
        Picture:${this.state.Picture}
        Active:${this.state.Active}
        Remark:${this.state.Remark}
      `);
      axios.post("http://localhost:9000/Categories", {
        CategoryName: this.state.CategoryName,
        Discription: this.state.Discription,
        Picture: this.state.Picture,
        Active: this.state.Active,
        Remark: this.state.Remark,
        access_token
      }).then(res => {
        console.log(res);
      });

    } else {
      console.error("FORM INVALID - PLEASE CHECK YOUR INPUTS");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "CategoryName":
        formErrors.CategoryName = CategoryNameRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "Discription":
        formErrors.Discription = DiscriptionRegex.test(value)
          ? ""
          : "invalid discription";
        break;
      case "Picture":
        formErrors.Picture =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "Active":
        formErrors.Active = ActiveRegex.test(value)
          ? ""
          : "invalid status";
        break;
      case "Remark":
        formErrors.Remark = RemarkRegex.test(value)
          ? ""
          : "invalid Remark";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;
    const { CategoryName, Discription, Picture, Active, Remark } = this.values;
    return (

      <div className="component-Create">
        <div className="container-scroller">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Create Category</h4>
                <form onSubmit={this.handleSubmit} noValidate className="form-sample">
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Category Name
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.CategoryName.length > 0 ? "error" : null}
                            placeholder="Enter desired category name"
                            type="text"
                            name="CategoryName"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.CategoryName.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.CategoryName}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Discription
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.Discription.length > 0 ? "error" : null}
                            placeholder="Write discription here"
                            type="text"
                            name="Discription"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.Discription.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.Discription}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Picture
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.Picture.length > 0 ? "error" : null}
                            placeholder=""
                            type="text"
                            name="Picture"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.Picture.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.Picture}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Active
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.Active.length > 0 ? "error" : null}
                            placeholder="Status"
                            type="text"
                            name="Active"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.Active.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.Active}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Remarks
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.Remark.length > 0 ? "error" : null}
                            placeholder="Write your remark here"
                            type="text"
                            name="Remark"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.Remark.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.Remark}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <button type="submit" className="btn btn-success" disabled={this.state.isSubmitDisabled}>Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}