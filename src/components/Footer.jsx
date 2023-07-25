import React from "react";
import HeaderLogo from "./HeaderLogo";
import Container from "./common/Container";
import Facebook from "../svgs/Facebook";
import Twitter from "../svgs/twitter";
import Linkedin from "../svgs/Linkedin";
import Row from "./common/Row";
import styled from "styled-components";
import FooterList from "./common/FooterList";
import footerData from "../FooterData";

const Footer = () => {
  return (
    <footer>
      <Container className="mx-auto">
        <hr />
        <div className="pt-[63px]">
          <div className="container mx-auto">
            <div className="flex font-bold justify-between">
              <div className="max-w-[270px]">
                <HeaderLogo text="Studios" className="mb-[26px] text-2xl" />
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
                {footerData.map((section, index) => (
                  <div key={index}>
                    <h1 className="text-[20px] mb-[24px] font-bold">
                      {section.title}
                    </h1>
                    <ul className="leading-[30px] font-normal">
                      {section.links.map((links, index) => (

                        <li key={index}>
                          <a className="text-[14px]" href={links.href}>
                            {links.label}
                          </a>
                        </li>
                ))}
                    </ul>
                  </div>
                ))}
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
