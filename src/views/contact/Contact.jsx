import React, { useState } from 'react'
import { useForm } from "react-hook-form";

import "./Contact.css"

import { BiSolidDownArrow } from "react-icons/bi"
import { BsFillTelephoneFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import { FiExternalLink } from "react-icons/fi"
import { AiOutlineClose, AiOutlineDownload  } from "react-icons/ai"
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io"

import Curriculum from "../../assets/CV-ROGER-VALENTIM-DA-SILVA.pdf"

import { useMediaQuery } from 'react-responsive'
import ContactsInfo from '../../components/ContactsInfo';

const Contact = () => {
  const [showContacts, setShowContacts] = useState(false)

  const [showPerfil, setShowPerfil] = useState(false)

  const [showCurriculo, setShowCurriculo] = useState(false)

  const [formValues, setFormValues] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

    const {
      register,
      trigger,
    } = useForm();
  
    const onSubmit = async (e) => {
      const isValid = await trigger();
      if (!isValid) {
        e.preventDefault();
      }
    };
  
    const today = new Date().toLocaleDateString("pt-BR")

  const isMobile = useMediaQuery({maxWidth: 767})

  const toggleContacts = () => {
    setShowContacts(!showContacts)
    setShowPerfil(false)
    setShowCurriculo(false)
  }

  const togglePerfil = () => {
    setShowPerfil(!showPerfil)
    setShowContacts(false)
    setShowCurriculo(false)
  }
  
  const toggleCurriculo = () => {
    setShowCurriculo(!showCurriculo)
    setShowContacts(false)
    setShowPerfil(false)
  }

  return (
    <>
    {isMobile ? (
      <>
      <section className="contact-mobile">
        <p className="contact-mobile-title">
          _fale comigo
        </p>
        
        <div className="box-section">      
        <div className="box-info">
        {showContacts ? <IoMdArrowDropdown fontSize={18} color="#fff" onClick={toggleContacts} /> : 
        <IoMdArrowDropright fontSize={18} color="#fff" onClick={toggleContacts} />
      }
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
    
        <div className="box-info">
        {showPerfil ? <IoMdArrowDropdown fontSize={18} color="#fff" onClick={togglePerfil} /> : 
        <IoMdArrowDropright fontSize={18} color="#fff" onClick={togglePerfil} />
      }
          me encontre também no
        </div>

        {showPerfil && (
        <ul className="links-find">
         <li>
          <FiExternalLink fontSize={18} color="#607B96" />
          <a href="https://www.linkedin.com/in/rogervalentim33/" target="__blank">Perfil do Likedin</a>
          </li>
        </ul>
        )}


    <div className="box-info">
    {showCurriculo ? <IoMdArrowDropdown fontSize={18} color="#fff" onClick={toggleCurriculo} /> : 
        <IoMdArrowDropright fontSize={18} color="#fff" onClick={toggleCurriculo} />
      }
          curriculo
        </div>

  {showCurriculo && (
   <ul className="curriculo-container">
       <li className="curriculo-link" href="#"><AiOutlineDownload fontSize={20} color="#607B96" /><a href={Curriculum} target="__blank">Baixar curriculo</a></li>
       </ul> 
  )}
        </div>

        <form className="form-mobile">
          <label htmlFor="">
            _nome:
          </label>

          <input type="text" name="nome" id="nome" />

          <label htmlFor="">
            _email:
          </label>

          <input type="email" name="email" id="email" />

          <label htmlFor="">
            _mensagem:
          </label>

          <textarea name="mensagem" id="mensagem" cols="30" rows="10"></textarea>

          <button type="submit">
            enviar mensagem
          </button>
        </form>
      </section>
      </>
    ) : (
      <>
        <section className="contact-section">
      <div className="contact-container-info">
        <ContactsInfo />
      {/* <div className="info-contact">
        <BiSolidDownArrow fontSize={10} color="#fff"  />
        <p>Contatos</p>
        </div>
        <ul className="contacts-ul">
          <li>
          <MdEmail fontSize={18} color="#607B96"  />
          <p>
          valentim.roger33@gmail.com
          </p>
          </li>
          <li>
          <BsFillTelephoneFill fontSize={18} color="#607B96"  />
          <p>
          (11)97050-6367
          </p>
          </li>
        </ul> */}

        <div className="info-curriculum">
        <BiSolidDownArrow fontSize={10} color="#fff"  />
        <p>Curriculo</p>
        </div>
 

       <ul className="curriculo-container">
       <li className="curriculo-link" href="#"><AiOutlineDownload fontSize={20} color="#607B96" /><a href={Curriculum} target="__blank">Baixar curriculo</a></li>
       </ul>

        <div className="find-me-also">
        <BiSolidDownArrow fontSize={10} color="#fff"  />
        <p>Me encontre também no</p>

        </div>
        <ul className="links-find">
         <li>
          <FiExternalLink fontSize={18} color="#607B96" />
          <a href="https://www.linkedin.com/in/rogervalentim33/" target="__blank">Perfil do Likedin</a>
          </li>
        </ul>
        </div>

      <div>
        <div className="window-contact">
        <p>
        contatos
        </p>
        <AiOutlineClose color="##607B96"  />
        </div>

      <div className="contact-container-form">
        <div className="form-contact">
          <form 
            method="POST"  
            action="https://formsubmit.co/2c7272e290e3a0edfd38242fcde1b487"
            onSubmit={onSubmit}
            >
            <label htmlFor="">_nome:</label>
            <input type="text" name="nome" id="nome" value={formValues.nome} onChange={handleInputChange} required />

            <label htmlFor="">_email:</label>
            <input type="email" name="email" id="email" value={formValues.email} onChange={handleInputChange} required />

            <label htmlFor="">_mensagem:</label>
            <textarea   rows={4}
              cols={50} 
              value={formValues.mensagem} onChange={handleInputChange}
              name="mensagem"
              required
              />

            <button type="submit">enviar mensagem</button>
          </form>
        </div>

        <div className="text-form">
        <ol>
          <li><code className="const">const</code>
            <code className="purple">button</code>
            =
            <code className="purple">document</code><code>.</code><code className="purple-1">querySelector</code><code>{`(`}</code><code className="yellow">'#sendBtn'</code><code>{`)`};</code>
          </li>
          <li></li>
          <li><code className="const">const</code>
          <code className="purple">button</code>
          <code>=</code>
          <code style={{marginLeft: "5px"}}>{`{`}</code>
          </li>
          <li>
            <code className="purple" style={{marginLeft: "10px"}} >nome:</code>
          <code className="yellow" style={{marginLeft: "10px"}}>{formValues.nome}</code>
          </li>
          <li >
            <code className="purple" style={{marginLeft: "10px"}} >email:</code>
          <code className="yellow" style={{marginLeft: "10px"}}>{formValues.email}</code>
          </li>
          <li>
            <code className="purple" style={{marginLeft: "10px"}} >mensagem:</code>
          <code className="yellow" style={{marginLeft: "10px"}}>{formValues.mensagem}</code>
          </li>
          <li >
            <code style={{marginLeft: "10px"}}>data:</code>
          <code className="yellow" style={{marginLeft: "10px"}}>{today}</code>
          </li>
          <li>
          <code style={{marginLeft: "5px"}}>{`}`}</code>
          </li>
          <li>
          </li>
          <li>
          <code className="purple" style={{marginLeft: "10px"}} >button</code><code>.</code>
          <code className="purple">addEventListener</code>
          <code>{`(`}</code>
          <code className="yellow">{`'click'`}</code>
          <code>,</code>
          <code  style={{marginLeft: "5px"}}>{`()`}</code>
          <code  style={{marginLeft: "10px"}} className="const">
            {`=>`}
          </code>
          <code  style={{marginLeft: "10px"}}>{`{`}</code>
          </li>
          <li>
          <code  style={{marginLeft: "20px"}} className="purple">form</code>
          <code>.</code>
          <code className="purple">send</code>
          <code>{`(`}</code>
          <code className="purple">mensagem</code>
          <code>{`)`}</code><code>;</code>
          </li>
          <li>
          <code>{`})`}</code>  
          </li>
        </ol> 

        </div>

        <div className="retangule-contact" />
        </div>
        </div>


    </section>
      </>
    )}
    </>
  )
}

export default Contact