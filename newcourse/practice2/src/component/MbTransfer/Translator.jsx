import React from "react";
import "./Translator.style.scss";
import { FaLongArrowAltRight } from "react-icons/fa";
import { BiTransferAlt } from "react-icons/bi";
import { useState } from "react";
import { CardFooter } from "./CardFooter";
const Translator = () => {
  const [Mbs, setMbs] = useState(0);
  const onNumberChangeHandler = (e) => {
    const { value } = e.target;
    setMbs((target) => value / 8);
  };

  return (
    <div className="bg_container">
      <div className="Container_box">
        <div className="transfer-title">Network speed Converter</div>
        <div className="transfer-content">
          <div className="button-container">
            <button className="--btn --btn-primary">Mbps</button>
            <BiTransferAlt size={50} color={"#888"} />
            <button className="--btn --btn-primary">Mb/s</button>
          </div>
        </div>
        <div className="number-container">
          <div className="number-item-left">
            <p className="lbl_p">Set</p>
            <input
              type="number"
              class="input_mbs"
              min="0"
              onChange={onNumberChangeHandler}
            />
          </div>
          <FaLongArrowAltRight size={50} color={"blue"} />
          <div className="number-item-right">
            <p className="lbl_p">Show</p>
            <input
              type="number"
              className="input_mbs text-right"
              min="0"
              value={Mbs}
            />
          </div>
        </div>
        <CardFooter val={Mbs}>Fast</CardFooter>
      </div>
    </div>
  );
};

export default Translator;
