import React from "react";

const Epicircle = ({className}) => {
  return (
    <svg
    className={`${className}`}
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="60" cy="60" r="55.6" stroke="#FF007A" stroke-width="8.8" />
    </svg>
  );
};

export default Epicircle;
