import React from "react";
import Category from "./Category.jsx";

const Categories = ({ categories }) => {
  return (
    <div className="category">
      <h2>Categories</h2>
      <Category />
    </div>
  );
};

export default Categories;
