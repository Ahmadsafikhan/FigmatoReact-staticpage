import React from "react";
import heroImage from "../images/heroimag.png";
import circleImage from "../images/Eplisehero.png";
import rectangleImage from "../images/Rectanglehero.png";
import dots from "../images/dots.png";
import Dot from "../svgs/Dot";
import Button from "./common/Button";
import Container from "./common/Container";
import Row from "./common/Row";

const HeroSection = () => {
  return (
    <div className="overflow-hidden">
      <Container className="mx-auto">
        <Row className='justify-between items-center relative'>
        
          <div className="flex-shrink-0" style={{ flexBasis: "40%" }}>
            <h1 className="text-[40px] font-bold mb-[40px] whitespace-nowrap ">
              A Digital Product Agency
            </h1>
            <p className="mb-[33px] text-[#565656]">
              Leading digital agency with solid design and development
              expertise. We build readymade websites, mobile applications, and
              elaborate online business services.
            </p>
            <Button
              label="Contact Now"
              className=" px-[40px] py-[15px] bg-[#2639ED]  hover:scale-110 transition-all duration-300 hover:shadow-lg"
            />

            <div className="flex absolute bottom-[15px] left-[-45px] -z-10">
              <Dot className="w-[174px] mr-[13px]" />
              <Dot className="w-[174px]" />
            </div>
          </div>
          <div className="relative" style={{ height: "550px" }}>
            <img
              src={circleImage}
              alt=""
              className="absolute top-0 left-[35px] w-[129px]"
            />
            <img
              src={rectangleImage}
              alt=""
              className="absolute bottom-[35px] right-0 w-[178px] z-[-1]"
            />
            <img
              src={heroImage}
              alt=""
              className="w-[670px] relative left-[93px]"
            />
          </div>
          </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
