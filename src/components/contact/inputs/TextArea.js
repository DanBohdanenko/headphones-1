import React from "react";

const TextArea = ({ onChangeMessage, messageInput, emptyMessageChecking }) => {
  return (
    <fieldset>
      <textarea
        className="contact__message"
        id="textarea"
        name="message"
        value={messageInput.message}
        onBlur={emptyMessageChecking}
        onChange={onChangeMessage}
      ></textarea>
      <label
        htmlFor="textarea"
        className={messageInput.message ? "active" : ""}
      >
        Your message
      </label>
      {messageInput.dirty && messageInput.error && (
        <div className="contact__input-error">{messageInput.error}</div>
      )}
    </fieldset>
  );
};

export default TextArea;
