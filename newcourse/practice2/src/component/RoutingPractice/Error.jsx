import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className=" --center-all">
      <h1>Page Not Found </h1>
      <span className=" --width-500px">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus,
          pariatur consequatur quia assumenda molestiae commodi est repellat
          expedita nostrum ipsam! Cupiditate expedita optio eveniet omnis nemo
          perferendis voluptate tempora atque.
        </p>
        <p>
          <Link to="/" className=" --color-danger">
            Back to Home
          </Link>
        </p>
      </span>
    </div>
  );
};

export default Error;
