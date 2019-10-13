import React, { Component } from "react";
// import "../../Form.css";
import axios from "axios";

const Room_FlatRegex = RegExp(/^([a-zA-Z]{2,20})$/);
const BuildingRegex = RegExp(/^([a-zA-Z]{2,10})$/);
const Address1Regex = RegExp(/^([a-zA-Z]{2,10})$/);
const Address2Regex = RegExp(/^([a-zA-Z]{2,10})$/);
const CityRegex = RegExp(/^([a-zA-Z0-9]{10,13})$/)
const StateRegex = RegExp(/^([a-zA-Z]{2,20})$/);
const PostalCodeRegex = RegExp(/^([a-zA-Z]{2,10})$/);
const CountryRegex = RegExp(/^([a-zA-Z]{2,10})$/);
const PhoneRegex = RegExp(/^([a-zA-Z]{2,10})$/);
const EmailRegex = RegExp(/^([a-zA-Z0-9]{10,13})$/)
const VoiceMailRegex = RegExp(/^([a-zA-Z0-9]{10,13})$/)

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
      Room_Flat: "",
      Building: "",
      Address1: "",
      Address2: "",
      City: "",
      State: "",
      PostalCode: "",
      Country: "",
      Phone: "",
      Email: "",
      VoiceMail: "",
      access_token: "SfrjBV5d0tHbP9G7wx8Gq4NQM446ExdH"
    };

    this.state = {
      api: "http://localhost:9000/CLocations",
      formErrors: {
        Room_Flat: "",
        Building: "",
        Address1: "",
        Address2: "",
        City: "",
        State: "",
        PostalCode: "",
        Country: "",
        Phone: "",
        Email: "",
        VoiceMail: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const {
      Room_Flat,
      Building,
      Address1,
      Address2,
      City,
      State,
      PostalCode,
      Country,
      Phone,
      Email,
      VoiceMail,
      access_token
    } = this.values;
    if (formValid(this.state)) {
      axios
        .post(this.state.api, {
          Room_Flat: this.state.Room_Flat,
          Building: this.state.Building,
          Address1: this.state.Address1,
          Address2: this.state.Address2,
          City: this.state.City,
          State: this.state.State,
          PostalCode: this.state.PostalCode,
          Country: this.state.Country,
          Phone: this.state.Phone,
          Email: this.state.Email,
          VoiceMail: this.state.VoiceMail,
          access_token
        })
        .then(res => {
          console.log(res);
        });
    }
    else {
      console.error("FORM INVALID - PLEASE CHECK YOUR INPUTS");
    }

  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "Room_Flat":
        formErrors.Room_Flat = Room_FlatRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "Building":
        formErrors.Building = BuildingRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "Address1":
        formErrors.Address1 = Address1Regex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "Address2":
        formErrors.Address2 = Address2Regex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "City":
        formErrors.City = CityRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "State":
        formErrors.State = StateRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "PostalCode":
        formErrors.PostalCode = PostalCodeRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "Country":
        formErrors.Country = CountryRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "Phone":
        formErrors.Phone = PhoneRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "Email":
        formErrors.Email = EmailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "VoiceMail":
        formErrors.VoiceMail = VoiceMailRegex.test(value)
          ? ""
          : "invalid email address";
        break;

      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  render() {
    const { formErrors } = this.state;
    const { Room_Flat, Building, Address1, Address2, City, State,
      PostalCode, Country, Phone, Email, VoiceMail } = this.values;
    return (
      <div className="component-Create">
        <div className="container-scroller">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Create C-Location</h4>
                <form onSubmit={this.handleSubmit} noValidate className="form-sample">
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Room_Flat
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.Room_Flat.length > 0 ? "error" : null}
                            placeholder="Enter flat details"
                            type="text"
                            name="Room_Flat"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.Room_Flat.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.Room_Flat}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Building
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.Building.length > 0 ? "error" : null}
                            placeholder="building number"
                            type="text"
                            name="Building"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.Building.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.Building}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Address1
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.Address1.length > 0 ? "error" : null}
                            placeholder="address field 1"
                            type="text"
                            name="Address1"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.Address1.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.Address1}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Address2
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.Address2.length > 0 ? "error" : null}
                            placeholder="address field 2"
                            type="text"
                            name="Address2"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.Address2.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.Address2}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          City
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.City.length > 0 ? "error" : null}
                            placeholder="city"
                            type="text"
                            name="City"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.City.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.City}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          State
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.State.length > 0 ? "error" : null}
                            placeholder="state"
                            type="text"
                            name="State"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.State.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.State}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          PostalCode
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.PostalCode.length > 0 ? "error" : null}
                            placeholder="postal code"
                            type="text"
                            name="PostalCode"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.PostalCode.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.PostalCode}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Country
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.Country.length > 0 ? "error" : null}
                            placeholder="country"
                            type="text"
                            name="Country"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.Country.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.Country}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Phone
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.Phone.length > 0 ? "error" : null}
                            placeholder="phone number"
                            type="text"
                            name="Phone"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.Phone.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.Phone}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Email
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.Email.length > 0 ? "error" : null}
                            placeholder="enter email"
                            type="text"
                            name="Email"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.Email.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.Email}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          VoiceMail
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.VoiceMail.length > 0 ? "error" : null}
                            placeholder="enter voicemail"
                            type="text"
                            name="VoiceMail"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.VoiceMail.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.VoiceMail}</small></span>
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
