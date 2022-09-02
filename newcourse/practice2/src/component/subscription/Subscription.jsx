import React from "react";
import "./Sub.scss";
const Subscription = ({
  theme,
  title,
  price,
  isBasic,
  isPro,
  isMaster,
  yearly,
  onBuy,
}) => {
  return (
    <div className="price-box  --card">
      <div className={`box ${theme} --p2`}>
        <p className=" --text-light">{title}</p>
        <h4 className=" --text-light">
          <span>$</span>
          <span className="basic">{price}</span>
          {yearly && (
            <p>
              <del className=" --text-light">30% off</del>
            </p>
          )}
        </h4>

        {isBasic && <p className=" --text-light">Every thing is basic,plue</p>}
        {isPro && <p className=" --text-light">Every thing is pro,plue</p>}
        {isMaster && (
          <p className=" --text-light">Every thing is master,plue</p>
        )}
      </div>
      <div className="features">
        <ul>
          {isBasic && <li>Unlimited Pages</li>}
          {isBasic && <li>Unlimited BandWidth</li>}
          {isBasic && <li>500GB Storage</li>}
          {isPro && <li>10 BackUp</li>}
          {isPro && <li>Email Support</li>}
          {isPro && <li>GitHub Tool</li>}
          {isMaster && <li>20 BackUp</li>}
          {isMaster && <li>Push Notifications</li>}
          {isMaster && <li>Priority Support</li>}
        </ul>
        <button className={`btn ${theme}`} onClick={onBuy}>Buy Now</button>
      </div>
    </div>
  );
};

export default Subscription;
