import React, { useState, useEffect } from "react";
import {
  Success,
  NameInput,
  EmailInput,
  TextArea,
  nameValidation,
  emailValidation,
  messageValidation,
  contactInfo,
  Button,
} from "../../";
import "./form.scss";

export const Form = () => {
  const [nameInput, setNameInput] = useState({
    name: "",
    dirty: true,
    error: "",
  });
  const [emailInput, setEmailInput] = useState({
    email: "",
    dirty: false,
    error: "",
  });
  const [messageInput, setMessageInput] = useState({
    message: "",
    dirty: false,
    error: "",
  });
  const [formValid, setFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (emailInput.dirty || nameInput.dirty || messageInput.dirty) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailInput, nameInput, messageInput]);

  const handleSubmit = (event) => {
    event.preventDefault();
    nameValidation(nameInput, setNameInput);
    emailValidation(event, emailInput, setEmailInput);
    messageValidation(messageInput, setMessageInput);
    if (formValid) {
      setIsSubmitted(!isSubmitted);
      setTimeout(() => document.location.reload(), 5000);
    }
  };

  if (isSubmitted) return <Success />;
  return (
    <form className="form" onSubmit={handleSubmit}>
      <NameInput
        nameInput={nameInput}
        setNameInput={setNameInput}
        nameValidation={nameValidation}
      />
      <EmailInput
        emailInput={emailInput}
        setEmailInput={setEmailInput}
        emailValidation={emailValidation}
      />
      <TextArea
        messageInput={messageInput}
        setMessageInput={setMessageInput}
        messageValidation={messageValidation}
      />
      <Button type="submit" className="form__button button">
        {contactInfo.button}
      </Button>
    </form>
  );
};
