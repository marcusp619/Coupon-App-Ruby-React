import React, { useState, useEffect, useContext } from "react";
import { OfferContext } from "../Context/Context";
import { Link } from "@reach/router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Details(props) {
  const [loading, setLoading] = useState(true);
  const { getOfferById } = useContext(OfferContext);
  const singleItem = getOfferById(props.id);

  return (
    <div>
      {singleItem ? <h1>{singleItem.name}</h1> : <div>Loading....</div>}
    </div>
  );
}

export default Details;
