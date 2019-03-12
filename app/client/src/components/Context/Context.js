import React, { useState, useEffect } from 'react';

const OfferContext = React.createContext();

const OfferContextProvider = props => {
  const [offers, setOffers] = useState([]);
  const [filteredOffers, setFilteredOffers] = useState([]);
  const [singleOffer, setSingleOffer] = useState({});
  const [cart, setCart] = useState([]);

  let value = {
    offers,
    setOffers,
    updateOffers,
    filteredOffers,
    setFilteredOffers,
    singleOffer,
    setSingleOffer,
    getOfferById,
    setCart,
    cart
  };

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
    fetchOffers();
  }, []);

  useEffect(() => {
    if (singleOffer.inCart) {
      updateCart();
    }
  }, [singleOffer]);

  return (
    <OfferContext.Provider value={value}>
      {props.children}
    </OfferContext.Provider>
  );
};

let OfferContextConsumer = OfferContext.Consumer;

export { OfferContext, OfferContextProvider, OfferContextConsumer };
