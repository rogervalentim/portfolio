import { useState } from 'react'
import { BsFolderFill } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { RiMarkdownFill } from 'react-icons/ri';

import Certificado from "../assets/certificado-dh.jpg"
import CertificadoFudamentosProgramacao from "../assets/fundamentos-programação.pdf"


const PersonalInfo = () => {

    const [bioContent, setBioContent] = useState(false);
    const [showInterests, setShowInterests] = useState(false);
    const [showEducation, setShowEducation] = useState(false)

    const toggleBio = () => {
        setBioContent(!bioContent)
    }


    const toggleInterests = () => {
        setShowInterests(!showInterests)
    }

    const toggleEducation = () => {
        setShowEducation(!showEducation)
    }


    return (
        <>
            <ul className="folders-info">
                <li onClick={toggleBio}>
                    {bioContent ?
                        <IoIosArrowDown className={bioContent ? 'active-folder' : ''} fontSize={20} />
                        :
                        <MdKeyboardArrowRight fontSize={25} />
                    }
                    <BsFolderFill color="#E99287" className="folder" />
                    <p className={bioContent ? 'active-folder' : ''} >
                        Bio
                    </p>
                </li>
                {bioContent && (
                    <div className="bio-content">
                        <p className='folders-info-content'>Tenho 23 anos,moro em Guarulhos-sp</p>
                    </div>
                )}
                <li onClick={toggleInterests}>
                    {showInterests ?
                        <IoIosArrowDown className={showInterests ? 'active-folder' : ''} fontSize={20} />
                        :
                        <MdKeyboardArrowRight fontSize={25} />
                    }
                    <BsFolderFill color="#43D9AD" className="folder" />
                    <p className={showInterests ? 'active-folder' : ''}>
                        Interesses
                    </p>
                </li>
                {showInterests && (
                    <div className="bio-content">
                        <p className='folders-info-content'>Me formar em análise e desenvolvimento de sistemas<br></br> e virar especialista em <br></br> desenvolvimento web.</p>
                    </div>
                )}
                <li onClick={toggleEducation}>
                    {showEducation ?
                        <IoIosArrowDown fontSize={20} className={showEducation ? 'active-folder' : ''} />
                        :
                        <MdKeyboardArrowRight fontSize={25} />
                    }
                    <BsFolderFill color="#3A49A4" className="folder" />
                    <p className={showEducation ? 'active-folder' : ''}>
                        Formação
                    </p>
                </li>

                {showEducation && (
                    <div className="bio-content">
                        <p className='folders-info-content'><RiMarkdownFill color="#607B96" fontSize={18} /><a href={Certificado} target='__blank'>Full stack</a></p>
                        <p className='folders-info-content'><RiMarkdownFill color="#607B96" fontSize={18} /><a href={CertificadoFudamentosProgramacao} target='__blank'>Fudamentos Programação</a></p>
                    </div>
                )}
            </ul>
        </>
    )
}

export default PersonalInfo