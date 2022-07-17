import React from "react";
import ProfileListStyle from "./profileListStyle";
import { profiles } from "../../profile-data";
import Card from "../Card/Card";
const ProfileList = () => {
  const cardData = profiles;
  return (
    <ProfileListStyle>
      {cardData.map((data, index) => {
        return <Card key={index} Datas={data} />;
      })}
    </ProfileListStyle>
  );
};

export default ProfileList;
