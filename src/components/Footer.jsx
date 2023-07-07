import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <FooterContainer className="footer">
        <FooterLogo className="footer-logo">
          <Link>
            <img src="/images/logo2.png" loading="lazy" alt="footer-logo" />
          </Link>
        </FooterLogo>
      </FooterContainer>
      <p style={{ textAlign: "center", padding: "20px 0px" }}>
        © 2022-present FrontendMatters. All Rights Reserved.
      </p>
    </>
  );
};

export default Footer;

// styles
const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  // background: #f0f4f5;
  margin-top: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 20px;
    justify-content: flex-start;
    margin-top: 30px;
  }
`;
const FooterLogo = styled.div`
  display: flex;
  width: 10%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
  }

  p {
    font-size: 0.8rem;
    width: 100%;
    margin-top: -25px;

    @media (max-width: 768px) {
      width: 40%;
      // margin-top: px;
    }
  }

  img {
    max-width: 100%;

    @media (max-width: 768px) {
      width: 40%;
    }
  }
`;

const FooterLinks = styled.div`
  display: flex;
  width: 40%;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 30px;
  }
`;

const FooterTopics = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 40%;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 40%;
  }
`;
