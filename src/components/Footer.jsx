import React from "react";
import HeaderLogo from "./HeaderLogo";
import Container from "./common/Container";
import Facebook from "../svgs/Facebook";
import Twitter from "../svgs/twitter";
import Linkedin from "../svgs/Linkedin";
import Row from "./common/Row";
import styled from "styled-components";

const Footer = () => {
  return (
    <footer>
      <Container className="mx-auto">
        <hr />
        <div className="pt-[63px]">
          <div className="container mx-auto">
            <div className="flex font-bold justify-between">
              <div className="max-w-[270px]">
                <HeaderLogo text="Studios" className="mb-[26px]" />
                <p className="text-[14px] font-normal text-[#565656] mb-[40px]">
                  Leading digital agency with solid design and development
                  expertise. We build readymade websites, mobile applications,
                  and elaborate online business services.
                </p>
                <Row className="gap-x-[20px] mb-[29px]">
                  <IconHover aria-label="Facebook">
                    <Facebook />
                  </IconHover>
                  <IconHover aria-label="Twitter">
                    <Twitter />
                  </IconHover>
                  <IconHover aria-label="LinkedIn">
                    <Linkedin />
                  </IconHover>
                </Row>
              </div>
              <nav className="flex gap-x-[75px]">
                <div>
                  <h1 className="text-[20px] mb-[24px] font-bold">
                    What We Do
                  </h1>
                  <ul className="leading-[30px] font-normal">
                    <li>
                      <a href="/" className="text-[14px]">
                        Web Design
                      </a>
                    </li>
                    <li>
                      <a href="/">App Design</a>
                    </li>
                    <li>
                      <a href="/" className="text-[14px]">
                        Social Media Manage
                      </a>
                    </li>
                    <li>
                      <a href="/" className="text-[14px]">
                        Market Analysis Project
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-[20px] mb-[24px] font-bold">Company</h1>
                  <ul className="leading-[30px] font-normal">
                    <li>
                      <a href="/" className="text-[14px]">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="/" className="text-[14px]">
                        Career
                      </a>
                    </li>
                    <li>
                      <a href="/" className="text-[14px]">
                        Become Investor
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-[20px] mb-[24px] font-bold">Support</h1>
                  <ul className="leading-[30px] font-normal">
                    <li>
                      <a href="/" className="text-[14px]">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="/" className="text-[14px]">
                        Policy
                      </a>
                    </li>
                    <li>
                      <a href="/" className="text-[14px]">
                        Business
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-[20px] mb-[24px] font-bold">Contact</h1>
                  <ul className="leading-[30px] font-normal">
                    <li>
                      <a href="/" className="text-[14px]">
                        Whatsapp
                      </a>
                    </li>
                    <li>
                      <a href="/" className="text-[14px]">
                        Support 24
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            <hr />
            <div className="text-center mt-[17px] mb-[24px]">
              <p className="text-[14px] text-[#A4A4A4]">
                Copyright ©{new Date().getFullYear()} All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

const IconHover = styled.div`
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export default Footer;
