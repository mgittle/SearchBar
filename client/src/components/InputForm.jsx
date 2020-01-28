import React from "react";

const InputForm = ({ items }) => {
  return (
    <div className="inputform">
      <form>
        <input type="text" name="search" />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default InputForm;
