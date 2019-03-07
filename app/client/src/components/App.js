import React, { Fragment, useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import OfferList from './OfferList/OfferList';
import Cart from './Cart/Cart';
import Details from './Details/Details';
import Default from './Default/Default';

function App() {
  return (
    <Fragment>
      <Navbar />
      <OfferList />
      <Details />
      <Cart />
      <Default />
    </Fragment>
  );
}

export default App;
