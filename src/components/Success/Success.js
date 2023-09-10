import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import "./success.scss";
import { Section, Typography } from "../";

export const Success = () => {
  return (
    <Section className="success" variant="section">
      <div className="success__body">
        <Typography className="success__title" variant="h4">
          Success!
        </Typography>
        <div className="success__container">
          <AiOutlineCheck className="success__icon" />
        </div>
        <Typography className="success__text" variant="h5">
          Thank you for your message!
        </Typography>
      </div>
    </Section>
  );
};
