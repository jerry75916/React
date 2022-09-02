import React, { useState } from "react";

const PracticeType = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);

  const clickHandler = (c: number): void => {
    setCount(c);
  };

  return (
    <div>
      <h1>You click {count} times</h1>
      <button onClick={() => clickHandler(count + 1)}>Click me</button>
    </div>
  );
};

export default PracticeType;
