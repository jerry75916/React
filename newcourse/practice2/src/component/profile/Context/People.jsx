import React, { useContext } from "react";
import { BsTrash } from "react-icons/bs";
import userContext from "./userContext";
const People = ({ id, name, img, job }) => {
  const data = useContext(userContext);

  return (
    <div>
      <div key={id} className="profile --card --flex-between --p">
        <img src={img} alt="profile"></img>
        <div className="Desc">
          <h4 className="--text-light">Name:{name}</h4>
          <p className="--text-light">Job:{job}</p>
        </div>
        <BsTrash className="icon" onClick={() => data.Removeid(id)} size={22} />
      </div>
    </div>
  );
};

export default People;
