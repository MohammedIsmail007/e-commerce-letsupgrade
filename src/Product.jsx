import React from "react";
import "./Product.css";
function Product(props) {
  return (
    <div>
      <img src={props.image} alt="monitorimage" />
      <p>{props.name}</p>
      <p>RS.{props.rupees}</p>
    </div>
  );
}

export default Product;