import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import "./success.scss";

const Success = () => {
  return (
    <section className="success">
      <div className="container">
        <div className="success__body">
          <h4 className="success__title">Success!</h4>
          <div className="success__container">
            <AiOutlineCheck className="success__icon" />
          </div>
          <h5 className="success__text">Thank you for your message!</h5>
        </div>
      </div>
    </section>
  );
};

export default Success;
