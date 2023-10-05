import React from 'react'

import { NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <p>
          Roger-Valentim
        </p>
          <NavLink  to="/">
        <li className="hello-li">
          _Olá
        </li>
          </NavLink>
          <NavLink to="/sobre">
        <li className="about-li">
          _Sobre-mim
        </li>
          </NavLink>
          <NavLink to="/projetos">
        <li className="projects-li">
          _Projetos
        </li>
          </NavLink>
      </ul>
      <NavLink  to="contato">
      <li className="speak-me">
        _Fale Comigo
      </li>
        </NavLink>
    </nav>
  )
}

export default Navbar