import React from "react";

const Facebook = ({className}) => {
  return (
    <svg
    className={`${className}`}
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05888 27.9411 0 18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36Z"
        fill="#3B5998"
      />
      <path
        d="M22.5252 18.7046H19.3133V30.4715H14.447V18.7046H12.1326V14.5693H14.447V11.8933C14.447 9.97961 15.3561 6.98303 19.3566 6.98303L22.9613 6.99811V11.0122H20.3459C19.9169 11.0122 19.3136 11.2265 19.3136 12.1394V14.5731H22.9503L22.5252 18.7046Z"
        fill="white"
      />
    </svg>
  );
};

export default Facebook;
