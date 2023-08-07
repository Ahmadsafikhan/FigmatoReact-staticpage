import React, { forwardRef } from "react";
import searchBox from "../images/box-search 1.png";
import FileImagebackground from "../images/Rectangle 28.png";
import FileImage from "../images/empty-wallet 1.png";
import SearchLogoBackground from "../images/Rectanglebackground.png";
import codeLogoBackground from "../images/codelogobackground.png";
import codelogo from "../images/code-1 1.png";
import chartSquareBackground from "../images/chartsquarebackground.png";
import chartSquare from "../images/chart-square 1.png";
import businessRectangle from '../images/Rectangle 25.png'
import Card from "./common/Card";
import Dot from "../svgs/Dot";
import RectangleBlue from "../svgs/RectangleBlue";
import Container from "./common/Container";
import Epicircle from "../svgs/epicircle";


const BusinessHelp = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="overflow-hidden">
      <Container className='pt-[125px] pb-[105px] mx-auto'>
      {/* <div className="w-[1100px] mx-auto py-[55px]"> */}
        <div className="flex  items-center relative">
          <div className="w-[377.04px] relative">
            <img src={businessRectangle} alt="z-index-logo" className="absolute z-[-1] top-[-35%] left-[-10%] w-[158px]"  />
            <h1 className="text-[40px] font-bold leading-[1] mb-[30px] ">
              How can we help your Business ?
            </h1>
            <p className="text-[16px] text-[#565656]">
              We build readymade websites, mobile applications, and elaborate
              online business services.
            </p>
            <div className="flex absolute left-0 bottom-[-165%] -z-10">
              {/* <img src={dots} alt="" className="w-[174px] mr-[13px]" /> */}
              <Dot className="w-[174px] mr-[13px]" />
              <Dot className="w-[174px]" />
              {/* <img src={dots} alt="" className="w-[174px]" /> */}
            </div>
          </div>

          <div className="flex flex-col ml-[91px]">
            <div className="flex relative">
              <Card
                className="mr-[34px] mb-[30px]"
                imageSrc={searchBox}
                logoBackground={SearchLogoBackground}
                heading="Business Idea Planning"
                paragraph="We present you a proposal and discuss niffty-gritty like"
              />
              <Card
              className="mb-[30px] absolute top-[-20%] left-[100%]"
                imageSrc={FileImage}
                logoBackground={FileImagebackground}
                heading="Financial Planning System"
                paragraph="Protocols apart from aengage models, pricing billing"
              />
            </div>

            <div className="flex relative">
              <Card
                className="mr-[34px]"
                imageSrc={codelogo}
                logoBackground={codeLogoBackground}
                heading="Development Website and App"
                paragraph="Communication protocols apart from engagement models"
              />
              <Card
               className="absolute top-[-20%] left-[100%]"
                imageSrc={chartSquare}
                logoBackground={chartSquareBackground}
                heading="Market Analysis Project"
                paragraph="Protocols apart from aengage models, pricing billing"
              />
            </div>
            <RectangleBlue className="absolute z-[-2] left-[24%] top-[10%] w-[931.51px] h-[619px]" />
     <Epicircle className='absolute bottom-[4%] right-[-3%] z-[-10]' />
          </div>
        </div>
      {/* </div> */}
      </Container>
    </div>
  );
});

export default BusinessHelp;
