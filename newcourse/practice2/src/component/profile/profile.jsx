import React from "react";
import ProfileData from "./profile-data";
import { BsTrash } from "react-icons/bs";
import "./profile.scss";
import { useState } from "react";
const Profile = () => {
  const [People, setPeople] = useState(ProfileData);
  const Removeid = (id) => {
    let arr = People.filter((p) => p.id !== id);
    setPeople(arr);
  };

  return (
    <section className="profile-sec --flex-center --100vh --bg-primary">
      <div className="container">
        <h2 className=" --text-light">User Profile App</h2>
        {People.map((profile) => {
          const { id, job, name, img } = profile;
          return (
            <div key={id} className="profile --card --flex-between --p">
              <img src={img} alt="profile"></img>
              <div className="Desc">
                <h4 className="--text-light">Name:{name}</h4>
                <p className="--text-light">Job:{job}</p>
              </div>
              <BsTrash
                className="icon"
                onClick={() => Removeid(id)}
                size={22}
              />
            </div>
          );
        })}

        <button className="--btn --btn-danger" onClick={() => setPeople([])}>
          Clear all
        </button>
      </div>
    </section>
  );
};

export default Profile;
