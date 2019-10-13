
import React, { Component } from "react";
import axios from "axios";

const SKURegex = RegExp(/^([a-zA-Z0-9 ]{1,20})$/);
const IDSKURegex = RegExp(/^([a-zA-Z0-9 ]{1,20})$/);
const VendorProductIDRegex = RegExp(/^([a-zA-Z0-9 ]{1,20})$/);
const ProductNameRegex = RegExp(/^([a-zA-Z0-9 ]{1,20})$/);
const ProductDescriptionRegex = RegExp(/^([a-zA-Z0-9 ]{1,20})$/);
const SupplierIDRegex = RegExp(/^([a-zA-Z0-9 ]{1,20})$/);
const CategoryIDRegex = RegExp(/^([a-zA-Z0-9 ]{1,20})$/);
const QuantityPerUnitRegex = RegExp(/^([a-zA-Z0-9 ]{1,20})$/);
const UnitPriceRegex = RegExp(/^([a-zA-Z0-9 ]{1,20})$/);
const MSRPRegex = RegExp(/^([a-zA-Z0-9 ]{1,20})$/);
const AvailableSizeRegex = RegExp(/^([a-zA-Z0-9 ]{1,20})$/);
const AvailableColorRegex = RegExp(/^([a-zA-Z0-9 ]{1,20})$/);
const SizeRegex = RegExp(/^([a-zA-Z0-9 ]{1,20})$/);
const ColorRegex = RegExp(/^([a-zA-Z0-9 ]{1,20})$/);
const DiscountRegex = RegExp(/^([a-zA-Z0-9 ]{1,20})$/);
const AvailableDiscountRegex = RegExp(/^([a-zA-Z0-9 ]{1,20})$/);
const UnitWeightRegex = RegExp(/^([a-zA-Z0-9 ]{1,20})$/);
const UnitsInStockRegex = RegExp(/^([a-zA-Z0-9 ]{1,20})$/);
const UnitsOnOrderRegex = RegExp(/^([a-zA-Z0-9 ]{1,20})$/);
const ReorderLevelRegex = RegExp(/^([a-zA-Z0-9 ]{1,20})$/);
const ProductAvailableRegex = RegExp(/^([a-zA-Z0-9 ]{1,20})$/);
const DiscountAvailableRegex = RegExp(/^([a-zA-Z0-9 ]{1,20})$/);
const CurrentOrderRegex = RegExp(/^([a-zA-Z0-9 ]{1,20})$/);
// const PictureRegex = RegExp(/^([a-zA-Z0-9 ]{1,20})$/);
const LinkingRegex = RegExp(/^([a-zA-Z0-9 ]{1,20})$/);
const NoteRegex = RegExp(/^([a-zA-Z0-9 ]{1,20})$/);

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
  componentDidMount() {
    axios.get("http://localhost:9000/Categories").then(res => {
      this.setState({ productCat: res.data.rows });
      console.log(this.state.productCat);
    });
  }

  constructor(props) {
    super(props);
    this.values = {
      SKU: "",
      IDSKU: "",
      VendorProductID: "",
      ProductName: "",
      ProductDescription: "",
      SupplierID: "",
      CategoryID: "",
      QuantityPerUnit: "",
      UnitPrice: "",
      MSRP: "",
      AvailableSize: "",
      AvailableColor: "",
      Size: "",
      Color: "",
      Discount: "",
      AvailableDiscount: "",
      UnitWeight: "",
      UnitsInStock: "",
      UnitsOnOrder: "",
      ReorderLevel: "",
      ProductAvailable: "",
      DiscountAvailable: "",
      CurrentOrder: "",
      Picture: "",
      Linking: "",
      Note: "",
      access_token: "SfrjBV5d0tHbP9G7wx8Gq4NQM446ExdH"
    };
    this.state = {
      api: "http://localhost:9000/Products",
      productCat: [],
      formErrors: {
        SKU: "",
        IDSKU: "",
        VendorProductID: "",
        ProductName: "",
        ProductDescription: "",
        SupplierID: "",
        CategoryID: "",
        QuantityPerUnit: "",
        UnitPrice: "",
        MSRP: "",
        AvailableSize: "",
        AvailableColor: "",
        Size: "",
        Color: "",
        Discount: "",
        AvailableDiscount: "",
        UnitWeight: "",
        UnitsInStock: "",
        UnitsOnOrder: "",
        ReorderLevel: "",
        ProductAvailable: "",
        DiscountAvailable: "",
        CurrentOrder: "",
        Picture: "",
        Linking: "",
        Note: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const {
      SKU,
      IDSKU,
      VendorProductID,
      ProductName,
      ProductDescription,
      SupplierID,
      CategoryID,
      QuantityPerUnit,
      UnitPrice,
      MSRP,
      AvailableSize,
      AvailableColor,
      Size,
      Color,
      Discount,
      AvailableDiscount,
      UnitWeight,
      UnitsInStock,
      UnitsOnOrder,
      ReorderLevel,
      ProductAvailable,
      DiscountAvailable,
      CurrentOrder,
      Picture,
      Linking,
      Note,
      access_token
    } = this.values;


    if (formValid(this.state)) {
      axios
        .post(this.state.api, {
          SKU: this.state.SKU,
          IDSKU: this.state.IDSKU,
          VendorProductID: this.state.VendorProductID,
          ProductName: this.state.ProductName,
          ProductDescription: this.state.ProductDescription,
          SupplierID: this.state.SupplierID,
          CategoryID: this.state.CategoryID,
          QuantityPerUnit: this.state.QuantityPerUnit,
          UnitPrice: this.state.UnitPrice,
          MSRP: this.state.MSRP,
          AvailableSize: this.state.AvailableSize,
          AvailableColor: this.state.AvailableColor,
          Size: this.state.Size,
          Color: this.state.Color,
          Discount: this.state.Discount,
          AvailableDiscount: this.state.AvailableDiscount,
          UnitWeight: this.state.UnitWeight,
          UnitsInStock: this.state.UnitsInStock,
          UnitsOnOrder: this.state.UnitsOnOrder,
          ReorderLevel: this.state.ReorderLevel,
          ProductAvailable: this.state.ProductAvailable,
          DiscountAvailable: this.state.DiscountAvailable,
          CurrentOrder: this.state.CurrentOrder,
          Picture: this.state.Picture,
          Linking: this.state.Linking,
          Note: this.state.Note,
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
  //   this.setState({ Picture: e.target.files[0] });
  //   console.log(e.target.files[0]);
  // };

  // Upload = () => {
  //   const fd = new FormData();
  //   fd.append("Picture", this.state.Picture, this.state.Picture.name);
  //   axios.post("/upload", fd).then(res => {
  //     console.log(res);
  //   });
  // };

  onFileSelect(e) {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      console.warn("img data", e.target.result);
      this.setState({ Picture: e.target.result });
      // this.setState = { Picture: e.target.result };
    }
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "SKU":
        formErrors.SKU = SKURegex.test(value)
          ? ""
          : "invalid SKU";
        break;
      case "IDSKU":
        formErrors.IDSKU = IDSKURegex.test(value)
          ? ""
          : "invalid IDSKU";
        break;
      case "VendorProductID":
        formErrors.VendorProductID = VendorProductIDRegex.test(value)
          ? ""
          : "invalid vendor product id";
        break;
      case "ProductName":
        formErrors.ProductName = ProductNameRegex.test(value)
          ? ""
          : "invalid product name";
        break;
      case "ProductDescription":
        formErrors.ProductDescription = ProductDescriptionRegex.test(value)
          ? ""
          : "invalid description";
        break;
      case "SupplierID":
        formErrors.SupplierID = SupplierIDRegex.test(value)
          ? ""
          : "invalid supplier id";
        break;
      case "CategoryID":
        formErrors.CategoryID = CategoryIDRegex.test(value)
          ? ""
          : "invalid supplier id";
        break;
      case "QuantityPerUnit":
        formErrors.QuantityPerUnit = QuantityPerUnitRegex.test(value)
          ? ""
          : "invalid quantity";
        break;
      case "UnitPrice":
        formErrors.UnitPrice = UnitPriceRegex.test(value)
          ? ""
          : "invalid unit price";
        break;
      case "MSRP":
        formErrors.MSRP = MSRPRegex.test(value)
          ? ""
          : "invalid msrp";
        break;
      case "AvailableSize":
        formErrors.AvailableSize = AvailableSizeRegex.test(value)
          ? ""
          : "invalid available size";
        break;
      case "AvailableColor":
        formErrors.AvailableColor = AvailableColorRegex.test(value)
          ? ""
          : "invalid color";
        break;
      case "Size":
        formErrors.Size = SizeRegex.test(value)
          ? ""
          : "invalid size";
        break;
      case "Color":
        formErrors.Color = ColorRegex.test(value)
          ? ""
          : "invalid size";
        break;
      case "Discount":
        formErrors.Discount = DiscountRegex.test(value)
          ? ""
          : "invalid discount";
        break;
      case "AvailableDiscount":
        formErrors.AvailableDiscount = AvailableDiscountRegex.test(value)
          ? ""
          : "invalid discount";
        break;
      case "UnitWeight":
        formErrors.UnitWeight = UnitWeightRegex.test(value)
          ? ""
          : "invalid unit weight";
        break;
      case "UnitsInStock":
        formErrors.UnitsInStock = UnitsInStockRegex.test(value)
          ? ""
          : "invalid unit in stock";
        break;
      case "UnitsOnOrder":
        formErrors.UnitsOnOrder = UnitsOnOrderRegex.test(value)
          ? ""
          : "invalid unit on order";
        break;
      case "ReorderLevel":
        formErrors.ReorderLevel = ReorderLevelRegex.test(value)
          ? ""
          : "invalid level";
        break;
      case "ProductAvailable":
        formErrors.ProductAvailable = ProductAvailableRegex.test(value)
          ? ""
          : "invalid availability";
        break;
      case "DiscountAvailable":
        formErrors.DiscountAvailable = DiscountAvailableRegex.test(value)
          ? ""
          : "invalid availability";
        break;
      case "CurrentOrder":
        formErrors.CurrentOrder = CurrentOrderRegex.test(value)
          ? ""
          : "invalid current order";
        break;
      // case "Picture":
      //   formErrors.Picture = PictureRegex.test(value)
      //     ? ""
      //     : "invalid picture";
      //   break;
      case "Linking":
        formErrors.Linking = LinkingRegex.test(value)
          ? ""
          : "invalid linking";
        break;
      case "Note":
        formErrors.Note = NoteRegex.test(value)
          ? ""
          : "invalid note";
        break;

      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;
    const {
      SKU,
      IDSKU,
      VendorProductID,
      ProductName,
      ProductDescription,
      SupplierID,
      CategoryID,
      QuantityPerUnit,
      UnitPrice,
      MSRP,
      AvailableSize,
      AvailableColor,
      Size,
      Color,
      Discount,
      AvailableDiscount,
      UnitWeight,
      UnitsInStock,
      UnitsOnOrder,
      ReorderLevel,
      ProductAvailable,
      DiscountAvailable,
      CurrentOrder,
      Picture,
      Linking,
      Note
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
                          SKU
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.SKU.length > 0 ? "error" : null}
                            placeholder="SKU"
                            type="text"
                            name="SKU"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.SKU.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.SKU}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
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
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Vendor Product ID
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.VendorProductID.length > 0 ? "error" : null}
                            placeholder="VendorProductID"
                            type="text"
                            name="VendorProductID"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.VendorProductID.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.VendorProductID}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Product Name
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.ProductName.length > 0 ? "error" : null}
                            placeholder="ProductName"
                            type="text"
                            name="ProductName"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.ProductName.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.ProductName}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Product Description
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.ProductDescription.length > 0 ? "error" : null}
                            placeholder="ProductDescription"
                            type="text"
                            name="ProductDescription"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.ProductDescription.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.ProductDescription}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Supplier ID
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.SupplierID.length > 0 ? "error" : null}
                            placeholder="SupplierID"
                            type="text"
                            name="SupplierID"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.SupplierID.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.SupplierID}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Category ID
                        </label>
                        <div className="col-sm-9">
                          <select
                            className={formErrors.CategoryID.length > 0 ? "error" : null}
                            name="CategoryID" noValidate
                            onChange={this.handleChange}
                            className="form-control"
                          >
                            {formErrors.CategoryID.length > 0 && (
                              <span className="errorMessage"><small>{formErrors.CategoryID}</small></span>
                            )}
                            {this.state.productCat.map(element => (
                              <option>{element.CategoryName}</option>
                            ))}
                          </select>
                          {/* <input
                            className={formErrors.CategoryID.length > 0 ? "error" : null}
                            placeholder="CategoryID"
                            type="text"
                            name="CategoryID"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.CategoryID.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.CategoryID}</small></span>
                          )} */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Quantity Per Unit
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.QuantityPerUnit.length > 0 ? "error" : null}
                            placeholder="QuantityPerUnit"
                            type="text"
                            name="QuantityPerUnit"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.QuantityPerUnit.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.QuantityPerUnit}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Unit Price
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.UnitPrice.length > 0 ? "error" : null}
                            placeholder="UnitPrice"
                            type="text"
                            name="UnitPrice"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.UnitPrice.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.UnitPrice}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          MSRP
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.MSRP.length > 0 ? "error" : null}
                            placeholder="MSRP"
                            type="text"
                            name="MSRP"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.MSRP.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.MSRP}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Available Size
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.AvailableSize.length > 0 ? "error" : null}
                            placeholder="AvailableSize"
                            type="text"
                            name="AvailableSize"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.AvailableSize.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.AvailableSize}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Available Color
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.AvailableColor.length > 0 ? "error" : null}
                            placeholder="AvailableColor"
                            type="text"
                            name="AvailableColor"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.AvailableColor.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.AvailableColor}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
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
                          Available Discount
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.AvailableDiscount.length > 0 ? "error" : null}
                            placeholder="AvailableDiscount"
                            type="text"
                            name="AvailableDiscount"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.AvailableDiscount.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.AvailableDiscount}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Unit Weight
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.UnitWeight.length > 0 ? "error" : null}
                            placeholder="UnitWeight"
                            type="text"
                            name="UnitWeight"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.UnitWeight.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.UnitWeight}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Units In Stock
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.UnitsInStock.length > 0 ? "error" : null}
                            placeholder="UnitsInStock"
                            type="text"
                            name="UnitsInStock"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.UnitsInStock.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.UnitsInStock}</small></span>
                          )}
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Units On Order
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.UnitsOnOrder.length > 0 ? "error" : null}
                            placeholder="UnitsOnOrder"
                            type="text"
                            name="UnitsOnOrder"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.UnitsOnOrder.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.UnitsOnOrder}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Reorder Level
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.ReorderLevel.length > 0 ? "error" : null}
                            placeholder="ReorderLevel"
                            type="text"
                            name="ReorderLevel"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.ReorderLevel.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.ReorderLevel}</small></span>
                          )}
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Product Available
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.ProductAvailable.length > 0 ? "error" : null}
                            placeholder="ProductAvailable"
                            type="text"
                            name="ProductAvailable"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.ProductAvailable.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.ProductAvailable}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Discount Available
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.DiscountAvailable.length > 0 ? "error" : null}
                            placeholder="DiscountAvailable"
                            type="text"
                            name="DiscountAvailable"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.DiscountAvailable.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.DiscountAvailable}</small></span>
                          )}
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Current Order
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.CurrentOrder.length > 0 ? "error" : null}
                            placeholder="CurrentOrder"
                            type="text"
                            name="CurrentOrder"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.CurrentOrder.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.CurrentOrder}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Picture
                        </label>
                        <div className="col-sm-9">

                          <input
                            className="file"
                            onChange={(e) => this.onFileSelect(e)}
                            type="file"
                            name="file"
                            className="form-control"
                          />

                          {/* <input
                            className={formErrors.Picture.length > 0 ? "error" : null}
                            placeholder="Picture"
                            type="text"
                            name="Picture"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.Picture.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.Picture}</small></span>
                          )} */}
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Linking
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.Linking.length > 0 ? "error" : null}
                            placeholder="Linking"
                            type="text"
                            name="Linking"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.Linking.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.Linking}</small></span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Note
                        </label>
                        <div className="col-sm-9">
                          <input
                            className={formErrors.Note.length > 0 ? "error" : null}
                            placeholder="Note"
                            type="text"
                            name="Note"
                            noValidate
                            onChange={this.handleChange}
                          />
                          {formErrors.Note.length > 0 && (
                            <span className="errorMessage"><small>{formErrors.Note}</small></span>
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




// import React, { Component } from "react";
// // import "../../Form.css";
// import axios from "axios";

// export default class Create extends Component {
//   componentDidMount() {
//     axios.get("http://localhost:9000/Categories").then(res => {
//       this.setState({ productCat: res.data.rows });
//       console.log(this.state.productCat);
//     });
//   }
//   constructor(props) {
//     super(props);
//     this.values = {
//       SKU: "",
//       IDSKU: "",
//       VendorProductID: "",
//       ProductName: "",
//       ProductDescription: "",
//       SupplierID: "",
//       CategoryID: "",
//       QuantityPerUnit: "",
//       UnitPrice: "",
//       MSRP: "",
//       AvailableSize: "",
//       AvailableColor: "",
//       Size: "",
//       Color: "",
//       Discount: "",
//       AvailableDiscount: "",
//       UnitWeight: "",
//       UnitsInStock: "",
//       UnitsOnOrder: "",
//       ReorderLevel: "",
//       ProductAvailable: "",
//       DiscountAvailable: "",
//       CurrentOrder: "",
//       Picture: "",
//       Linking: "",
//       Note: "",
//       access_token: "SfrjBV5d0tHbP9G7wx8Gq4NQM446ExdH"
//     };
//     this.state = {
//       SelectedFile: "",
//       api: "http://localhost:9000/Products",
//       productCat: []
//     };
//   }

//   handleForm = e => {
//     e.preventDefault();
//     const {
//       SKU,
//       IDSKU,
//       VendorProductID,
//       ProductName,
//       ProductDescription,
//       SupplierID,
//       CategoryID,
//       QuantityPerUnit,
//       UnitPrice,
//       MSRP,
//       AvailableSize,
//       AvailableColor,
//       Size,
//       Color,
//       Discount,
//       AvailableDiscount,
//       UnitWeight,
//       UnitsInStock,
//       UnitsOnOrder,
//       ReorderLevel,
//       ProductAvailable,
//       DiscountAvailable,
//       CurrentOrder,
//       Picture,
//       Linking,
//       Note,
//       access_token
//     } = this.values;

//     axios
//       .post(this.state.api, {
//         SKU,
//         IDSKU,
//         VendorProductID,
//         ProductName,
//         ProductDescription,
//         SupplierID,
//         CategoryID,
//         QuantityPerUnit,
//         UnitPrice,
//         MSRP,
//         AvailableSize,
//         AvailableColor,
//         Size,
//         Color,
//         Discount,
//         AvailableDiscount,
//         UnitWeight,
//         UnitsInStock,
//         UnitsOnOrder,
//         ReorderLevel,
//         ProductAvailable,
//         DiscountAvailable,
//         CurrentOrder,
//         Picture,
//         Linking,
//         Note,
//         access_token
//       })
//       .then(res => {
//         console.log(res);
//       });
//   };

//   onFileSelect = e => {
//     this.setState({ SelectedFile: e.target.files[0] });
//     console.log(e.target.files[0]);
//   };

//   Upload = () => {
//     const fd = new FormData();
//     fd.append("Picture", this.state.SelectedFile, this.state.SelectedFile.name);
//     axios.post("/upload", fd).then(res => {
//       console.log(res);
//     });
//   };

//   onChange = e => {
//     const values = this.values;
//     values[e.target.name] = e.target.value;
//     this.setState(values);
//   };

//   render() {
//     const {
//       SKU,
//       IDSKU,
//       VendorProductID,
//       ProductName,
//       ProductDescription,
//       SupplierID,
//       CategoryID,
//       QuantityPerUnit,
//       UnitPrice,
//       MSRP,
//       AvailableSize,
//       AvailableColor,
//       Size,
//       Color,
//       Discount,
//       AvailableDiscount,
//       UnitWeight,
//       UnitsInStock,
//       UnitsOnOrder,
//       ReorderLevel,
//       ProductAvailable,
//       DiscountAvailable,
//       CurrentOrder,
//       Picture,
//       Linking,
//       Note
//     } = this.values;
//     return (
//       <div className="component-Create">
//         <div className="col-12 grid-margin">
//           <div className="card">
//             <div className="card-body">
//               <h4 className="card-title">Products</h4>
//               <form onSubmit={this.handleForm} className="form-sample">
//                 <hr />
//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="form-group row">
//                       <label className="col-sm-3 col-form-label">SKU</label>
//                       <div className="col-sm-9">
//                         <input
//                           name="SKU"
//                           onChange={this.onChange}
//                           type="text"
//                           className="form-control"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="form-group row">
//                       <label className="col-sm-3 col-form-label"> IDSKU</label>
//                       <div className="col-sm-9">
//                         <input
//                           name="IDSKU"
//                           onChange={this.onChange}
//                           type="text"
//                           className="form-control"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="form-group row">
//                       <label className="col-sm-3 col-form-label">
//                         VendorProductID
//                       </label>
//                       <div className="col-sm-9">
//                         <input
//                           name="VendorProductID"
//                           onChange={this.onChange}
//                           type="text"
//                           className="form-control"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="form-group row">
//                       <label className="col-sm-3 col-form-label">
//                         ProductName
//                       </label>
//                       <div className="col-sm-9">
//                         <input
//                           name="ProductName"
//                           onChange={this.onChange}
//                           type="text"
//                           className="form-control"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="form-group row">
//                       <label className="col-sm-3 col-form-label">
//                         ProductDescription
//                       </label>
//                       <div className="col-sm-9">
//                         <input
//                           name="ProductDescription"
//                           onChange={this.onChange}
//                           type="text"
//                           className="form-control"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="form-group row">
//                       <label className="col-sm-3 col-form-label">
//                         SupplierID
//                       </label>
//                       <div className="col-sm-9">
//                         <input
//                           name="SupplierID"
//                           onChange={this.onChange}
//                           type="text"
//                           className="form-control"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="form-group row">
//                       <label className="col-sm-3 col-form-label">
//                         Category
//                       </label>
//                       <div className="col-sm-9">
//                         <select
//                           name="CategoryID"
//                           onChange={this.onChange}
//                           className="form-control"
//                         >
//                           {this.state.productCat.map(element => (
//                             <option>{element.CategoryName}</option>
//                           ))}
//                         </select>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="form-group row">
//                       <label className="col-sm-3 col-form-label">
//                         QuantityPerUnit
//                       </label>
//                       <div className="col-sm-9">
//                         <input
//                           name="QuantityPerUnit"
//                           onChange={this.onChange}
//                           type="text"
//                           className="form-control"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="form-group row">
//                       <label className="col-sm-3 col-form-label">
//                         UnitPrice
//                       </label>
//                       <div className="col-sm-9">
//                         <input
//                           name="UnitPrice"
//                           onChange={this.onChange}
//                           type="text"
//                           className="form-control"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="form-group row">
//                       <label className="col-sm-3 col-form-label">MSRP</label>
//                       <div className="col-sm-9">
//                         <input
//                           name="MSRP"
//                           onChange={this.onChange}
//                           type="text"
//                           className="form-control"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="form-group row">
//                       <label className="col-sm-3 col-form-label">
//                         AvailableSize
//                       </label>
//                       <div className="col-sm-9">
//                         <input
//                           name="AvailableSize"
//                           onChange={this.onChange}
//                           type="text"
//                           className="form-control"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="form-group row">
//                       <label className="col-sm-3 col-form-label">
//                         AvailableColor
//                       </label>
//                       <div className="col-sm-9">
//                         <input
//                           name="AvailableColor"
//                           onChange={this.onChange}
//                           type="text"
//                           className="form-control"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="form-group row">
//                       <label className="col-sm-3 col-form-label">Size</label>
//                       <div className="col-sm-9">
//                         <input
//                           name="Size"
//                           onChange={this.onChange}
//                           type="text"
//                           className="form-control"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="form-group row">
//                       <label className="col-sm-3 col-form-label">Color</label>
//                       <div className="col-sm-9">
//                         <input
//                           name="Color"
//                           onChange={this.onChange}
//                           type="text"
//                           className="form-control"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="form-group row">
//                       <label className="col-sm-3 col-form-label">
//                         Discount
//                       </label>
//                       <div className="col-sm-9">
//                         <input
//                           name="Discount"
//                           onChange={this.onChange}
//                           type="text"
//                           className="form-control"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="form-group row">
//                       <label className="col-sm-3 col-form-label">
//                         AvailableDiscount
//                       </label>
//                       <div className="col-sm-9">
//                         <input
//                           name="AvailableDiscount"
//                           onChange={this.onChange}
//                           type="text"
//                           className="form-control"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="form-group row">
//                       <label className="col-sm-3 col-form-label">
//                         UnitWeight
//                       </label>
//                       <div className="col-sm-9">
//                         <input
//                           name="UnitWeight"
//                           onChange={this.onChange}
//                           type="text"
//                           className="form-control"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="form-group row">
//                       <label className="col-sm-3 col-form-label">
//                         UnitsInStock
//                       </label>
//                       <div className="col-sm-9">
//                         <input
//                           name="UnitsInStock"
//                           onChange={this.onChange}
//                           type="text"
//                           className="form-control"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="form-group row">
//                       <label className="col-sm-3 col-form-label">
//                         UnitsOnOrder
//                       </label>
//                       <div className="col-sm-9">
//                         <input
//                           name="UnitsOnOrder"
//                           onChange={this.onChange}
//                           type="text"
//                           className="form-control"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="form-group row">
//                       <label className="col-sm-3 col-form-label">
//                         ReorderLevel
//                       </label>
//                       <div className="col-sm-9">
//                         <input
//                           name="ReorderLevel"
//                           onChange={this.onChange}
//                           type="text"
//                           className="form-control"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="form-group row">
//                       <label className="col-sm-3 col-form-label">
//                         ProductAvailable
//                       </label>
//                       <div className="col-sm-9">
//                         <input
//                           name="ProductAvailable"
//                           onChange={this.onChange}
//                           type="text"
//                           className="form-control"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="form-group row">
//                       <label className="col-sm-3 col-form-label">
//                         DiscountAvailable
//                       </label>
//                       <div className="col-sm-9">
//                         <input
//                           name="DiscountAvailable"
//                           onChange={this.onChange}
//                           type="text"
//                           className="form-control"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="form-group row">
//                       <label className="col-sm-3 col-form-label">
//                         CurrentOrder
//                       </label>
//                       <div className="col-sm-9">
//                         <input
//                           name="CurrentOrder"
//                           onChange={this.onChange}
//                           type="text"
//                           className="form-control"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="form-group row">
//                       <label className="col-sm-3 col-form-label">Picture</label>
//                       <div className="col-sm-9">
//                         <input
//                           name="Picture"
//                           onChange={this.onChange}
//                           type="text"
//                           className="form-control"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="form-group row">
//                       <label className="col-sm-3 col-form-label">Linking</label>
//                       <div className="col-sm-9">
//                         <input
//                           name="Linking"
//                           onChange={this.onChange}
//                           type="text"
//                           className="form-control"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="form-group row">
//                       <label className="col-sm-3 col-form-label">Note</label>
//                       <div className="col-sm-9">
//                         <input
//                           name="Note"
//                           onChange={this.onChange}
//                           type="text"
//                           className="form-control"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div>
//                   <button type="submit" className="btn btn-success">
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }















