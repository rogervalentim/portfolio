import React, { useState } from 'react'

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
  const [showInfo, setShowInfo] = useState(false)
  const  [showIcons, setShowIcons] = useState(false)
  const [showContacts, setShowContacts] = useState(false)

  const toggleInfo = () => {
    setShowInfo(!showInfo)
    setShowIcons(false)
    setShowContacts(false)
  }

  const toggleIcons = () => {
    setShowIcons(!showIcons)
    setShowInfo(false)
    setShowContacts(false)
  }

  const toggleContacts = () => {
    setShowIcons(false)
    setShowInfo(false)
    setShowContacts(!showContacts)
  }

  const isMobile = useMediaQuery({ maxWidth: 767 })
  return (
    <>
    {isMobile ? (
      <>
      <section className="about-mobile">
        <p className="about-title">_sobre-mim</p>

      <div className="box-section">      
        <div className="box-info">
        <IoMdArrowDropright fontSize={18} color="#fff" onClick={toggleInfo} />
          informações pessoais
        </div>

      {showInfo && (
        <ul className="folders-info">
          <li>
            <MdKeyboardArrowRight fontSize={16} />
            <BsFolderFill color="#E99287" className="folder"  />
            <p>
            Bio
            </p>
          </li>
          <li>
            <MdKeyboardArrowRight fontSize={16} />
            <BsFolderFill color="#43D9AD"  className="folder" />
            <p>
            Interesses
            </p>
          </li>
          <li>
          <IoIosArrowDown fontSize={16} />
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
      )}

        <div className="box-info">
        <IoMdArrowDropright fontSize={18} color="#fff" onClick={toggleIcons} />
          hobbies
          </div>

     {showIcons && (
      <ul className="about-icons-mobile">
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
     )}

        <div className="box-info">
        <IoMdArrowDropright fontSize={18} color="#fff" onClick={toggleContacts} />
          contatos
          </div>

          {showContacts && (
              <ul className="contacts-ul">
              <li>
              <MdEmail fontSize={12} color="#607B96"  />
              <p>
              valentim.roger33@gmail.com
              </p>
              </li>
              <li>
              <BsFillTelephoneFill fontSize={12} color="#607B96"  />
              <p>
              (11)97050-6367
              </p>
              </li>
            </ul>    
        )}
          
        </div>

        <div className="text-about-mobile">
          <div className="text-about-mobile-title">
          <p className="info-title">{`//`} informações pessoais</p>
          <p className="bio">{`/`}bio</p>
        </div>

        <p className="text-about-me">
        Sou um apaixonado desenvolvedor frontend com uma habilidade especial para transformar conceitos criativos em interfaces digitais interativas e intuitivas. Minha jornada no mundo do desenvolvimento web começou com a curiosidade de entender como as páginas da web ganham vida, e desde então, tenho dedicado minha carreira a aprimorar minhas habilidades e aprimorar minhas técnicas no universo frontend.
        Minha paixão pelo desenvolvimento frontend vai além do código; é sobre criar experiências digitais significativas que deixam uma marca duradoura nos usuários. Estou sempre ansioso para enfrentar novos desafios e aprender novas tecnologias para aprimorar minhas habilidades. Se você está procurando um desenvolvedor frontend dedicado, inovador e orientado para resultados, estou pronto para colaborar e levar seus projetos ao próximo nível. Vamos criar algo incrível juntos!
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
            <li><p>{`*`}Sou um apaixonado desenvolvedor frontend com  </p></li>
            <li><p>{`*`}uma habilidade especial para transformar </p></li>
            <li><p>{`*`}conceitos criativos em interfaces digitais</p></li>
            <li><p>{`*`}interativas e intuitivas. Minha jornada no</p></li>
            <li><p>{`*`}mundo do  desenvolvimento web  começou com a</p></li>
            <li><p>{`*`}curiosidade de entender como as páginas da web</p></li>
            <li><p>{`*`}ganham vida, e desde então,  tenho dedicado</p></li>
            <li><p>{`*`}minha carreira a aprimorara aprimorar minhas</p></li>
            <li><p>{`*`}habilidades e aprimorar minhas técnicas no</p></li>
            <li><p>{`*`}Minha paixão pelo desenvolvimento frontend vai</p></li>
            <li><p>{`*`}além do código; é sobre criar experiências </p></li>
            <li><p>{`*`}digitais significativas que deixam uma marca</p></li>
            <li><p>{`*`}duradoura nos usuários. Estou sempre animado</p></li>
            <li><p>{`*`}para enfrentar novos desafios e aprender </p></li>
            <li><p>{`*`}novas tecnologias para aprimorar minhas</p></li>
            <li><p>{`*`}habilidades.Se você está procurando um</p></li>
            <li><p>{`*`}desenvolvedor frontend dedicado, inovador e</p></li>
            <li><p>{`*`}orientado  para resultados, estou pronto para</p></li>
            <li><p>{`*`}colaborar e levar seus projetos ao próximo</p></li>
            <li><p>{`*`}nível. Vamos criar algo incrível juntos!</p></li>
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