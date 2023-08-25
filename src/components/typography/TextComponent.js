import React from "react";

const TextComponent = (props) => {
  return <p className={props.className}>{props.text}</p>;
};

export default TextComponent;
