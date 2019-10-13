import React, { Component } from "react";
// import "../../Form.css";
import axios from "axios";


const ProductIDRegex = RegExp(/^([a-zA-Z0-9 ]{2,10})$/);
const OrderNumberRegex = RegExp(/^([a-zA-Z0-9]{2,10})$/);
const PriceRegex = RegExp(/^([a-zA-Z0-9]{2,10})$/);
const QuantityRegex = RegExp(/^([a-zA-Z0-9]{2,10})$/);
const DiscountRegex = RegExp(/^([a-zA-Z0-9]{2,10})$/);
const TotalRegex = RegExp(/^([a-zA-Z0-9]{2,10})$/);
const IDSKURegex = RegExp(/^([a-zA-Z0-9]{2,10})$/);
const SizeRegex = RegExp(/^([a-zA-Z0-9]{2,10})$/);
const ColorRegex = RegExp(/^([a-zA-Z0-9]{2,10})$/);
const FulFilledRegex = RegExp(/^([a-zA-Z0-9]{2,10})$/);
const ShipDateRegex = RegExp(/^([a-zA-Z0-9]{2,10})$/);
const OrderDetailIDRegex = RegExp(/^([a-zA-Z0-9]{2,10})$/);
const BillDateRegex = RegExp(/^([a-zA-Z0-9]{2,10})$/);


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
      ProductID: "",
      OrderNumber: "",
      Price: "",
      Quantity: "",
      Discount: "",
      Total: "",
      IDSKU: "",
      Size: "",
      Color: "",
      FulFilled: "",
      ShipDate: "",
      OrderDetailID: "",
      BillDate: "",
      access_token: "SfrjBV5d0tHbP9G7wx8Gq4NQM446ExdH"
    };
    this.state = {
      api: "http://localhost:9000/OrderDetails",

      formErrors: {
        ProductID: "",
        OrderNumber: "",
        Price: "",
        Quantity: "",
        Discount: "",
        Total: "",
        IDSKU: "",
        Size: "",
        Color: "",
        FulFilled: "",
        ShipDate: "",
        OrderDetailID: "",
        BillDate: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const {
            ProductID,
      OrderNumber,
      Price,
      Quantity,
      Discount,
      Total,
      IDSKU,
      Size,
      Color,
      FulFilled,
      ShipDate,
      OrderDetailID,
      BillDate,
      access_token
    } = this.values;


    if (formValid(this.state)) {
      axios
        .post(this.state.api, {
          ProductID: this.state.ProductID,
          OrderNumber: this.state.OrderNumber,
          Price: this.state.Price,
          Quantity: this.state.Quantity,
          Discount: this.state.Discount,
          Total: this.state.Total,
          IDSKU: this.state.IDSKU,
          Size: this.state.Size,
          Color: this.state.Color,
          FulFilled: this.state.FulFilled,
          ShipDate: this.state.ShipDate,
          OrderDetailID: this.state.OrderDetailID,
          BillDate: this.state.BillDate,
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
      case "ProductID":
        formErrors.ProductID = ProductIDRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "OrderNumber":
        formErrors.OrderNumber = OrderNumberRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "Price":
        formErrors.Price = PriceRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "Quantity":
        formErrors.Quantity = QuantityRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "Discount":
        formErrors.Discount = DiscountRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "Total":
        formErrors.Total = TotalRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "IDSKU":
        formErrors.IDSKU = IDSKURegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "Size":
        formErrors.Size = SizeRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "Color":
        formErrors.Color = ColorRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "FulFilled":
        formErrors.FulFilled = FulFilledRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "ShipDate":
        formErrors.ShipDate = ShipDateRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "OrderDetailID":
        formErrors.OrderDetailID = OrderDetailIDRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "BillDate":
        formErrors.BillDate = BillDateRegex.test(value)
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
    const { ProductID,
      OrderNumber,
      Price,
      Quantity,
      Discount,
      Total,
      IDSKU,
      Size,
      Color,
      FulFilled,
      ShipDate,
      OrderDetailID,
      BillDate


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
                            className={formErrors.ProductID.length > 0 ? "error" : null}
                            placeholder="ProductID"
                            type="text"
                            name="ProductID"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.ProductID.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.ProductID}</small></span>
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
                          Price
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.Price.length > 0 ? "error" : null}
                            placeholder="Price"
                            type="text"
                            name="Price"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.Price.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.Price}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Quantity
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.Quantity.length > 0 ? "error" : null}
                            placeholder="Quantity"
                            type="text"
                            name="Quantity"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.Quantity.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.Quantity}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Discount
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.Discount.length > 0 ? "error" : null}
                            placeholder="Discount"
                            type="text"
                            name="Discount"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.Discount.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.Discount}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Total
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.Total.length > 0 ? "error" : null}
                            placeholder="Total"
                            type="text"
                            name="Total"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.Total.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.Total}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          IDSKU
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.IDSKU.length > 0 ? "error" : null}
                            placeholder="IDSKU"
                            type="text"
                            name="IDSKU"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.IDSKU.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.IDSKU}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Size
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.Size.length > 0 ? "error" : null}
                            placeholder="Size"
                            type="text"
                            name="Size"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.Size.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.Size}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Color
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.Color.length > 0 ? "error" : null}
                            placeholder="Color"
                            type="text"
                            name="Color"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.Color.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.Color}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Ful-Filled
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
                          Ship Date
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
                          Order Detail ID
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.OrderDetailID.length > 0 ? "error" : null}
                            placeholder="OrderDetailID"
                            type="text"
                            name="OrderDetailID"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.OrderDetailID.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.OrderDetailID}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Bill Date
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.BillDate.length > 0 ? "error" : null}
                            placeholder="BillDate"
                            type="text"
                            name="BillDate"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.BillDate.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.BillDate}</small></span>
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
