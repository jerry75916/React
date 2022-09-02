import React from "react";
import "./Categories.scss";

const Capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const Categories = ({ AllCategories, Fun }) => {
  return (
    <div className="  --flex-center">
      {AllCategories.map((category) => {
        return (
          <button
            key={category}
            type="button"
            className="btn --btn --btn-secondary"
            onClick={() => Fun(category)}
          >
            {Capitalize(category)}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
