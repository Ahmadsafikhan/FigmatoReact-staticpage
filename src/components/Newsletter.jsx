import React from "react";
import Container from "./common/Container";
import Button from "./common/Button";
import Longrectangle from "../svgs/Longrectangle";
import BluecutRectangle from "../svgs/BluecutRectangle";
import LemonShape from "../svgs/LemonShape";
import Dot from "../svgs/Dot";

const Newsletter = () => {
  return (
    <div>
      <Container className="mx-auto pt-[250px] mb-[250px]">
        <div className="flex items-center">
          {/* First div */}
          <div className="relative ml-[80px]">
            <LemonShape className="absolute w-[158px] top-[75%] left-[-29%] z-[-10]" />
            <Longrectangle className="absolute z-[-10] left-[-80px] top-[-130%] w-[1064px] h-[292px]" />
            <h1 className="text-4xl font-bold leading-1 mb-4">
              Subscribe Newsletter
            </h1>
            <p className="text-base text-gray-600">
              I will update good news and promotion service, not spam.
            </p>
          </div>

          {/* Second div */}
          <div className="flex items-center ml-[115px] relative">
            <Dot className="absolute right-[-30%] top-[-200%]" />
            <BluecutRectangle className="absolute w-[488.1px] right-[-80px]" />
            <div className=" input-field relative">
              <input
                type="text"
                placeholder="Enter your email address.."
                className="ml-[-80px] py-5 pl-[30px] pr-16 rounded-[60px] shadow-custom text-[16px] text-[#959595] w-[480.8px] h-[80px]"
              />
              <Button
                className="absolute right-[10px] top-1/2 transform -translate-y-1/2 px-[40px] py-[15px] bg-[#2639ED] hover:scale-90 transition-all duration-300 hover:shadow-lg"
                label="Contact Now"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Newsletter;
