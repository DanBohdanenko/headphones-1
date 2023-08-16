import React, { useEffect } from "react";
import Success from "./Success";

//"Contacts" component
const Contact = () => {
  //States of "Contacts" component callback form
  const [name, setName] = React.useState("");
  const [nameDirty, setNameDirty] = React.useState(false);
  const [nameError, setNameError] = React.useState("This field is empty");
  const [email, setEmail] = React.useState("");
  const [emailDirty, setEmailDirty] = React.useState(false);
  const [emailError, setEmailError] = React.useState("This field is empty");
  const [message, setMessage] = React.useState("");
  const [messageDirty, setMessageDirty] = React.useState(false);
  const [messageError, setMessageError] = React.useState("This field is empty");
  //Form validation state
  const [formValid, setFormValid] = React.useState(false);
  //form submit state
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  //Checking form validation
  useEffect(() => {
    if (emailError || name.length < 1 || message.length < 1) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, name, message]);

  //Checking if name input is empty
  const onChangeName = (event) => {
    setName(event.target.value);
    if (event.target.value.length < 1) {
      setNameError("This field is empty");
    } else {
      setNameError("");
    }
  };

  //checking if email input is correct
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
    const x =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!x.test(String(event.target.value).toLowerCase())) {
      setEmailError("Email is not correct!");
    } else {
      setEmailError("");
    }
  };
  //Checking if message input is empty
  const onChangeMessage = (event) => {
    setMessage(event.target.value);
    if (event.target.value.length < 1) {
      setMessageError("This field is empty");
    } else {
      setMessageError("");
    }
  };

  //checking if inputs are empty after user focused them once
  const blurHandler = (event) => {
    switch (event.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "name":
        setNameDirty(true);
        break;
      case "message":
        setMessageDirty(true);
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(!isSubmitted);
  };

  //conditional return depending on form submitted or not
  if (isSubmitted) {
    return <Success />;
  } else {
    return (
      <section className="contact" id="contact">
        <div className="container">
          <h3 className="contact__title title">Contact us</h3>
          <form className="contact__form" onSubmit={handleSubmit}>
            <fieldset>
              <input
                className={
                  name.length > 0 ? "contact__name" : "contact__name invalid"
                }
                type="text"
                id="name"
                value={name}
                onChange={(event) => onChangeName(event)}
                onBlur={(event) => blurHandler(event)}
                name="name"
              />
              <label
                className={
                  name ? "contact__label-name active" : "contact__label-name"
                }
                htmlFor="name"
              >
                Your name
              </label>
              {nameDirty && nameError && (
                <div
                  style={{ color: "red", fontSize: "12px", marginTop: "5px" }}
                >
                  {nameError}
                </div>
              )}
            </fieldset>
            <fieldset>
              <input
                className="contact__email"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(event) => onChangeEmail(event)}
                onBlur={(event) => blurHandler(event)}
              />
              <label
                className={
                  email ? "contact__label-email active" : "contact__label-email"
                }
                htmlFor="email"
              >
                Your email
              </label>
              {emailDirty && emailError && (
                <div
                  style={{ color: "red", fontSize: "12px", marginTop: "5px" }}
                >
                  {emailError}
                </div>
              )}
            </fieldset>
            <fieldset>
              <textarea
                className="contact__message"
                id="textarea"
                name="message"
                value={message}
                onChange={(event) => onChangeMessage(event)}
                onBlur={(event) => blurHandler(event)}
              ></textarea>
              <label htmlFor="textarea" className={message ? "active" : ""}>
                Your message
              </label>
              {messageDirty && messageError && (
                <div
                  style={{ color: "red", fontSize: "12px", marginTop: "5px" }}
                >
                  {messageError}
                </div>
              )}
            </fieldset>
            <button
              type="submit"
              disabled={!formValid}
              className="contact__button button"
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
