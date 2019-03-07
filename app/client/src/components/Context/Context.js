import React, { useState, useEffect } from "react";

const OfferContext = React.createContext();
//Provider -- provides all the information
//Consumer -- i think usecontext comes in here

const OfferContextProvider = props => {
  const [offers, setOffers] = useState([]);

  let value = { offers, handleOffer, addToCart };

  const fetchOffers = async () => {
    const response = await fetch("http://localhost:3000/home");
    const result = await response.json();

    setOffers(result);
  };

  function handleOffer() {
    console.log("hello from handle offer");
  }

  function addToCart() {
    console.log("hello from add to cart");
  }

  useEffect(() => {
    fetchOffers();
  }, []);

  return (
    <OfferContext.Provider value={value}>
      {props.children}
    </OfferContext.Provider>
  );
};

let OfferContextConsumer = OfferContext.Consumer;

export { OfferContext, OfferContextProvider, OfferContextConsumer };
