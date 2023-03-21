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
          <p className="footer-text">Welcome again!</p>
        </FooterLogo>
        <FooterLinks>
          <FooterTopics className="Topics">
            <p className="footer-text">Topics</p>
            <Link className="nav-item">React</Link>
            <Link className="nav-item">HTML</Link>
            <Link className="nav-item">CSS</Link>
            <Link className="nav-item">NextJS</Link>
            <Link className="nav-item">Javascript</Link>
            <Link className="nav-item">Best Practices</Link>
          </FooterTopics>
          <SocialLinks className="social-links">
            <p className="footer-text">Social Links</p>
            <Link className="nav-item">Twitter</Link>
            <Link className="nav-item">Contact</Link>
            <Link className="nav-item">Privacy Policy</Link>
          </SocialLinks>
        </FooterLinks>
      </FooterContainer>
      <p className="copyright">
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
  padding: 70px;
  justify-content: space-between;
  background: #f0f4f5;
  margin-top: 50px;
`;
const FooterLogo = styled.div`
  display: flex;
  width: 10%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 0.8rem;
    width: 100%;
    margin-top: -25px;
  }

  img {
    max-width: 100%;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  width: 40%;
  justify-content: center;
  align-items: flex-start;
`;

const FooterTopics = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  justify-content: center;
  align-items: flex-start;
`;
