import React, { useState, useEffect } from "react";
import "./contact.scss";
import { Typography, Section, Form, contactInfo } from "../";

export const Contact = () => {
  return (
    <Section className="contact" id="contact" variant="section">
      <Typography variant="h2" className="contact__title title">
        {contactInfo.title}
      </Typography>
      <Form />
    </Section>
  );
};
