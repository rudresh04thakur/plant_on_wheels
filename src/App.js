import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import $ from "jquery";

import Root from "./components/root/Root";
import Admin from "./components/admin/Admin";
import Notfound from "./components/notfound/Notfound";
import AdminPayments from "./components/admin/admin-component/admin-payments/AdminPayments"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path={"/admin"} component={Admin} />
            <Route path={"/"} component={Root} />
            <Route path={"*"} component={Notfound} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
