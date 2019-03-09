import React, { useState, useEffect } from "react";

const OfferContext = React.createContext();

const OfferContextProvider = props => {
  const [offers, setOffers] = useState([]);
  const [singleOffer, setSingleOffer] = useState({});
  const [cart, setCart] = useState([]);

  let value = {
    offers,
    setOffers,
    singleOffer,
    setSingleOffer,
    getOfferById,
    handleOffer,
    setCart,
    cart
  };

  function handleOffer() {
    console.log("hello from handle offer");
  }

  async function fetchOffers() {
    const response = await fetch("http://localhost:3000/home");
    const rawResults = await response.json();
    const result = rawResults.map(data => {
      return { ...data, inCart: false };
    });

    setOffers(result);
  }

  useEffect(() => {
    fetchOffers();
  }, []);

  function getOfferById(id) {
    const foundOffer = offers.find(offer => offer.id === parseInt(id));

    setSingleOffer(foundOffer);
  }

  return (
    <OfferContext.Provider value={value}>
      {props.children}
    </OfferContext.Provider>
  );
};

let OfferContextConsumer = OfferContext.Consumer;

export { OfferContext, OfferContextProvider, OfferContextConsumer };
