import React, { Fragment } from 'react';
import Navbar from './Navbar/Navbar';
import OfferList from './OfferList/OfferList';
import Cart from './Cart/Cart';
import Details from './Details/Details';

function App() {
  return (
    <Fragment>
      <Navbar />
      <OfferList />
    </Fragment>
  );
}

export default App;
