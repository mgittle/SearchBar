import React from "react";

const InputForm = ({ items, search, handleChange, handleSubmit }) => {
  return (
    <div className="inputform">
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" onChange={handleChange} />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
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
    </div>
  );
};

export default InputForm;
