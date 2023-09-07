const nameValidation = (nameInput, setNameInput) => {
  if (nameInput.name.length < 1) {
    setNameInput((prevState) => ({
      ...prevState,
      error: "This field is empty",
      dirty: true,
    }));
  } else {
    setNameInput((prevState) => ({
      ...prevState,
      error: "",
      dirty: false,
    }));
  }
};

const emailValidation = (event, emailInput, setEmailInput) => {
  const x =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (emailInput.email.length < 1) {
    setEmailInput((prevState) => ({
      ...prevState,
      error: "This field is empty",
      dirty: true,
    }));
  } else if (!x.test(String(event.target.value).toLowerCase())) {
    setEmailInput((prevState) => ({
      ...prevState,
      error: "Email is not correct!",
      dirty: true,
    }));
  } else {
    setEmailInput((prevState) => ({ ...prevState, error: "", dirty: false }));
  }
};

const messageValidation = (messageInput, setMessageInput) => {
  if (messageInput.message.length < 1) {
    setMessageInput((prevState) => ({
      ...prevState,
      error: "This field is empty",
      dirty: true,
    }));
  } else {
    setMessageInput((prevState) => ({
      ...prevState,
      error: "",
      dirty: false,
    }));
  }
};

export { nameValidation, emailValidation, messageValidation };
