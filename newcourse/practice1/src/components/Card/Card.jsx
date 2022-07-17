import React from "react";
import { CardStyle, Icons, Btn } from "./CardStyle";
import { RowStyle } from "./CardStyle";
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineGooglePlus,
} from "react-icons/ai";
const Card = ({ Datas }) => {
  const { img, name, job, company, link } = Datas;
  return (
    <CardStyle>
      <img src={`${img}`} alt={job}></img>
      <span className="lbl_profile">My profile</span>
      <RowStyle>
        <span>Name:</span>
        <span>{name}</span>
      </RowStyle>
      <RowStyle>
        <span>Job:</span>
        <span>{job}</span>
      </RowStyle>
      <RowStyle>
        <span>Company:</span>
        <span>{company}</span>
      </RowStyle>
      <Icons>
        <AiOutlineTwitter />
        <AiOutlineGithub />
        <AiOutlineGooglePlus />
      </Icons>
      <Btn>
        <a href={link} target="_blank" rel="noreferrer">
          View Profile
        </a>
      </Btn>
    </CardStyle>
  );
};

export default Card;
