import React from "react";

export const Section = ({ children, id, className, variant }) => {
  const Tag = variant;
  return (
    <Tag id={id} className={className}>
      <div className="container">{children}</div>
    </Tag>
  );
};
