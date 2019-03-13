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
  const [singleOffer, setSingleOffer] = useState({});
  const [cart, setCart] = useState([]);

  async function fetchOffers() {
    const response = await fetch('http://localhost:3000/home');
    const rawResults = await response.json();
    const result = rawResults.map(data => {
      return { ...data, inCart: false };
    });

    setOffers(result);
  }

  function getOfferById(id) {
    const foundOffer = offers.find(offer => offer.id === parseInt(id));

    setSingleOffer(foundOffer);
  }

  function updateOffers() {
    let tempOffer = { ...singleOffer, inCart: false };
    console.log(tempOffer);
    let newOffers = offers.map(offer =>
      offer.id === tempOffer.id ? singleOffer : offer
    );

    setOffers(newOffers);
  }

  function updateCart() {
    setCart(prevCart => {
      return [singleOffer, ...prevCart];
    });
  }

  useEffect(() => {
    if (singleOffer.inCart) {
      updateCart();
    }
  }, [singleOffer]);

  useEffect(() => {
    updateOffers();
  }, [singleOffer]);

  useEffect(() => {
    fetchOffers();
  }, []);

  return (
    <Fragment>
      <Navbar
        offers={offers}
        setFilteredOffers={setFilteredOffers}
        cart={cart}
      />
      <Router>
        <OfferList
          offers={offers}
          filteredOffers={filteredOffers}
          setFilteredOffers={setFilteredOffers}
          getOfferById={getOfferById}
          singleOffer={singleOffer}
          setSingleOffer={setSingleOffer}
          updateOffers={updateOffers}
          path="/"
        />
        <Details path="/details/:id" />
        <Cart cart={cart} path="/cart" />
        <Default default />
      </Router>
    </Fragment>
  );
}

export default App;
