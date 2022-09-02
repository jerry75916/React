import React, { useState, useEffect, useRef } from "react";

const ControlInput = () => {
  const nameRef = useRef(null);
  const jobRef = useRef(null);

  const [person, setPerson] = useState({ name: "", job: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Hi my name is ${nameRef.current.value} Job is ${jobRef.current.value}`
    );
    jobRef.current.focus();
  };
  //   const handleChange = (e) => {
  //     const name = e.target.name;
  //     const value = e.target.value;
  //     setPerson({ ...person, [name]: value }); //person[job] or person[name]
  //   };
  return (
    <div className="--bg-primary --mh-100vh">
      <h1 className=" --text-center --text-light">ControlInput</h1>
      <div className="--flex-center">
        <div className="--card --bg-light --width-500px --flex-center">
          <form className="--form-control " onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" ref={nameRef}></input>
            </div>
            <div>
              <label htmlFor="job">Job:</label>
              <input type="text" name="job" ref={jobRef}></input>
            </div>

            <button type="submit" className=" --btn --btn-block">
              Submit User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ControlInput;
