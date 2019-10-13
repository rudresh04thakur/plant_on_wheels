import React, { Component } from "react";
// import "../../Form.css";
import axios from "axios";
export default class Create extends Component {
  constructor(props) {
    super(props);
    this.values = {
      CompanyName: "",
      CompanyFName: "",
      CompanyLName: "",
      ContactTitle: "",
      SLocationID: "",
      PaymentMethods: "",
      DiscountType: "",
      TypeGoods: "",
      Notes: "",
      DiscountAvailable: "",
      CurrentOrder: "",
      Logo: "",
      CustomerID: "",
      SizeURL: "",
      access_token: "SfrjBV5d0tHbP9G7wx8Gq4NQM446ExdH"
    };
    this.state = {
      SelectedFile: "",
      api: "http://localhost:9000/Suppliers"
    };
  }

  handleForm = e => {
    e.preventDefault();
    const {
      CompanyName,
      CompanyFName,
      CompanyLName,
      ContactTitle,
      SLocationID,
      PaymentMethods,
      DiscountType,
      TypeGoods,
      Notes,
      DiscountAvailable,
      CurrentOrder,
      Logo,
      CustomerID,
      SizeURL,
      access_token
    } = this.values;

    console.log({
      CompanyName,
      CompanyFName,
      CompanyLName,
      ContactTitle,
      SLocationID,
      PaymentMethods,
      DiscountType,
      TypeGoods,
      Notes,
      DiscountAvailable,
      CurrentOrder,
      Logo,
      CustomerID,
      SizeURL,
      access_token
    });
    axios
      .post(this.state.api, {
        CompanyName,
        CompanyFName,
        CompanyLName,
        ContactTitle,
        SLocationID,
        PaymentMethods,
        DiscountType,
        TypeGoods,
        Notes,
        DiscountAvailable,
        CurrentOrder,
        Logo,
        CustomerID,
        SizeURL,
        access_token
      })
      .then(res => {
        console.log(res);
      });
  };

  onFileSelect = e => {
    this.setState({ SelectedFile: e.target.files[0] });
    console.log(e.target.files[0]);
  };

  Upload = () => {
    const fd = new FormData();
    fd.append("Picture", this.state.SelectedFile, this.state.SelectedFile.name);
    axios.post("/upload", fd).then(res => {
      console.log(res);
    });
  };

  onChange = e => {
    const values = this.values;
    values[e.target.name] = e.target.value;
    this.setState(values);
  };

  render() {
    const {
      CompanyName,
      CompanyFName,
      CompanyLName,
      ContactTitle,
      SLocationID,
      PaymentMethods,
      DiscountType,
      TypeGoods,
      Notes,
      DiscountAvailable,
      CurrentOrder,
      Logo,
      CustomerID,
      SizeURL
    } = this.values;
    return (
      <div className="component-Create">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Supplier</h4>
              <form onSubmit={this.handleForm} className="form-sample">
                <p className="card-description">Supplier</p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">
                        CompanyName
                      </label>
                      <div className="col-sm-9">
                        <input
                          name="CompanyName"
                          onChange={this.onChange}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">
                        CompanyFName
                      </label>
                      <div className="col-sm-9">
                        <input
                          name="CompanyFName"
                          onChange={this.onChange}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">
                        CompanyLName
                      </label>
                      <div className="col-sm-9">
                        <input
                          name="CompanyLName"
                          onChange={this.onChange}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">
                        ContactTitle
                      </label>
                      <div className="col-sm-9">
                        <input
                          name="ContactTitle"
                          onChange={this.onChange}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">
                        SLocationID
                      </label>
                      <div className="col-sm-9">
                        <input
                          name="SLocationID"
                          onChange={this.onChange}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">
                        PaymentMethods
                      </label>
                      <div className="col-sm-9">
                        <input
                          name="PaymentMethods"
                          onChange={this.onChange}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">
                        DiscountType
                      </label>
                      <div className="col-sm-9">
                        <input
                          name="DiscountType"
                          onChange={this.onChange}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">
                        TypeGoods
                      </label>
                      <div className="col-sm-9">
                        <input
                          name="TypeGoods"
                          onChange={this.onChange}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">
                        DiscountAvailable
                      </label>
                      <div className="col-sm-9">
                        <input
                          name="DiscountAvailable"
                          onChange={this.onChange}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">
                        CurrentOrder
                      </label>
                      <div className="col-sm-9">
                        <input
                          name="CurrentOrder"
                          onChange={this.onChange}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">Logo</label>
                      <div className="col-sm-9">
                        <input
                          name="Logo"
                          onChange={this.onChange}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">
                        CustomerID
                      </label>
                      <div className="col-sm-9">
                        <input
                          name="CustomerID"
                          onChange={this.onChange}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">SizeURL</label>
                      <div className="col-sm-9">
                        <input
                          name="SizeURL"
                          onChange={this.onChange}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">Note</label>
                      <div className="col-sm-9">
                        <input
                          name="Note"
                          onChange={this.onChange}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <button type="button" className="btn btn-success">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
