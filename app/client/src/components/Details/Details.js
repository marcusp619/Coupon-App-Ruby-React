import React, { useState, useEffec } from "react";
import { OfferContextConsumer } from "../Context/Context";
import { Link } from "@reach/router";

function Details(props) {
  const [loading, isLoading] = useState(true);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      {/* {offers => {
        console.log(offers);
      }} */}
      {console.log(props)}
    </div>
  );
}

export default Details;
