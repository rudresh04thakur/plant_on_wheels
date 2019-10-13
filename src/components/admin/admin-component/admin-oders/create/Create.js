import React, { Component } from "react";
// import "../../Form.css";
import axios from "axios";


const CustomerIDRegex = RegExp(/^([a-zA-Z0-9 ]{2,10})$/);
const OrderNumberRegex = RegExp(/^([a-zA-Z0-9]{2,10})$/);
const PaymentIDRegex = RegExp(/^([a-zA-Z0-9]{2,10})$/);
const OrderDateRegex = RegExp(/^([a-zA-Z0-9]{2,10})$/);
const ShipDateRegex = RegExp(/^([a-zA-Z0-9]{2,10})$/);
const RequiredDateRegex = RegExp(/^([a-zA-Z0-9]{2,10})$/);
const ShipperIDRegex = RegExp(/^([a-zA-Z0-9]{2,10})$/);
const FreightRegex = RegExp(/^([a-zA-Z0-9]{2,10})$/);
const SalesTaxRegex = RegExp(/^([a-zA-Z0-9]{2,10})$/);
const TimeStampsRegex = RegExp(/^([a-zA-Z0-9]{2,10})$/);
const TransactStatusRegex = RegExp(/^([a-zA-Z0-9]{2,10})$/);
const ErrLocRegex = RegExp(/^([a-zA-Z0-9]{2,10})$/);
const ErrMgsRegex = RegExp(/^([a-zA-Z0-9]{2,10})$/);
const FulFilledRegex = RegExp(/^([a-zA-Z0-9]{2,10})$/);
const DeletedRegex = RegExp(/^([a-zA-Z0-9]{2,10})$/);
const PaidRegex = RegExp(/^([a-zA-Z0-9]{2,10})$/);
const PaymentDateRegex = RegExp(/^([a-zA-Z0-9]{2,10})$/);


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
      CustomerID: "",
      OrderNumber: "",
      PaymentID: "",
      OrderDate: "",
      ShipDate: "",
      RequiredDate: "",
      ShipperID: "",
      Freight: "",
      SalesTax: "",
      TimeStamps: "",
      TransactStatus: "",
      ErrLoc: "",
      ErrMgs: "",
      FulFilled: "",
      Deleted: "",
      Paid: "",
      PaymentDate: "",
      access_token: "SfrjBV5d0tHbP9G7wx8Gq4NQM446ExdH"
    };
    this.state = {
      api: "http://localhost:9000/Orders",

      formErrors: {
        CustomerID: "",
        OrderNumber: "",
        PaymentID: "",
        OrderDate: "",
        ShipDate: "",
        RequiredDate: "",
        ShipperID: "",
        Freight: "",
        SalesTax: "",
        TimeStamps: "",
        TransactStatus: "",
        ErrLoc: "",
        ErrMgs: "",
        FulFilled: "",
        Deleted: "",
        Paid: "",
        PaymentDate: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const {
      CustomerID,
      OrderNumber,
      PaymentID,
      OrderDate,
      ShipDate,
      RequiredDate,
      ShipperID,
      Freight,
      SalesTax,
      TimeStamps,
      TransactStatus,
      ErrLoc,
      ErrMgs,
      FulFilled,
      Deleted,
      Paid,
      PaymentDate,
      access_token
    } = this.values;


    if (formValid(this.state)) {
      axios
        .post(this.state.api, {
          CustomerID: this.state.CustomerID,
          OrderNumber: this.state.OrderNumber,
          PaymentID: this.state.PaymentID,
          OrderDate: this.state.OrderDate,
          ShipDate: this.state.ShipDate,
          RequiredDate: this.state.RequiredDate,
          ShipperID: this.state.ShipperID,
          Freight: this.state.Freight,
          SalesTax: this.state.SalesTax,
          TimeStamps: this.state.TimeStamps,
          TransactStatus: this.state.TransactStatus,
          ErrLoc: this.state.ErrLoc,
          ErrMgs: this.state.ErrMgs,
          FulFilled: this.state.FulFilled,
          Deleted: this.state.Deleted,
          Paid: this.state.Paid,
          PaymentDate: this.state.PaymentDate,
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
      case "CustomerID":
        formErrors.CustomerID = CustomerIDRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "OrderNumber":
        formErrors.OrderNumber = OrderNumberRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "PaymentID":
        formErrors.PaymentID = PaymentIDRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "OrderDate":
        formErrors.OrderDate = OrderDateRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "ShipDate":
        formErrors.ShipDate = ShipDateRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "RequiredDate":
        formErrors.RequiredDate = RequiredDateRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "ShipperID":
        formErrors.ShipperID = ShipperIDRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "Freight":
        formErrors.Freight = FreightRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "SalesTax":
        formErrors.SalesTax = SalesTaxRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "TimeStamps":
        formErrors.TimeStamps = TimeStampsRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "TransactStatus":
        formErrors.TransactStatus = TransactStatusRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "ErrLoc":
        formErrors.ErrLoc = ErrLocRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "ErrMgs":
        formErrors.ErrMgs = ErrMgsRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "FulFilled":
        formErrors.FulFilled = FulFilledRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "Deleted":
        formErrors.Deleted = DeletedRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "Paid":
        formErrors.Paid = PaidRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "PaymentDate":
        formErrors.PaymentDate = PaymentDateRegex.test(value)
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
    const { CustomerID,
      OrderNumber,
      PaymentID,
      OrderDate,
      ShipDate,
      RequiredDate,
      ShipperID,
      Freight,
      SalesTax,
      TimeStamps,
      TransactStatus,
      ErrLoc,
      ErrMgs,
      FulFilled,
      Deleted,
      Paid,
      PaymentDate


    } = this.values;

    return (
      <div className="component-Create">
        <div className="container-scroller">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Order details</h4>
                <form onSubmit={this.handleSubmit} className="form-sample">
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Product ID
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.CustomerID.length > 0 ? "error" : null}
                            placeholder="CustomerID"
                            type="text"
                            name="CustomerID"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.CustomerID.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.CustomerID}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Order Number
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.OrderNumber.length > 0 ? "error" : null}
                            placeholder="OrderNumber"
                            type="text"
                            name="OrderNumber"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.OrderNumber.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.OrderNumber}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          PaymentID
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.PaymentID.length > 0 ? "error" : null}
                            placeholder="PaymentID"
                            type="text"
                            name="PaymentID"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.PaymentID.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.PaymentID}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          OrderDate
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.OrderDate.length > 0 ? "error" : null}
                            placeholder="OrderDate"
                            type="text"
                            name="OrderDate"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.OrderDate.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.OrderDate}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          ShipDate
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.ShipDate.length > 0 ? "error" : null}
                            placeholder="ShipDate"
                            type="text"
                            name="ShipDate"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.ShipDate.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.ShipDate}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          RequiredDate
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.RequiredDate.length > 0 ? "error" : null}
                            placeholder="RequiredDate"
                            type="text"
                            name="RequiredDate"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.RequiredDate.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.RequiredDate}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          ShipperID
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.ShipperID.length > 0 ? "error" : null}
                            placeholder="ShipperID"
                            type="text"
                            name="ShipperID"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.ShipperID.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.ShipperID}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Freight
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.Freight.length > 0 ? "error" : null}
                            placeholder="Freight"
                            type="text"
                            name="Freight"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.Freight.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.Freight}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          SalesTax
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.SalesTax.length > 0 ? "error" : null}
                            placeholder="SalesTax"
                            type="text"
                            name="SalesTax"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.SalesTax.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.SalesTax}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          TimeStamps
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.TimeStamps.length > 0 ? "error" : null}
                            placeholder="TimeStamps"
                            type="text"
                            name="TimeStamps"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.TimeStamps.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.TimeStamps}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Ship Date
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.TransactStatus.length > 0 ? "error" : null}
                            placeholder="TransactStatus"
                            type="text"
                            name="TransactStatus"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.TransactStatus.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.TransactStatus}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Err Loc
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.ErrLoc.length > 0 ? "error" : null}
                            placeholder="ErrLoc"
                            type="text"
                            name="ErrLoc"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.ErrLoc.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.ErrLoc}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          ErrMsg
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.ErrMgs.length > 0 ? "error" : null}
                            placeholder="ErrMgs"
                            type="text"
                            name="ErrMgs"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.ErrMgs.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.ErrMgs}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          FullFilled
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.FulFilled.length > 0 ? "error" : null}
                            placeholder="FulFilled"
                            type="text"
                            name="FulFilled"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.FulFilled.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.FulFilled}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Deleted
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.Deleted.length > 0 ? "error" : null}
                            placeholder="Deleted"
                            type="text"
                            name="Deleted"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.Deleted.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.Deleted}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Paid
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.Paid.length > 0 ? "error" : null}
                            placeholder="Paid"
                            type="text"
                            name="Paid"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.Paid.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.Paid}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Paid
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.Paid.length > 0 ? "error" : null}
                            placeholder="Paid"
                            type="text"
                            name="Paid"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.Paid.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.Paid}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          PaymentDate
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.PaymentDate.length > 0 ? "error" : null}
                            placeholder="PaymentDate"
                            type="text"
                            name="PaymentDate"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.PaymentDate.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.PaymentDate}</small></span>
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
