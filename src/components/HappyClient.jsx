import React from "react";
import Container from "./common/Container";
import profile from "../images/profilepic.jpg";
import group from "../images/Peoplegroup.png";
import Smallcircle from "../svgs/Smallcircle";
import Greysmallcircle from "../svgs/Greysmallcircle";
import Ellipse from "../svgs/Ellipse";
import Dot from "../svgs/Dot";
import Epicircle from "../svgs/epicircle";
import Person1 from "../images/gridimg1.png";
import Person2 from "../images/gridimg2.png";
import Person3 from "../images/gridimg3.png";
import Person4 from "../images/gridimg4.png";
import Person5 from "../images/person5.png";
import Person6 from "../images/gridimg6.png";
import Person7 from "../images/gridimg5.png";
import Person8 from "../images/gridimg8.png";

const HappyClient = () => {
  return (
    <div>
      <Container className="mx-auto pt-[74px] pb-[74px]">
        <div className="flex flex-col">
          <div className="text-center mb-[113px]">
            <h1 className="text-[40px] font-bold">What our happy client say</h1>
            <p className="text-[#757575] text-[18px] ">
              Several selected clients, who already believe in our service.
            </p>
          </div>
          <div className="flex items-center relative">
            <Dot className="absolute top-[-15%] left-[15%] z-[-1]" />
            <Epicircle className="absolute bottom-2 left-[-20px] z-[-4]" />
            <img
              className="rounded-custom w-[325.8px] shadow-custom mr-[48px]"
              src={profile}
              alt=""
            />

            <div className="w-[412px]">
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

            <div class="grid grid-cols-custom grid-rows-custom gap-4 w-[330px]">
              <img
                src={Person1}
                alt=""
                className="rounded-full col-start-1 row-start-2 col-end-4 w-[98px] hover:scale-110 transition-all duration-300 hover:shadow-lg "
              />
              <img
                src={Person2}
                alt=""
                className="rounded-full col-start-3 col-end-6 row-start-1 justify-self-center hover:scale-110 transition-all duration-300 hover:shadow-lg"
              />
              <img
                src={Person3}
                alt=""
                className="rounded-full col-start-6 col-end-8 row-start-2 hover:scale-110 transition-all duration-300 hover:shadow-lg"
              />
              <img
                src={Person8}
                alt=""
                className="rounded-full col-start-3 row-start-3 col-end-7 justify-self-center hover:scale-110 transition-all duration-300 hover:shadow-lg"
              />
              <img
                src={Person5}
                alt=""
                className="rounded-full col-start-3 col-end-6 row-start-6 row-end-8 hover:scale-110 transition-all duration-300 hover:shadow-lg"
              />
              <img
                src={Person6}
                alt=""
                className="rounded-full col-start-1 col-end-4 row-start-5 hover:scale-110 transition-all duration-300 hover:shadow-lg"
              />
              <img
                src={Person7}
                alt=""
                className="rounded-full col-start-5 col-end-8 row-start-5 row-end-7 justify-self-center self-end hover:scale-110 transition-all duration-300 hover:shadow-lg"
              />
              <img
                src={Person4}
                alt=""
                className="rounded-full col-start-6 col-end-9 row-start-3 row-end-5 justify-self-end self-end hover:scale-110 transition-all duration-300 hover:shadow-lg"
              />
            </div>

            <Ellipse className="absolute z-[-1] right-[15%] top-[35%] w-[148px] h-[180px]" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HappyClient;
