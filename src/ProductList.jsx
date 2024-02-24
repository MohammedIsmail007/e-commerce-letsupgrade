import React from "react";
import Product from "./Product";

import clock from "./img/clock.jpg";

// import showpiece from "./img/showpieces.jpg";
// import walldecor from "./img/walldecors.jpg";

import "./ProductList.css";
function onClick() {
  alert("You are clicking button");
}
function ProductList() {
  let products = [
    { id: 1, name: "MONITOR", rupees: "5000" },
    { id: 2, name: "Printer", rupees: "5000" },
    { id: 3, name: "PROJECTOR", rupees: "2500" },
  ];
  return (
    <div>
      <h1 className="title">Electric Appliance</h1>
      <div className="productdetail">
        {products.map((productItem) => {
          return (
            <Product
              name={productItem.name}
              rupees={productItem.rupees}
              key={products.id}
            />
          );
        })}
      </div>

      <h1 className="title">Home Decors</h1>
      <div className="productdetail">
        <Product image={clock} name="CLOCK" rupees="1500" />
        <Product image={clock} name="CLOCK 1" rupees="2500" />
        <Product image={clock} name="CLOCK 2" rupees="1000" />
      </div>
      <button onClick={onClick}> CLICK ME </button>
    </div>
  );
}

export default ProductList;
