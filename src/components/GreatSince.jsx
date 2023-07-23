import React from "react";
import video from "../images/moviepic.jpg";
import rectangle from "../images/Rectangle 26.png";
import playButton from "../images/play-rounded-button 1.png";
import Ellipse from "../svgs/Ellipse";
import Container from "./common/Container";

const GreatSince = () => {
  return (
    <div className=" py-[40px]">
      <Container className="mx-auto">
        <div className="flex items-center justify-between relative">
          <div className="relative">
            <img
              src={playButton}
              alt=""
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-all duration-300 hover:shadow-lg cursor-pointer" 
            />
            <img
              className="w-[488.95px] rounded-[20px] shadow-xl "
              src={video}
              alt=""
            />
            <Ellipse className="absolute bottom-[-55px] right-[-50px] w-[129px] z-[-1]" />
          </div>

          <div className=" w-[472.94px] relative">
            <img
              src={rectangle}
              alt=""
              className="absolute z-[-1] top-[-20px] left-[-35px]"
            />
            <h1 className="text-[40px] font-bold mb-[30px] leading-[1.25]">
              Great Digital Product Agency since 2016
            </h1>
            <p className="text-[#565656] text-[16px] font-normal w-[472.89px]">
              Our Business Plan is a written document describing a company's
              core business activities, Objectives, and how it plans to achieve
              its goals. Our goal is to provide our client high-quality Product
              with a modern idea accordingly to their budgets and according to
              their requirements.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GreatSince;
