import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Coins from "../Screens/Coins";
import Exchanges from "../Screens/Exchanges";
import Prices from "../Screens/Prices";

export default () => {
  return (
    <Router>
      <Header />
      <h2>
        <Route path="/prices" component={Prices} />
      </h2>
      <h2>
        <Route path="/exchanges" component={Exchanges} />
      </h2>
      <h2>
        <Route path="/coins" component={Coins} />
      </h2>
    </Router>
  );
};
