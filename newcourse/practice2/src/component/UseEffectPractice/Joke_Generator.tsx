import React, { useState, useEffect, useCallback } from "react";

const spinner = require("../../assets/spinner1.jpg");
const Joke_Generator = (): JSX.Element => {
  const [JokeContent, setJokeContent] = useState<any>();
  const [isLoading, setisLoading] = useState<boolean>(true);
  const url: string = "http://api.icndb.com/jokes/random";
  const fetchData = useCallback(() => {
    setisLoading(true);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setJokeContent(result);
        setisLoading(false);
      });
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <section className=" --bg-primary --100vh --flex-center">
      <div className="container --bg-light --card --p">
        <h1>Random Jokes Generator</h1>
        <div className="--line"></div>
        {isLoading ? (
          <div className="--center-all">
            <img src={spinner} alt="spinner" width={100} />
          </div>
        ) : (
          <>
            <h4>Joke id: {JokeContent.value.id}</h4>
            <p>{JokeContent.value.joke}</p>
            <br></br>
          </>
        )}{" "}
        <button className=" --btn --btn-primary" onClick={fetchData}>
          Generate Joke
        </button>
      </div>
    </section>
  );
};

export default Joke_Generator;
