import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [GitHubUser, setGitHubUser] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [Error, setError] = useState(false);
  const getUsers = async () => {
    setisLoading(true);
    setError(false);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Something went wrong.");
      }
      const result = await res.json();
      setGitHubUser(result);
      setisLoading(false);
    } catch (err) {
      console.log(err.message);
      setisLoading(false);
      setError(true);
    }
  };
  useEffect(() => {
    getUsers();
  }, [url]);
  return { GitHubUser, Error, isLoading };
};

export default useFetch;
