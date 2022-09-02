import React from "react";
import "./Confirm.scss";
const Confirm = ({
  modaltype,
  modaltitle,
  modalcontent,
  modakbtnName,
  closeModal,
  taskID,
}) => {
  return (
    <div className="confirm ">
      <div className="confirm-modal ">
        <div className="header">
          <span className="title">{modaltitle}</span>
          <button className="close" onClick={closeModal}>
            {" "}
            &times;
          </button>
        </div>
        <div className="content">
          <p>{modalcontent}</p>
        </div>
        <div className="buttons">
          <button className="btn btn-ok" onClick={() => modaltype(taskID)}>
            {modakbtnName}
          </button>
          <button className="btn btn-cancel" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
