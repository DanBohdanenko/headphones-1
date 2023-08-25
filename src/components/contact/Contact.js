import React, { useState, useEffect } from "react";
import "./contact.scss";
import Success from "./Success";
import TitleComponent from "../typography/TitleComponent";
import { titles } from "../typography/typographyData";
import NameInput from "./NameInput";
import EmailInput from "./EmailInput";
import TextArea from "./TextArea";

const Contact = () => {
  //Name Input state
  const [nameInput, setNameInput] = useState({
    name: "",
    dirty: true,
    error: "",
  });
  //Email Input state
  const [emailInput, setEmailInput] = useState({
    email: "",
    dirty: true,
    error: "",
  });
  //Textarea state
  const [messageInput, setMessageInput] = useState({
    message: "",
    dirty: true,
    error: "",
  });
  //Form validation state
  const [formValid, setFormValid] = useState(false);
  //form submit state
  const [isSubmitted, setIsSubmitted] = useState(false);

  //------Name input functions------
  //====================================
  //Checking if name input is empty
  const emptyNameChecking = () => {
    if (nameInput.name.length < 1) {
      setNameInput((prevState) => ({
        ...prevState,
        error: "This field is empty",
      }));
    } else {
      setNameInput((prevState) => ({
        ...prevState,
        error: "",
        dirty: false,
      }));
    }
  };
  //Monitoring name input changing
  const onChangeName = (event) => {
    const newName = event.target.value;
    setNameInput((prevState) => ({ ...prevState, name: newName }));
    emptyNameChecking();
  };
  //====================================

  //------Email input functions------
  //====================================
  //checking if email input is correct
  const emailCorrect = (event) => {
    const x =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (emailInput.email.length < 1) {
      setEmailInput((prevState) => ({
        ...prevState,
        error: "This field is empty",
      }));
    } else if (!x.test(String(event.target.value).toLowerCase())) {
      setEmailInput((prevState) => ({
        ...prevState,
        error: "Email is not correct!",
      }));
    } else {
      setEmailInput((prevState) => ({ ...prevState, error: "", dirty: false }));
    }
  };
  const onChangeEmail = (event) => {
    const newEmail = event.target.value;
    setEmailInput((prevState) => ({ ...prevState, email: newEmail }));
    emailCorrect(event);
  };
  //====================================

  //------Textarea functions------
  //====================================
  const emptyMessageChecking = () => {
    if (messageInput.message.length < 1) {
      setMessageInput((prevState) => ({
        ...prevState,
        error: "This field is empty",
      }));
    } else {
      setMessageInput((prevState) => ({
        ...prevState,
        error: "",
        dirty: false,
      }));
    }
  };
  //Monitoring message textarea changing
  const onChangeMessage = (event) => {
    const newMessage = event.target.value;
    setMessageInput((prevState) => ({ ...prevState, message: newMessage }));
    emptyMessageChecking();
  };
  //====================================

  //------Form validation functions------
  //====================================
  useEffect(() => {
    if (emailInput.dirty || nameInput.dirty || messageInput.dirty) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailInput, nameInput, messageInput]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValid) {
      setIsSubmitted(!isSubmitted);
      setTimeout(() => document.location.reload(), 5000);
    }
  };
  //====================================
  if (isSubmitted) {
    return <Success />;
  } else {
    return (
      <section className="contact" id="contact">
        <div className="container">
          <TitleComponent
            className="contact__title title"
            title={titles.contact}
          />
          <form className="contact__form" onSubmit={handleSubmit}>
            <NameInput
              emptyNameChecking={emptyNameChecking}
              onChangeName={onChangeName}
              nameInput={nameInput}
            />
            <EmailInput
              onChangeEmail={onChangeEmail}
              emailInput={emailInput}
              emailCorrect={emailCorrect}
            />
            <TextArea
              onChangeMessage={onChangeMessage}
              messageInput={messageInput}
              emptyMessageChecking={emptyMessageChecking}
            />
            <button
              type="submit"
              className="contact__button button"
              id="form-submit"
              onClick={(event) => {
                emptyNameChecking();
                emailCorrect(event);
                emptyMessageChecking();
              }}
            >
              Send
            </button>
          </form>
        </div>
      </section>
    );
  }
};

export default Contact;
