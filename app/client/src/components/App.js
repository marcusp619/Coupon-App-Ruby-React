import React, { Fragment, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import OfferList from "./OfferList/OfferList";
import Cart from "./Cart/Cart";
import Details from "./Details/Details";
import Default from "./Default/Default";
import { Router } from "@reach/router";
function App() {
  return (
    <Fragment>
      <Navbar />
      <Router>
        <OfferList path="/" />
        <Details path="/details" />
        <Cart path="/cart" />
        <Default default />
      </Router>
    </Fragment>
  );
}

export default App;
