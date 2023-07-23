import React from "react";
import google from "../images/Google Logo.png";
import uber from "../images/Uber Eats Logo.png";
import amazon from "../images/Amazon Logo.png";
import airbnb from "../images/Airbnb Logo.png";
import Container from "./common/Container";

const Client = () => {
  return (
    <div>
      <Container className='mx-auto py-[40px]'>
        <div className="flex items-center">
          <div className="w-[310.7px]">
            <h1 className="text-[40px] font-bold h-[49px] mb-[17px]">Our Client</h1>
            <p className="text-[18px] text-[#565656] font-normal h-[58px]">
              Several selected clients, who already believe in our service.
            </p>
          </div>
          <div className="flex items-center gap-x-[60px] ml-[60px] mt-[50px]">
            <img src={google} alt="" className="w-[133.76px] h-[43.89px]" />
            <img src={airbnb} alt="" className="w-[147.93px] h-[46.35px]" />
            <img src={uber} alt="" className="w-[147.93px] h-[24.65px]" />
            <img src={amazon} alt="" className="w-[129.83px] h-[37.88px] mt-3" /> {/* Added mt-2 to move it slightly down */}
          </div>
        </div>
        </Container>
    </div>
  );
};

export default Client;
