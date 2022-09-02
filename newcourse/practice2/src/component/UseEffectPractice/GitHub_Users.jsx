import { getAllByAltText } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import "./GitHub_style.scss";
import useFetch from "./useFetch";
const url = "https://api.github.com/users";
const GitHub_Users = () => {
  const { GitHubUser, Error, isLoading } = useFetch(url);
  return (
    <div className="Container --100vh --bg-primary ">
      <h1 className=" --color-white">GitHub Users</h1>
      <div className=" --line --mb2"></div>
      {isLoading && (
        <div className="--center-all --p">
          <h4 className=" --text-light">Loading...</h4>
        </div>
      )}

      <div className=" --grid-25 --py">
        {Error ? (
          <h4 className=" --text-light">Something went wrong.</h4>
        ) : (
          GitHubUser.map((user) => {
            const { id, login, avatar_url, html_url } = user;
            return (
              <div key={id} className=" --card --flex-start --bg-light --p2  ">
                <img src={avatar_url} width={100} alt="Image"></img>
                <div className="Card-Content">
                  <h3>{login}</h3>
                  <a href={html_url}>View Profile</a>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default GitHub_Users;
