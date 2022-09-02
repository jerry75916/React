import React, { useContext } from "react";
import { BsTrash } from "react-icons/bs";
import People from "./Context/People";
import userContext from "./Context/userContext";

const User = () => {
  const { Peoples } = useContext(userContext);
  return (
    <div>
      {Peoples.map((profile) => {
        const { id, job, name, img } = profile;
        return <People key={id} name={name} job={job} img={img} id={id} />;
      })}
    </div>
  );
};

export default User;
