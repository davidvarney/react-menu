import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

// Layouts
import App from "./layouts/App";
// Components
import Order from "./components/order";
import Menu from "./components/menu";

const app = document.getElementById("root");

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Order} />
      <Route path="/menu" component={Menu} />
    </Route>
  </Router>
), app);
