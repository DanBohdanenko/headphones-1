import React from "react";

const Typography = ({ variant, children, className }) => {
  const Tag = variant;

  return <Tag className={className}>{children}</Tag>;
};

export default Typography;
