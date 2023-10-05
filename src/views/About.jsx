import React from 'react'

import "./About.css"

import { BiSolidDownArrow } from "react-icons/bi"
import { BsFolderFill } from "react-icons/bs"
import { ChevronRightSquare } from "lucide-react"
import { PiSoccerBallFill } from "react-icons/pi"
import { IoLogoGameControllerA } from "react-icons/io"
import { MdKeyboardArrowRight } from "react-icons/md"
import { IoIosArrowDown } from "react-icons/io"
import { RiMarkdownFill } from "react-icons/ri"
import { MdEmail } from "react-icons/md"
import { BsFillTelephoneFill } from "react-icons/bs"
import { AiOutlineClose, AiFillStar } from "react-icons/ai" 
import { FaComments } from "react-icons/fa"

import CodeSnippet2 from "../assets/codes/code-snippet-2.png"

import  Perfil  from "../assets/perfil.jpg"

const About = () => {
  return (
    <>
    <section className="about-section">
      <ul className="about-icons">
        <li>
        <ChevronRightSquare color="#607B96"fontSize={25} />
        </li>
        <li>
        <PiSoccerBallFill color="#607B96" fontSize={25} />
        </li>
        <li>
        <IoLogoGameControllerA color="#607B96" fontSize={25} />
        </li>
      </ul>

      <div className="folders-section">
        <div className="info">
        <BiSolidDownArrow fontSize={10} color="#fff"  />
        <p>Informações-pessoais</p>
        </div>
        <ul className="folders-info">
          <li>
            <MdKeyboardArrowRight fontSize={25} />
            <BsFolderFill color="#E99287" className="folder"  />
            <p>
            Bio
            </p>
          </li>
          <li>
            <MdKeyboardArrowRight fontSize={25} />
            <BsFolderFill color="#43D9AD"  className="folder" />
            <p>
            Interesses
            </p>
          </li>
          <li>
          <IoIosArrowDown fontSize={25} />
          <BsFolderFill color="#3A49A4" className="folder" />
          <p>
          Educação
          </p>
          </li>
          <li className="markdown">
            <RiMarkdownFill color="#607B96" />
            <p>
            Escola
            </p>
          </li>
          <li className="markdown">
            <RiMarkdownFill color="#607B96" />
            <p>
            Faculdade
            </p>
          </li>
        </ul>
        <div className="info">
        <BiSolidDownArrow fontSize={10} color="#fff"  />
        <p>Contatos</p>
        </div>
        <ul className="contacts">
          <li>
          <MdEmail color="#607B96"  />
          <p>
          valentim.roger33@gmail.com
          </p>
          </li>
          <li>
          <BsFillTelephoneFill color="#607B96"  />
          <p>
          (11)97050-6367
          </p>
          </li>
        </ul>
      </div>

      <div>
      <div className="info-close">
        <p>
        Informações-pessoais
        </p>
        <AiOutlineClose color="##607B96"  />
        </div>

        <div className="list-about-me">
          <ol>
            <li><p>{`/**`} Sobre Mim</p></li>
            <li><p>{`*`} </p></li>
            <li><p>{`*`}</p></li>
            <li><p>{`*`}</p></li>
            <li><p>{`*`}</p></li>
            <li><p>{`*`}</p></li>
            <li><p>{`*`}</p></li>
            <li><p>{`*`}</p></li>
            <li><p>{`*`}</p></li>
            <li><p>{`*`}</p></li>
            <li><p>{`*`}</p></li>
            <li><p>{`*`}</p></li>
            <li><p>{`*`}</p></li>
            <li><p>{`*`}</p></li>
            <li><p>{`*`}</p></li>
            <li><p>{`*`}</p></li>
            <li><p>{`*`}</p></li>
            <li><p>{`*`}</p></li>
            <li><p>{`*`}</p></li>
          </ol>
        </div>
      </div>

    <div className="retangule" />

    <div className="codes">
      <div className="border-top" />
      <p>
      {`//`} vitrine de trechos de código
      </p>

      <div className="codes-details">
        <div className="code-details-container">
        <img src={Perfil} alt="foto do perfil" />
        <span className="name">
          @rogervalentim
        <br></br>
        <code className="date">Criado a 5 meses atrás</code>
        </span>
        </div>
        <ul>
          <li>
          <FaComments  />
          details
          </li>
          <li style={{ marginLeft: "18px"}}>
          <AiFillStar />
            0
          estrelas
          </li>
        </ul>
      </div>
      <div className="img-code-container">
        <img src={CodeSnippet2} alt="foto do código" />
      </div>
    </div>

    <div className="retangule" />


    </section>
    </>
  )
}

export default About