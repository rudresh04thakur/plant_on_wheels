
import React, { Component } from "react";
import "../../AdminComponent.css";
import axios from "axios";


const PaymentTypeRegex = RegExp(/^([a-zA-Z]{2,10})$/);
const AllowedRegex = RegExp(/^([a-zA-Z]{2,10})$/);

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

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.values = {
      PaymentType: "",
      Allowed: "",
      access_token: "SfrjBV5d0tHbP9G7wx8Gq4NQM446ExdH"
    }

    this.state = {
      api: "http://localhost:9000/Payments",

      formErrors: {
        PaymentType: "",
        Allowed: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const {
      PaymentType,
      Allowed,
      access_token
    } = this.values;


    if (formValid(this.state)) {
      console.log(`
        PaymentType: ${this.state.PaymentType}
        Allowed :${this.state.Allowed}
      
      `);
      axios.post("http://localhost:9000/Payments", {
        PaymentType: this.state.PaymentType,
        Allowed: this.state.Allowed,
        access_token
      }).then(res => {
        console.log(res);
      });

    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "PaymentType":
        formErrors.PaymentType = PaymentTypeRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "Allowed":
        formErrors.Allowed =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;
    const { PaymentType, Allowed } = this.values;
    return (

      <div className="component-Create">
        <div className="container-scroller">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Payment</h4>
                <form onSubmit={this.handleSubmit} noValidate className="form-sample">
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Payment Type
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.PaymentType.length > 0 ? "error" : null}
                            placeholder="First Name"
                            type="text"
                            name="PaymentType"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.PaymentType.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.PaymentType}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Allowed
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.Allowed.length > 0 ? "error" : null}
                            placeholder="Last Name"
                            type="text"
                            name="Allowed"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.Allowed.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.Allowed}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <button type="submit" className="btn btn-success">Submit</button>
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