import React from 'react'

import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi"
import { FaWhatsapp } from "react-icons/fa"

import "./Footer.css"

const Footer = () => {
  return (
    <>
    <footer>
      <ul>
        <p>
          Me encontre no:
        </p>
        <li className="whats-footer" >
          <a href="https://api.whatsapp.com/send/?phone=11970506367&text&type=phone_number&app_absent=0">
          <FaWhatsapp fontSize={20} />
          </a>
        </li>
        <li className="linkedin-footer" >
        <a href="https://www.linkedin.com/in/rogervalentim33/" target="__blank">
          <BiLogoLinkedinSquare fontSize={20} />
          </a>
        </li>
      </ul>
      <a className="footer-github" href="https://github.com/rogervalentim" target="__blank">@rogervalentim<BiLogoGithub fontSize={17} /></a>
    </footer>
    </>
  )
}

export default Footer