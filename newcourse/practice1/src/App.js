import React from "react";
import ProfileContainer from "./components/ProfileContainer/profileContainer";
import "./App.css";
const App = () => {
  return (
    <div className="MainContainer">
      <div>
        <h1>Team Members</h1>
        <ProfileContainer />
      </div>
    </div>
  );
};

export default App;
