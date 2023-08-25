import React from "react";

const NameInput = ({ nameInput, emptyNameChecking, onChangeName }) => {
  return (
    <fieldset>
      <input
        className='"contact__name"'
        type="text"
        id="name"
        value={nameInput.name}
        name="name"
        onChange={onChangeName}
        onBlur={emptyNameChecking}
      />
      <label
        className={
          nameInput.name ? "contact__label-name active" : "contact__label-name"
        }
        htmlFor="name"
      >
        Your name
      </label>
      {nameInput.dirty && nameInput.error && (
        <div className="contact__input-error">{nameInput.error}</div>
      )}
    </fieldset>
  );
};

export default NameInput;
