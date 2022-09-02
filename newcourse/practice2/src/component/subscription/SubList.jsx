import React, { useState, useEffect } from "react";
import "./SubList.scss";
import Subscription from "./Subscription";
const SubList = () => {
  const [basic, setbasic] = useState(9.99);
  const [pro, setPro] = useState(19.99);
  const [master, setMaster] = useState(29.99);
  const [yearly, setYearly] = useState(false);
  const ModifyYearly = () => {
    setYearly(!yearly);
  };
  const calcValue = (num, per) => {
    return ((num * 12) / 100) * per;
  };
  useEffect(() => {
    if (yearly) {
      setbasic(Math.round(calcValue(9.99, 70)));
      setPro(Math.round(calcValue(19.99, 70)));
      setMaster(Math.round(calcValue(29.99, 70)));
    } else {
      setbasic(9.99);
      setPro(19.99);
      setMaster(29.99);
    }
  }, [yearly]);

  return (
    <section className="main">
      <div className="container --center-all">
        <div className="title">
          <h2>Pricing</h2>
          <div className="--line"></div>
        </div>
        <div className=" --flex-center">
          <p>Monthly</p>
          <span
            className={`ballContainer ${yearly && "ballcontainer-toggled"}`}
            onClick={ModifyYearly}
          >
            <div className={`ball ${yearly && "ball-right"}`}></div>
          </span>
          <p>Yearly</p>
        </div>{" "}
        <div className="sub-plans">
          <Subscription
            theme="theme1"
            title={"Basic"}
            price={basic}
            isBasic={true}
            yearly={yearly}
            onBuy={() => {
              alert(basic);
            }}
          />
          <Subscription
            theme="theme2"
            title={"Pro"}
            price={pro}
            isPro={true}
            yearly={yearly}
            onBuy={() => {
              alert(pro);
            }}
          />
          <Subscription
            theme="theme3"
            title={"Master"}
            price={master}
            isMaster={true}
            yearly={yearly}
            onBuy={() => {
              alert(master);
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default SubList;
