import React from "react";
import { FaCheckDouble, FaTrashAlt, FaEdit } from "react-icons/fa";
const Task = ({
  name,
  date,
  taskID,
  complete,
  editTask,
  delTask,
  enableComplete,
}) => {
  return (
    <>
      <div className={complete ? "task complete" : "task Notcomplete"}>
        <div>
          <span>
            <p>
              <b>Task:</b>
              {name}
            </p>
          </span>
          <span>
            <p>
              <b>Date:</b>
              {date}
            </p>
          </span>
        </div>
        <span>
          <button>
            <FaEdit color="green" onClick={() => editTask("Edit", taskID)} />
          </button>
          <button>
            <FaTrashAlt color="red" onClick={() => delTask("Del", taskID)} />
          </button>
          <button>
            <FaCheckDouble
              color="purple"
              onClick={() => enableComplete(taskID)}
            />
          </button>
        </span>
      </div>
    </>
  );
};

export default Task;
