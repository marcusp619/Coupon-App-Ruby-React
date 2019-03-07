import React, { useState, useEffect } from "react";

const OfferContext = React.createContext();

const OfferContextProvider = props => {
  const [offers, setOffers] = useState([]);

  let value = { offers, handleOffer, addToCart };

  const fetchOffers = async () => {
    const response = await fetch("http://localhost:3000/home");
    const rawResults = await response.json();
    const result = rawResults.map(data => {
      return { ...data, inCart: false };
    });

    setOffers(result);
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  function handleOffer() {
    console.log("hello from handle offer");
  }

  function addToCart() {
    console.log("hello from add to cart");
  }

  return (
    <OfferContext.Provider value={value}>
      {props.children}
    </OfferContext.Provider>
  );
};

let OfferContextConsumer = OfferContext.Consumer;

export { OfferContext, OfferContextProvider, OfferContextConsumer };
