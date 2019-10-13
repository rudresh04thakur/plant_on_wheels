import React, { Component } from "react";
// import "../../Form.css";
import axios from "axios";
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
      Fax: "",
      Email: "",
      URL: "",
      access_token: "SfrjBV5d0tHbP9G7wx8Gq4NQM446ExdH"
    };
    this.state = {
      SelectedFile: "",
      api: "http://localhost:9000/SLocations"
    };
  }

  handleForm = e => {
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
      Fax,
      Email,
      URL,
      access_token
    } = this.values;

    console.log({
      Room_Flat,
      Building,
      Address1,
      Address2,
      City,
      State,
      PostalCode,
      Country,
      Phone,
      Fax,
      Email,
      URL,
      access_token
    });
    axios
      .post(this.state.api, {
        Room_Flat,
        Building,
        Address1,
        Address2,
        City,
        State,
        PostalCode,
        Country,
        Phone,
        Fax,
        Email,
        URL,
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
      Room_Flat,
      Building,
      Address1,
      Address2,
      City,
      State,
      PostalCode,
      Country,
      Phone,
      Fax,
      Email,
      URL
    } = this.values;
    return (
      <div className="component-Create">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">SLocation</h4>
              <form onSubmit={this.handleForm} className="form-sample">
                <p className="card-description">SLocation</p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">
                        Room/Flat
                      </label>
                      <div className="col-sm-9">
                        <input
                          name="Room_Flat"
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
                        Building
                      </label>
                      <div className="col-sm-9">
                        <input
                          name="Building"
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
                        Address1
                      </label>
                      <div className="col-sm-9">
                        <input
                          name="Address1"
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
                        Address2
                      </label>
                      <div className="col-sm-9">
                        <input
                          name="Address2"
                          onChange={this.onChange}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">City</label>
                      <div className="col-sm-9">
                        <input
                          name="City"
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
                      <label className="col-sm-3 col-form-label">State</label>
                      <div className="col-sm-9">
                        <input
                          name="State"
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
                        PostalCode
                      </label>
                      <div className="col-sm-9">
                        <input
                          name="PostalCode"
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
                      <label className="col-sm-3 col-form-label">Country</label>
                      <div className="col-sm-9">
                        <input
                          name="Country"
                          onChange={this.onChange}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">Phone</label>
                      <div className="col-sm-9">
                        <input
                          name="Phone"
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
                      <label className="col-sm-3 col-form-label">Fax</label>
                      <div className="col-sm-9">
                        <input
                          name="Fax"
                          onChange={this.onChange}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">Email</label>
                      <div className="col-sm-9">
                        <input
                          name="Email"
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
                      <label className="col-sm-3 col-form-label">URL</label>
                      <div className="col-sm-9">
                        <input
                          name="URL"
                          onChange={this.onChange}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
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
                  <div>
                    <button
                      type="button pull-right"
                      className="btn btn-success"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
