import React from "react";
import Container from "./common/Container";
import profile from "../images/profilepic.jpg";
import group from "../images/Peoplegroup.png";
import Smallcircle from "../svgs/Smallcircle";
import Greysmallcircle from "../svgs/Greysmallcircle";
import Ellipse from "../svgs/Ellipse";
import Dot from "../svgs/Dot";
import Epicircle from "../svgs/epicircle";

const HappyClient = () => {
  return (
    <div>
      <Container className="mx-auto pt-[74px] pb-[74px">
        <div className="flex flex-col">
          <div className="text-center mb-[113px]">
            <h1 className="text-[40px] font-bold">What our happy client say</h1>
            <p className="text-[#757575] text-[18px] ">
              Several selected clients, who already believe in our service.
            </p>
          </div>
          <div className="flex items-center relative">

            <Dot className='absolute top-[-15%] left-[15%] z-[-1]' />
            <Epicircle className='absolute bottom-2 left-[-20px] z-[-4]' />
            <img
              className="rounded-custom w-[325.8px] shadow-custom mr-[48px]"
              src={profile}
              alt=""
            />

            <div>
              <h1 className="text-[24px] mb-[20px] font-bold">Matthew Paul</h1>
              <p className="text-[16px] text-[#565656] mb-[40px]">
                Perfect, very good job! Thank you for the amazing design and
                work. Really impressed with the high quality and quick
                turnaround time. Highly recommend.
              </p>
              <div className="flex gap-x-[20px]">
                <Smallcircle />
                <Greysmallcircle />
                <Greysmallcircle />
                <Greysmallcircle />
                <Greysmallcircle />
              </div>
            </div>

            <img src={group} className="w-[309.3px]" alt="" />
            <Ellipse className='absolute z-[-1] right-[15%] top-[35%]' />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HappyClient;
