import React from 'react';

const Card = ({ className, imageSrc, logoBackground, heading, paragraph }) => {
  return (
    <div className={`w-[299.8px] rounded-[40px] shadow-custom  flex flex-col  justify-center items-center bg-white px-[32px] pt-[39px] pb-[57px] ${className}`}>
      <div className="relative mb-[30px]">
        <img className="w-[100px] mx-auto" src={logoBackground} alt="Logo Background" />
        <img className=" absolute top-[10%] left-[50%] transform -translate-x-1/2" src={imageSrc} alt="Logo" />
      </div>
      <div className="text-center">
        <h2 className="text-[24px] font-bold text-gray-800 mb-4 ">{heading}</h2>
        <p className="text-gray-600">{paragraph}</p>
      </div>
    </div>
  );
};

export default Card;
