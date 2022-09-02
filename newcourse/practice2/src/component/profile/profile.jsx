import React from "react";
import ProfileData from "./profile-data";
import { BsTrash } from "react-icons/bs";
import "./profile.scss";
import { useState, createContext } from "react";
import User from "./user";
import userContext from "./Context/userContext";
const Profile = () => {
  const [Peoples, setPeople] = useState(ProfileData);
  const Removeid = (id) => {
    let arr = Peoples.filter((p) => p.id !== id);
    setPeople(arr);
  };

  return (
    <userContext.Provider value={{ Peoples, Removeid }}>
      <section className="profile-sec --flex-center --100vh --bg-primary">
        <div className="container">
          <h2 className=" --text-light">User Profile App</h2>
          <User />

          <button className="--btn --btn-danger" onClick={() => setPeople([])}>
            Clear all
          </button>
        </div>
      </section>
    </userContext.Provider>
  );
};

export default Profile;
