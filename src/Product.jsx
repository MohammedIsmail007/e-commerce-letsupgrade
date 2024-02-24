import React from "react";
import "./Product.css";
// import printer from "./img/printer.jpg";
// import monitor from "./img/monitor.jpg";
// import projector from "./img/projector.jpg";
function Product(props) {
  return (
    <div className="product">
      <img src={props.image} alt="image" />
      <p>{props.name}</p>
      <p>RS.{props.rupees}</p>
    </div>
  );
}

export default Product;
