import React from "react";

const EmailInput = ({ onChangeEmail, emailInput, emailCorrect }) => {
  return (
    <fieldset>
      <input
        className="contact__email"
        type="email"
        name="email"
        id="email"
        value={emailInput.email}
        onChange={onChangeEmail}
        onBlur={emailCorrect}
      />
      <label
        className={
          emailInput.email
            ? "contact__label-email active"
            : "contact__label-email"
        }
        htmlFor="email"
      >
        Your email
      </label>
      {emailInput.dirty && emailInput.error && (
        <div className="contact__input-error">{emailInput.error}</div>
      )}
    </fieldset>
  );
};

export default EmailInput;
