import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdOutlineDarkMode, MdRssFeed } from "react-icons/md";
import { navItems } from "../data/navItems";

const Navbar = () => {
  return (
    <NavContainer className="nav-container">
      <NavItemsContainer>
        <LogoContainer className="logo">
          <Link to="/">
            <img src="/images/logo2.png" alt="" />
          </Link>
        </LogoContainer>
        <NavLinksContainer>
          {navItems.map((item) => {
            return (
              <li key={item.id}>
                <Link className="nav-item" to={item.nav}>
                  {item.item}
                </Link>
              </li>
            );
          })}
        </NavLinksContainer>
      </NavItemsContainer>
      <NavIconsContainer>
        <Link className="nav-item icons">
          <MdOutlineDarkMode />
        </Link>
        <Link className="nav-item icons">
          <MdRssFeed />
        </Link>
      </NavIconsContainer>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const NavItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
`;
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
`;

const NavLinksContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;

  li {
    padding: 0px 20px;
    list-style: none;
    text-decoration: none;
  }
`;

const NavIconsContainer = styled.ul`
  display: flex;
  flex: 3;
  justify-content: center;
  align-items: center;
`;

export default Navbar;
