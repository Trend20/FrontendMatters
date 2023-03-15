import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "../data/navItems";

const Navbar = () => {
  return (
    <div className="nav-container">
      <ul>
        {navItems.map((item) => {
          return (
            <li key={item.id}>
              <Link className="nav-item">{item.item}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
