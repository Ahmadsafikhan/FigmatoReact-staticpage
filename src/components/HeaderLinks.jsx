import React from "react";

const HeaderLinks = () => {
  const listItems = [
    "Home",
    "Whatwedo",
    "Services",
    "Project",
    "Blog",
    "Content",
  ];

  return (
    <div className="w-[645px] h-[20px]">
      <ul className="flex gap-x-[60px] justify-between">
        {listItems.map((item, index) => (
          <li className="text-[16px] font-[400] not-italic leading-[19.78px] hover:scale-110 transition-all duration-300 hover:text-[#2639ED]" key={index}>
            <a href="/">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderLinks;
