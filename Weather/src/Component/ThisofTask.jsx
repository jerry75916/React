import React, { useState } from "react";
import UseState from "react";
import "./ThisofTask.css";
const ThisofTask = () => {
  const tasks = [
    {
      id: 1,
      value: "Task 1",
      checked: false
    },
    {
      id: 2,
      value: "Task 2",
      checked: false
    },
    {
      id: 3,
      value: "Task 3",
      checked: false
    }
  ];

  const [TaskArr, setTasks] = useState(tasks);

  const handleClick = (id) => {
    let temp = TaskArr.map((t) => {
      if (t.id === id) {
        return { ...t, id: true };
      } else {
        return t;
      }
    });

    setTasks(temp);
  };

  return (
    <div>
      <ul>
        {TaskArr.map((t) => {
          return (
            <li className={t.checked ? "del" : ""} onClick={handleClick(t.id)}>
              {t.value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ThisofTask;
