import React, { useState } from 'react'

import "./Contact.css"

import { BiSolidDownArrow } from "react-icons/bi"
import { BsFillTelephoneFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import { FiExternalLink } from "react-icons/fi"
import { AiOutlineClose } from "react-icons/ai"


const Contact = () => {
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

  const today = new Date().toLocaleDateString()

  return (
    <section className="contact-section">
      <div className="contact-container-info">
      <div className="info-contact">
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
          <form action="">
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
          <code className="yellow" style={{marginLeft: "10px"}}>"{formValues.nome}"</code>
          </li>
          <li >
            <code className="purple" style={{marginLeft: "10px"}} >email:</code>
          <code className="yellow" style={{marginLeft: "10px"}}>"{formValues.email}"</code>
          </li>
          <li>
            <code className="purple" style={{marginLeft: "10px"}} >mensagem:</code>
          <code className="yellow" style={{marginLeft: "10px"}}>"{formValues.mensagem}"</code>
          </li>
          <li >
            <code style={{marginLeft: "10px"}}>data:</code>
          <code className="yellow" style={{marginLeft: "10px"}}>"{today}"</code>
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
  )
}

export default Contact