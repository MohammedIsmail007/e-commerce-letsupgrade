import React from "react";
import Product from "./Product";
import monitor from "./img/monitor.jpg";
import clock from "./img/clock.jpg";
import printer from "./img/printer.jpg";
import showpiece from "./img/showpieces.jpg";
import walldecor from "./img/walldecors.jpg";
import projector from "./img/projector.jpg";
import "./ProductList.css";
function ProductList() {
  return (
    <div>
      <h1 className="title">Electric Appliance</h1>
      <div className="product">
        <Product image={monitor} name="MONITOR" rupees="5000" />
        <Product image={printer} name="PRINTER" rupees="3500" />
        <Product image={projector} name="PROJECTOR" rupees="2500" />
      </div>

      <h1 className="title">Home Decors</h1>
      <div className="product">
        <Product image={clock} name="CLOCK" rupees="1500" />
        <Product image={clock} name="CLOCK 1" rupees="2500" />
        <Product image={clock} name="CLOCK 2" rupees="1000" />
      </div>
    </div>
  );
}

export default ProductList;
