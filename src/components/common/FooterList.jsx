// FooterList.js
import React from "react";

const FooterList = ({ title, items }) => {
  return (
    <div>
      <h1 className="text-[20px] mb-[24px] font-bold">{title}</h1>
      <ul className="leading-[30px] font-normal">
        {items.map((item, index) => (
          <li key={index}>
            <a href="/" className="text-[14px]">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
