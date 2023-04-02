import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";
import { MdOutlineDarkMode, MdRssFeed, MdLightMode } from "react-icons/md";
import { navItems } from "../data/navItems";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [toggle, toggleNav] = useState(false);

  const switchTheme = () => {
    if (darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  };

  return (
    <>
      <Nav>
        <LogoContainer className="logo">
          <Link to="/" className="logo-link">
            <img src="/images/logo2.png" loading="lazy" alt="logo" />
          </Link>
        </LogoContainer>
        <NavigationContainer className="navigation">
          <NavBar>
            <Menu>
              {navItems.map((item) => {
                return (
                  <Item key={item.id}>
                    <Link className="nav-item" to={item.nav}>
                      {item.item}
                    </Link>
                  </Item>
                );
              })}
            </Menu>
          </NavBar>
          <NavIconsContainer>
            <Link
              className={` nav-item icons ${
                darkMode ? "btn-dark" : "btn-light"
              }`}
              onClick={switchTheme}
            >
              {darkMode ? <MdOutlineDarkMode /> : <MdLightMode />}
            </Link>
            <Link className="nav-item icons">
              <MdRssFeed />
            </Link>
          </NavIconsContainer>
        </NavigationContainer>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <li>
            <ScrollLink to="about">About</ScrollLink>
          </li>
          <li>
            <ScrollLink to="trial">Articles</ScrollLink>
          </li>
          <li>
            <ScrollLink to="tutorials">Login</ScrollLink>
          </li>
        </OverlayMenu>
      </Overlay>
    </>
  );
};

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 60%;
`;

const LogoContainer = styled.div`
  display: flex;
  width: 10%;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 20%;
  }
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: center;
  min-width: 70%;
  align-items: center;
  li:nth-child(2) {
    margin: 0px 20px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li`
  list-style: none;
  display: flex;
  font-size: 0.9rem;
  align-items: center;
  justify-content: center;
  padding: 15px;
  cursor: pointer;
  @media (min-width: 769px) {
    list-style: none;
    display: flex;
    font-size: 0.9rem;
    align-items: center;
    justify-content: center;
    padding: 5px;
    cursor: pointer;
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;
  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #000;
  transition: width 0.4s ease-in-out;
  :nth-child(2) {
    width: ${(props) => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${(props) => (props.open ? "91vh" : 0)};
  width: 100vw;
  background: #1c2022;
  transition: height 0.4s ease-in-out;
  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 28%;
  top: 50%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${(props) => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    color: #fff;
    transition: opacity 0.4s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100% !important;
  }
`;

const NavIconsContainer = styled.ul`
  display: flex;
  flex: 3;
  justify-content: center;
  align-items: center;
`;

export default Navbar;
