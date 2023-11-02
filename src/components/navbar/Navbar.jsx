import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import "./Navbar.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav>
      <ul className="nav-web">
        <p>Roger-Valentim</p>
        <NavLink to="/">
          <li className="hello-li">_Olá</li>
        </NavLink>
        <NavLink to="/sobre">
          <li className="about-li">_Sobre-mim</li>
        </NavLink>
        <NavLink to="/projetos">
          <li className="projects-li">_Projetos</li>
        </NavLink>
      </ul>
      <ul className="nav-web">
      <NavLink to="contato">
        <li className="speak-me">_Fale Comigo</li>
      </NavLink>
      </ul>

      <div className="app__navbar-smallscreen">
        <p>Roger-Valentim</p>

        <GiHamburgerMenu
          color="#607B96"
          fontSize={18}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu &&
          <div className="app__navbar-smallscreen_overlay slide-bottom">
          <div className="close-container">
            <p>Roger-Valentim</p>
            <MdOutlineClose
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
          </div>
            <ul className="app__navbar-smallscreen_links">
                <NavLink to="/" onClick={() => setToggleMenu(false)}>
              <li className="link-navbar">
                  _olá
              </li>
                </NavLink>
                <NavLink to="/sobre" onClick={() => setToggleMenu(false)}>
              <li className="link-navbar">
                  _sobre
              </li>
                </NavLink>
                <NavLink to="/projetos" onClick={() => setToggleMenu(false)}>
              <li className="link-navbar">
                  _projetos
              </li>
                </NavLink>
                <NavLink to="/contato" onClick={() => setToggleMenu(false)}>
              <li className="link-navbar">
                  _contato
              </li>
                </NavLink>
            </ul>
          </div>}
      </div>
    </nav>
  );
};

export default Navbar;
