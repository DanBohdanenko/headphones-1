import React from "react";

export const Typography = ({ variant, children, className }) => {
  const Tag = variant;

  return <Tag className={className}>{children}</Tag>;
};
