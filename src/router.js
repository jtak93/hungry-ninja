import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Menu from "./components/menu/Menu";
import Locations from "./components/locations/Locations";
import Order from "./components/order/Order";
import NotFound from "./components/NotFound";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/menu" component={Menu}/>
      <Route path="/locations" component={Locations}/>
      <Route path="/order" component={Order}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// export
export { router };
