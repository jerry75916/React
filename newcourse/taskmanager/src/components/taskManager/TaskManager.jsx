import React from "react";
import "./TaskManager.css";
import Task from "./Task";
import { useState, useRef, useEffect, useReducer } from "react";
import useLocalStorage from "use-local-storage";
import Alert from "./Alert/Alert";
import Confirm from "./Confirm/Confirm";
import { taskReducer } from "./TaskReducer/TaskReducer";
const TaskManager = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [tasks, setTasks] = useLocalStorage("Tasks", []);
  const [isEditing, setIsEditing] = useState(false);
  const [taskID, settaskID] = useState(null);
  const nameInput = useRef("");
  const dateInput = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !date) {
      dispatch({ type: "EMPTY_FIELDS", payload: [] });
    }
    if (state.isEditing) {
      const EditTasks = tasks.map((task) => {
        if (task.taskID === state.taskID) {
          return { ...state, name, date, complete: false };
        }

        return task;
      });

      dispatch({ type: "EditSUBMIT_ITEM", payload: EditTasks });
      setName("");
      setDate("");
      setTasks(EditTasks);
      return;
    }
    if (name && date) {
      const NewTask = {
        taskID: Date.now(),
        name,
        date,
        complete: false,
      };
      dispatch({ type: "SUBMIT_ITEM", payload: NewTask });
      setName("");
      setDate("");
      setTasks([...tasks, NewTask]);
    }
  };
  const CloseAlert = () => {
    dispatch({ type: "CLOSE_ALERT", payload: [] });
  };
  useEffect(() => {
    nameInput.current.focus();
  }, [tasks]);
  const closeModalhandler = () => {
    dispatch({ type: "CLOSE_MODAL", payload: [] });
    setName("");
    setDate("");
  };
  const openModal = (modal_type, id) => {
    if (modal_type === "Edit") {
      dispatch({
        type: "EDIT_OPEN",
        payload: { taskID: id, editTaskHandler: editTaskHandler },
      });
    } else {
      dispatch({
        type: "DELETE_OPEN",
        payload: { taskID: id, delTaskHandler: delTaskHandler },
      });
    }
  };
  const delTaskHandler = (id) => {
    const Deleted = tasks.filter((task) => {
      return task.taskID !== id;
    });

    dispatch({ type: "DEL_ITEM", payload: Deleted });
    setTasks(Deleted);

    setDate("");
    setName("");
  };

  const editTaskHandler = (id) => {
    dispatch({ type: "EDIT_ITEM", payload: id });
    const ThisTask = tasks.find((task) => {
      return task.taskID === id;
    });
    setDate(ThisTask.date);
    setName(ThisTask.name);
  };
  const completeTaskHandler = (id) => {
    const newTasksArr = tasks.map((task) => {
      if (task.taskID === id) {
        return { ...task, complete: true };
      } else {
        return { ...task };
      }
    });
    dispatch({ type: "TASK_COMPLETE", payload: newTasksArr });
    setTasks(newTasksArr);
  };
  const [state, dispatch] = useReducer(taskReducer, {
    tasks,
    taskID: null,
    isEditing: false,
    isAlertOpen: false,
    AlertContent: "This is alert",
    alertClass: "danger",
    isModalOpen: false,
    modaltype: editTaskHandler,
    modaltitle: "",
    modalcontent: "",
    modakbtnName: "Edit",
  });
  return (
    <div className=" --bg-primary">
      {state.isAlertOpen && (
        <Alert
          AlertContent={state.AlertContent}
          AlertClass={state.alertClass}
          onCLoseAlert={CloseAlert}
        />
      )}

      {state.isModalOpen && (
        <Confirm
          modaltype={state.modaltype}
          modaltitle={state.modaltitle}
          modalcontent={state.modalcontent}
          modakbtnName={state.modakbtnName}
          closeModal={closeModalhandler}
          taskID={state.taskID}
        />
      )}
      <h1 className="--text-light --text-center">Task Manager</h1>
      <div className=" --flex-center --p">
        <div className="  --card --bg-light --width-500px --flex-center --p">
          <form className="form --form-control" onSubmit={handleSubmit}>
            <div className="--flex-start">
              <label htmlFor="name">Task:</label>
              <input
                type="text"
                id="name"
                placeholder="Task name"
                value={name}
                ref={nameInput}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="--flex-start">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                value={date}
                ref={dateInput}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </div>
            <button className="--btn --btn-success --btn-block">
              {state.isEditing ? "Edit Task" : "Save Task"}
            </button>
          </form>
        </div>
      </div>
      <article className=" --flex-center --my2">
        <div className="--width-500px">
          <h2 className="--text-light task_bottom_line">Task List</h2>
          {state.tasks.length === 0 ? (
            <div>
              <p className=" --text-light">No task in loop</p>
            </div>
          ) : (
            state.tasks.map((task) => {
              return (
                <Task
                  key={task.taskID}
                  {...task}
                  editTask={openModal}
                  delTask={openModal}
                  enableComplete={completeTaskHandler}
                  // CloseModal={closeModalhandler}
                />
              );
            })
          )}
        </div>
      </article>
    </div>
  );
};

export default TaskManager;
