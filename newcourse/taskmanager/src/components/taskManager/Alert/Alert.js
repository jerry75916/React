import React, { useEffect } from "react";
import "./Alert.scss";
import { FaExclamationCircle, FaTimes } from "react-icons/fa";
const Alert = ({ AlertContent, AlertClass, onCLoseAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onCLoseAlert();
    }, "5000");
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={`alert ${AlertClass}`}>
      <FaExclamationCircle size={16} className="icon-x" />
      <span className="msg">{AlertContent}</span>
      <div className="close-btn" onClick={onCLoseAlert}>
        <FaTimes className="icon-x" size={19} />
      </div>
    </div>
  );
};

export default Alert;
