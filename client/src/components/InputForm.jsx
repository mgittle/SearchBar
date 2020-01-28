import React from "react";

const InputForm = ({ items }) => {
  return (
    <div className="inputform">
      <form>
        <input type="text" name="search" />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
        <br />
        <div className="tags">
          <div className="tagitem">Today's Deals</div>
          <div className="tagitem">Best Seller's</div>
          <div className="tagitem">Customer Service</div>
          <div className="tagitem">Find a Gift</div>
          <div className="tagitem">New Releases</div>
          <div className="tagitem">Registry</div>
          <div className="tagitem">Gift Cards</div>
          <div className="tagitem">Sell</div>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
