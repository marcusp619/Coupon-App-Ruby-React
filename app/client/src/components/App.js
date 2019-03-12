import React, { Fragment } from 'react';
import Navbar from './Navbar/Navbar';
import OfferList from './OfferList/OfferList';
import Cart from './Cart/Cart';
import Details from './Details/Details';
import Default from './Default/Default';
import { Router } from '@reach/router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingCart);

function App() {
  return (
    <Fragment>
      <Navbar />
      <Router>
        <OfferList path="/" />
        <Details path="/details/:id" />
        <Cart path="/cart" />
        <Default default />
      </Router>
    </Fragment>
  );
}

export default App;
