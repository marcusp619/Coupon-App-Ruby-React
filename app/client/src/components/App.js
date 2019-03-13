import React, { Fragment, useState, useEffect } from 'react';
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
  const [offers, setOffers] = useState([]);
  const [filteredOffers, setFilteredOffers] = useState([]);

  async function fetchOffers() {
    const response = await fetch('http://localhost:3000/home');
    const rawResults = await response.json();
    const result = rawResults.map(data => {
      return { ...data, inCart: false };
    });

    setOffers(result);
  }

  useEffect(() => {
    fetchOffers();
  }, []);

  return (
    <Fragment>
      <Navbar offers={offers} setFilteredOffers={setFilteredOffers} />
      <Router>
        <OfferList offers={offers} filteredOffers={filteredOffers} path="/" />
        <Details path="/details/:id" />
        <Cart path="/cart" />
        <Default default />
      </Router>
    </Fragment>
  );
}

export default App;
