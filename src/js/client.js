// Library
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
// Layouts
import App from "./layouts";
// Components
import Category from "./components/Category";
import Item from "./components/Item";
import Home from "./components/Home";

const app = document.getElementById("root");

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/category/:categoryId" component={Category} />
      <Route path="/category/:categoryId/item/:itemId" component={Item} />
    </Route>
  </Router>
), app);
