import React from "react";

const Button = ({ label, className, onClick }) => {
  return (
    <button
      className={`rounded-[60px] text-white text-xl whitespace-nowrap ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
