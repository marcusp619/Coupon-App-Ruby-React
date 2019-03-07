import React, { useState, useEffect } from "react";

const OfferContext = React.createContext();
//Provider -- provides all the information
//Consumer -- i think usecontext comes in here

const OfferContextProvider = props => {
  const [offers, setOffers] = useState([]);

  let value = { offers };

  const fetchOffers = async () => {
    const response = await fetch("http://localhost:3000/home");
    const result = await response.json();

    setOffers(result);
  };

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
