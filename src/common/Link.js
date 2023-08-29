import React from "react";

const Link = ({ href, target, rel, children, className, onClick }) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Link;
