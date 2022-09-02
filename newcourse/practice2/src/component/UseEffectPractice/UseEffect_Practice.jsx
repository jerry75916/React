import { useEffect, useState, React } from "react";

const UseEffect_Practice = () => {
  const [Width, setWidth] = useState(window.innerWidth);
  const ResizeWindowEvent = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    console.log("");
    window.addEventListener("resize", ResizeWindowEvent);
    return () => {
      window.removeEventListener("resize", ResizeWindowEvent);
    };
  });
  return (
    <div className=" --center-all">
      <h1>Pixcel</h1>
      <h2>{Width}px</h2>
    </div>
  );
};

export default UseEffect_Practice;
