import React from "react";
import Item from "./Item.jsx";

const Items = ({ items }) => {
  return (
    <div className="item">
      <h2>Items:{items[0].name}</h2>
      <Item />
    </div>
  );
};

export default Items;
