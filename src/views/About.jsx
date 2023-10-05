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
import { IoMdArrowDropright } from "react-icons/io"

import CodeSnippet2 from "../assets/codes/code-snippet-2.png"

import  Perfil  from "../assets/perfil.jpg"
import { useMediaQuery } from 'react-responsive'

import SnippetMobile from "../assets/snippet-mobile.png"

const About = () => {

  const isMobile = useMediaQuery({ maxWidth: 767 })
  return (
    <>
    {isMobile ? (
      <>
      <section className="about-mobile">
        <p className="about-title">_sobre-mim</p>

      <div className="box-section">      
        <div className="box-info">
        <IoMdArrowDropright fontSize={18} color="#fff" />
          informações pessoais
        </div>
        <div className="box-info">
          <IoMdArrowDropright fontSize={18} color="#fff" />
          interesses
          </div>
        <div className="box-info">
        <IoMdArrowDropright fontSize={18} color="#fff" />
          hobbies
          </div>
        <div className="box-info">
        <IoMdArrowDropright fontSize={18} color="#fff" />
          contatos
          </div>
        </div>

        <div className="text-about-mobile">
          <div className="text-about-mobile-title">
          <p className="info-title">{`//`} informações pessoais</p>
          <p className="bio">{`/`}bio</p>
        </div>

        <p className="text-about-me">
        I have 5 years of experience in web development lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat officia deserunt mollit anim id est laborum.
        </p>
        
        </div>

        <div>
          <p className="title-snippet">// vitrine de trechos de código:</p>

          <div className="snippet-box">
            <div className="name-image">
            <img src={Perfil} alt="foto de perfil" />
            <p className="username">@rogervalentim
            <br></br>
            <span>3 meses atrás</span>
            </p>
            </div>
            <div className="details">
              <FaComments />
              <p>detalhes</p>
            </div>
          </div>

          <div className="snippet-container-mobile">
          <img src ={SnippetMobile} alt="trechos de código" />
          </div>
        </div>


      </section>
      </>
    ): (   
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
    )}
    </>
  )
}

export default About