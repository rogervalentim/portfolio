import { useState } from 'react'

import "./About.css"

import { BiSolidDownArrow } from "react-icons/bi"
import { ChevronRightSquare } from "lucide-react"
import { PiSoccerBallFill } from "react-icons/pi"
import { IoLogoGameControllerA } from "react-icons/io"
import { MdEmail } from "react-icons/md"
import { BsFillTelephoneFill } from "react-icons/bs"
import { AiOutlineClose } from "react-icons/ai"
import { FaComments } from "react-icons/fa"
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io"

import CodeSnippet2 from "../../assets/codes/code-snippet-2.png"

import Perfil from "../../assets/perfil.jpg"

import { useMediaQuery } from 'react-responsive'

import SnippetMobile from "../../assets/snippet-mobile.png"

import PersonalInfo from '../../components/PersonalInfo'
import TextAboutMe from '../../components/TextAboutMe'
import ContactsInfo from '../../components/ContactsInfo'

const About = () => {
  const [showInfo, setShowInfo] = useState(false)
  const [showIcons, setShowIcons] = useState(false)
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

  const isMobile = useMediaQuery({ maxWidth: 768 })
  return (
    <>
      {isMobile ? (
        <>
          <section className="about-mobile">
            <p className="about-title">_sobre-mim</p>

            <div className="box-section">
              <div className="box-info">
                {showInfo ? <IoMdArrowDropdown fontSize={18} color="#fff" onClick={toggleInfo} /> :
                  <IoMdArrowDropright fontSize={18} color="#fff" onClick={toggleInfo} />
                }
                informações pessoais
              </div>

              {showInfo && (
                <PersonalInfo />
              )}

              <div className="box-info">
              {showIcons ? <IoMdArrowDropdown fontSize={18} color="#fff" onClick={toggleIcons} /> :
                  <IoMdArrowDropright fontSize={18} color="#fff" onClick={toggleIcons} />
                }
                hobbies
              </div>

              {showIcons && (
                <ul className="about-icons-mobile">
                  <li>
                    <ChevronRightSquare className="rotate-icon" color="#607B96" fontSize={25} />
                  </li>
                  <li>
                    <PiSoccerBallFill className="rotate-icon" color="#607B96" fontSize={25} />
                  </li>
                  <li>
                    <IoLogoGameControllerA className="rotate-icon" color="#607B96" fontSize={25} />
                  </li>
                </ul>
              )}

              <div className="box-info">
              {showContacts ? <IoMdArrowDropdown fontSize={18} color="#fff" onClick={toggleContacts} /> :
                  <IoMdArrowDropright fontSize={18} color="#fff" onClick={toggleContacts} />
                }
                contatos
              </div>

              {showContacts && (
                <ul className="contacts-ul">
                  <li>
                    <MdEmail fontSize={12} color="#607B96" />
                    <p>
                      valentim.roger33@gmail.com
                    </p>
                  </li>
                  <li>
                    <BsFillTelephoneFill fontSize={12} color="#607B96" />
                    <p>
                      {"(11)26567588"}
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
              <p className="title-snippet">{`// vitrine de trechos de código:`}</p>

              <div className="snippet-box">
                <div className="name-image">
                  <img src={Perfil} alt="foto de perfil" />
                  <p className="username">@rogervalentim
                    <br></br>
                  </p>
                </div>
                <div className="details">
                  <FaComments />
                  <a className='link-details-mobile' href="https://github.com/rogervalentim/portfolio" target="__blank">
                  detalhes
                  </a>
                </div>
              </div>

              <div className="snippet-container-mobile">
                <img src={SnippetMobile} alt="trechos de código" />
              </div>
            </div>


          </section>
        </>
      ) : (
        <>
          <section className="about-section">
            <ul className="about-icons">
              <li>
                <ChevronRightSquare className="rotate-icon" color="#607B96" fontSize={25} />
              </li>
              <li>
                <PiSoccerBallFill className="rotate-icon" color="#607B96" fontSize={25} />
              </li>
              <li>
                <IoLogoGameControllerA className="rotate-icon" color="#607B96" fontSize={25} />
              </li>
            </ul>

            <div className="folders-section">
              <div className="info">
                <BiSolidDownArrow fontSize={10} color="#fff" />
                <p>Informações-pessoais</p>
              </div>

              <PersonalInfo />
              
               <ContactsInfo />
            </div>

            <div>
              <div className="info-close">
                <p>
                  Informações-pessoais
                </p>
                <AiOutlineClose color="##607B96" />
              </div>

                <TextAboutMe />
            </div>

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
                  </span>
                </div>
                <ul>
                  <li>
                  <a  href="https://github.com/rogervalentim/portfolio" target="__blank">
                    <FaComments />
                    detalhes
                  </a>
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