import React from "react";
import { OfferContextConsumer } from "../Context/Context";
import { Link } from "@reach/router";
function Details() {
  return <OfferContextConsumer />;
}

export default Details;
