import React from "react";
import "./Search.scss";
const Search = ({ value, onChangeEvent }) => {
  return (
    <div className=" --form-control">
      <input
        type="Text"
        placeholder="Search Products"
        value={value}
        onChange={onChangeEvent}
      ></input>
    </div>
  );
};

export default Search;
