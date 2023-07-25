import React from "react";

const HeaderLogo = ({ text, className }) => {
  return (
    <div className={`${className}`}>
      <span
        className={`${className}  font-bold leading-[33.07px]`}
      >
        A+{" "}
      </span>
      <span
        className={`${className} leading-[33.55px] font-normal `}
      >
        {text}
      </span>
    </div>
  );
};

export default HeaderLogo;
