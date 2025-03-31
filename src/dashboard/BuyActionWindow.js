import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const {closeBuyWindow}=useContext(GeneralContext);

  const handleBuyClick=async ()=>{
    await axios.post("http://localhost:3002/newOrder",{
      name:uid,
      qty:stockQuantity,
      price:stockPrice,
      mode:"BUY",
    },{withCredentials:true});

    closeBuyWindow();
  }

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="containers" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}  
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-primary" onClick={handleBuyClick} >
            Buy
          </Link>
          <Link to="" className="btn btn-secondary" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;