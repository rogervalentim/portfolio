import { BiSolidDownArrow } from "react-icons/bi"
import { BsFillTelephoneFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md"

import "./ContactsInfo.css"

const ContactsInfo = () => {
    return (
        <>
            <div className="info">
                <BiSolidDownArrow fontSize={10} color="#fff" />
                <p>Contatos</p>
            </div>
            <ul className="contacts">
                <li>
                    <MdEmail color="#607B96" />
                    <p>
                        valentim.roger33@gmail.com
                    </p>
                </li>
                <li>
                    <BsFillTelephoneFill color="#607B96" />
                    <p>
                        {"(11)26567588"}
                    </p>
                </li>
            </ul>
        </>
    )
}

export default ContactsInfo