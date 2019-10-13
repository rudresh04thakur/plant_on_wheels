import React, { Component } from "react";
// import "../../Form.css";
import axios from "axios";


const FirstNameRegex = RegExp(/^([a-zA-Z]{2,10})$/);
const LastNameRegex = RegExp(/^([a-zA-Z]{2,10})$/);
const CLocationIDRegex = RegExp(/^([a-zA-Z]{2,10})$/);
const CRoleRegex = RegExp(/^([a-zA-Z]{2,10})$/);
const CPasswordRegex = RegExp(/^([a-zA-Z]{2,10})$/);
const CreditCardRegex = RegExp(/^([a-zA-Z]{2,10})$/);
const CreditCardTypeRegex = RegExp(/^([a-zA-Z]{2,10})$/);
const CardExMoRegex = RegExp(/^([a-zA-Z]{2,10})$/);
const CardExYrRegex = RegExp(/^([a-zA-Z]{2,10})$/);
const BillingAddressRegex = RegExp(/^([a-zA-Z]{2,10})$/);
const BillingCityRegex = RegExp(/^([a-zA-Z]{2,10})$/);
const BillingRegionRegex = RegExp(/^([a-zA-Z]{2,10})$/);
const BillingPostalCodeRegex = RegExp(/^([a-zA-Z]{2,10})$/);
const BillingCountryRegex = RegExp(/^([a-zA-Z]{2,10})$/);
const ShipAddressRegex = RegExp(/^([a-zA-Z]{2,10})$/);
const ShipCityRegex = RegExp(/^([a-zA-Z]{2,10})$/);
const ShipRegionRegex = RegExp(/^([a-zA-Z]{2,10})$/);
const ShipPostalCodeRegex = RegExp(/^([a-zA-Z]{2,10})$/);
const ShipCountryRegex = RegExp(/^([a-zA-Z]{2,10})$/);
const DateEnteredRegex = RegExp(/^([a-zA-Z]{2,10})$/);


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
      FirstName: "",
      LastName: "",
      CLocationID: "",
      CRole: "",
      CPassword: "",
      CreditCard: "",
      CreditCardType: "",
      CardExMo: "",
      CardExYr: "",
      BillingAddress: "",
      BillingCity: "",
      BillingRegion: "",
      BillingPostalCode: "",
      BillingCountry: "",
      ShipAddress: "",
      ShipCity: "",
      ShipRegion: "",
      ShipPostalCode: "",
      ShipCountry: "",
      DateEntered: "",
      access_token: "SfrjBV5d0tHbP9G7wx8Gq4NQM446ExdH"
    };
    this.state = {
      api: "http://localhost:9000/Customers",

      formErrors: {
        FirstName: "",
        LastName: "",
        CLocationID: "",
        CRole: "",
        CPassword: "",
        CreditCard: "",
        CreditCardType: "",
        CardExMo: "",
        CardExYr: "",
        BillingAddress: "",
        BillingCity: "",
        BillingRegion: "",
        BillingPostalCode: "",
        BillingCountry: "",
        ShipAddress: "",
        ShipCity: "",
        ShipRegion: "",
        ShipPostalCode: "",
        ShipCountry: "",
        DateEntered: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const {
      FirstName,
      LastName,
      CLocationID,
      CRole,
      CPassword,
      CreditCard,
      CreditCardType,
      CardExMo,
      CardExYr,
      BillingAddress,
      BillingCity,
      BillingRegion,
      BillingPostalCode,
      BillingCountry,
      ShipAddress,
      ShipCity,
      ShipRegion,
      ShipPostalCode,
      ShipCountry,
      DateEntered,
      access_token
    } = this.values;


    if (formValid(this.state)) {
      axios
        .post(this.state.api, {
          FirstName: this.state.FirstName,
          LastName: this.state.LastName,
          CLocationID: this.state.CLocationID,
          CRole: this.state.CRole,
          CPassword: this.state.CPassword,
          CreditCard: this.state.CreditCard,
          CreditCardType: this.state.CreditCardType,
          CardExMo: this.state.CardExMo,
          CardExYr: this.state.CardExYr,
          BillingAddress: this.state.BillingAddress,
          BillingCity: this.state.BillingCity,
          BillingRegion: this.state.BillingRegion,
          BillingPostalCode: this.state.BillingPostalCode,
          BillingCountry: this.state.BillingCountry,
          ShipAddress: this.state.ShipAddress,
          ShipCity: this.state.ShipCity,
          ShipRegion: this.state.ShipRegion,
          ShipPostalCode: this.state.ShipPostalCode,
          ShipCountry: this.state.ShipCountry,
          DateEntered: this.state.DateEntered,
          access_token
        })
        .then(res => {
          console.log(res);
        });

    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };


  // onFileSelect = e => {
  //   this.setState({ SelectedFile: e.target.files[0] });
  //   console.log(e.target.files[0]);
  // };

  // Upload = () => {
  //   const fd = new FormData();
  //   fd.append("Picture", this.state.SelectedFile, this.state.SelectedFile.name);
  //   axios.post("/upload", fd).then(res => {
  //     console.log(res);
  //   });
  // };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "FirstName":
        formErrors.FirstName = FirstNameRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "LastName":
        formErrors.LastName = LastNameRegex.test(value)
          ? ""
          : "invalid email address";
        break;

      case "CLocationID":
        formErrors.CLocationID = CLocationIDRegex.test(value)
          ? ""
          : "invalid email address";
        break;

      case "CRole":
        formErrors.CRole = CRoleRegex.test(value)
          ? ""
          : "invalid email address";
        break;

      case "CPassword":
        formErrors.CPassword = CPasswordRegex.test(value)
          ? ""
          : "invalid email address";
        break;

      case "CreditCard":
        formErrors.CreditCard = CreditCardRegex.test(value)
          ? ""
          : "invalid email address";
        break;

      case "CreditCardType":
        formErrors.CreditCardType = CreditCardTypeRegex.test(value)
          ? ""
          : "invalid email address";
        break;

      case "CardExMo":
        formErrors.CardExMo = CardExMoRegex.test(value)
          ? ""
          : "invalid email address";
        break;

      case "CardExYr":
        formErrors.CardExYr = CardExYrRegex.test(value)
          ? ""
          : "invalid email address";
        break;

      case "BillingAddress":
        formErrors.BillingAddress = BillingAddressRegex.test(value)
          ? ""
          : "invalid email address";
        break;

      case "BillingCity":
        formErrors.BillingCity = BillingCityRegex.test(value)
          ? ""
          : "invalid email address";
        break;

      case "BillingRegion":
        formErrors.BillingRegion = BillingRegionRegex.test(value)
          ? ""
          : "invalid email address";
        break;

      case "BillingPostalCode":
        formErrors.BillingPostalCode = BillingPostalCodeRegex.test(value)
          ? ""
          : "invalid email address";
        break;

      case "BillingCountry":
        formErrors.BillingCountry = BillingCountryRegex.test(value)
          ? ""
          : "invalid email address";
        break;

      case "ShipAddress":
        formErrors.ShipAddress = ShipAddressRegex.test(value)
          ? ""
          : "invalid email address";
        break;

      case "ShipCity":
        formErrors.ShipCity = ShipCityRegex.test(value)
          ? ""
          : "invalid email address";
        break;

      case "ShipRegion":
        formErrors.ShipRegion = ShipRegionRegex.test(value)
          ? ""
          : "invalid email address";
        break;

      case "ShipPostalCode":
        formErrors.ShipPostalCode = ShipPostalCodeRegex.test(value)
          ? ""
          : "invalid email address";
        break;

      case "ShipCountry":
        formErrors.ShipCountry = ShipCountryRegex.test(value)
          ? ""
          : "invalid email address";
        break;

      case "DateEntered":
        formErrors.DateEntered = DateEnteredRegex.test(value)
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
    const { FirstName, LastName, CLocationID, CRole, CPassword, CreditCard,
      CreditCardType, CardExMo, CardExYr, BillingAddress, BillingCity, BillingRegion,
      BillingPostalCode, BillingCountry, ShipAddress, ShipCity, ShipRegion, ShipPostalCode,
      ShipCountry, DateEntered } = this.values;

    return (
      <div className="component-Create">
        <div className="container-scroller">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Customers</h4>
                <form onSubmit={this.handleSubmit} className="form-sample">
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          FirstName
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.FirstName.length > 0 ? "error" : null}
                            placeholder="Enter your firstname"
                            type="text"
                            name="FirstName"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.FirstName.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.FirstName}</small></span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          LastName
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.LastName.length > 0 ? "error" : null}
                            placeholder="Enter your lastname"
                            type="text"
                            name="LastName"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.LastName.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.LastName}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          CLocationID
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.CLocationID.length > 0 ? "error" : null}
                            placeholder="Enter customer role "
                            type="text"
                            name="CLocationID"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.CLocationID.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.CLocationID}</small></span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          CRole
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.CRole.length > 0 ? "error" : null}
                            placeholder="Enter customer role"
                            type="text"
                            name="CRole"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.CRole.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.CRole}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          CPassword
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.CPassword.length > 0 ? "error" : null}
                            placeholder="Enter password"
                            type="text"
                            name="CPassword"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.CPassword.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.CPassword}</small></span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          CreditCard
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.CreditCard.length > 0 ? "error" : null}
                            placeholder="credit card"
                            type="text"
                            name="CreditCard"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.CreditCard.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.CreditCard}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          CreditCardType
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.CreditCardType.length > 0 ? "error" : null}
                            placeholder="credit card type"
                            type="text"
                            name="CreditCardType"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.CreditCardType.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.CreditCardType}</small></span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          CardExMo
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.CardExMo.length > 0 ? "error" : null}
                            placeholder="card ex mo"
                            type="text"
                            name="CardExMo"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.CardExMo.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.CardExMo}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          CardExYr
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.CardExYr.length > 0 ? "error" : null}
                            placeholder="card ex year"
                            type="text"
                            name="CardExYr"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.CardExYr.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.CardExYr}</small></span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          BillingAddress
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.BillingAddress.length > 0 ? "error" : null}
                            placeholder="Enter billing address"
                            type="text"
                            name="BillingAddress"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.BillingAddress.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.BillingAddress}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          BillingCity
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.BillingCity.length > 0 ? "error" : null}
                            placeholder="Enter billing city"
                            type="text"
                            name="BillingCity"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.BillingCity.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.BillingCity}</small></span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          BillingRegion
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.BillingRegion.length > 0 ? "error" : null}
                            placeholder="Enter billing region"
                            type="text"
                            name="BillingRegion"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.BillingRegion.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.BillingRegion}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          BillingPostalCode
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.BillingPostalCode.length > 0 ? "error" : null}
                            placeholder="Enter billing postal code"
                            type="text"
                            name="BillingPostalCode"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.BillingPostalCode.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.BillingPostalCode}</small></span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          BillingCountry
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.BillingCountry.length > 0 ? "error" : null}
                            placeholder="Enter billing country"
                            type="text"
                            name="BillingCountry"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.BillingCountry.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.BillingCountry}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          ShipAddress
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.ShipAddress.length > 0 ? "error" : null}
                            placeholder="Enter ship address"
                            type="text"
                            name="ShipAddress"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.ShipAddress.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.ShipAddress}</small></span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          ShipCity
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.ShipCity.length > 0 ? "error" : null}
                            placeholder="Enter ship city"
                            type="text"
                            name="ShipCity"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.ShipCity.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.ShipCity}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          ShipRegion
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.ShipRegion.length > 0 ? "error" : null}
                            placeholder="Enter ship Region"
                            type="text"
                            name="ShipRegion"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.ShipRegion.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.ShipRegion}</small></span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          ShipPostalCode
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.ShipPostalCode.length > 0 ? "error" : null}
                            placeholder="Enter ship postal code"
                            type="text"
                            name="ShipPostalCode"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.ShipPostalCode.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.ShipPostalCode}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          ShipCountry
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.ShipCountry.length > 0 ? "error" : null}
                            placeholder="Enter ship country"
                            type="text"
                            name="ShipCountry"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.ShipCountry.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.ShipCountry}</small></span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          DateEntered
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.DateEntered.length > 0 ? "error" : null}

                            type="text"
                            name="DateEntered"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.DateEntered.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.DateEntered}</small></span>
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
