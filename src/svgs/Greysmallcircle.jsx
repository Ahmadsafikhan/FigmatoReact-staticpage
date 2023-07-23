import React from "react";

const Greysmallcircle = ({className}) => {
  return (
    <svg
    className={`${className}`}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="8" fill="#E7F0FC" />
    </svg>
  );
};

export default Greysmallcircle;
