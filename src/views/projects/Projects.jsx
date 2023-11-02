import React from 'react'

import "./Projects.css"

import { BiSolidDownArrow, BiLogoReact } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai" 

import { CardsProjects } from '../../components/index'

import { projects } from "../../constants/data"

import { useMediaQuery  } from 'react-responsive'

import { IoMdArrowDropright } from "react-icons/io"


const Projects = () => {

  const isMobile = useMediaQuery({ maxWidth: 767 })

  return (
    <>
    {isMobile ? (
      <section className="projects-mobile">
        <p className="title-project-mobile">
          _projetos
        </p>

        <div className="box-section">      
        <div className="box-info">
        <IoMdArrowDropright fontSize={18} color="#fff" />
          projetos
        </div>
        </div>

        <div>
          <p className="category-project">
            {`//`} projetos <code>{`//`}  todos</code>
          </p>
        
          <div className="grid-cards-projects">
         {projects.map((item) => (
          <CardsProjects 
          key={item.title}
          project={item.project}
          title={item.title}
          text={item.text}
          image={item.image}
          link={item.link}
        />
      ))}
    </div>
        </div>
        </section>
    ): (
    <>
    <section className="projects-section">
      <div>
      <div className="projects-container">
        <BiSolidDownArrow fontSize={10} color="#fff"  />
        <p>projetos</p>
        </div>
      <ul className="projects-technologies">
      <li>
        <BiLogoReact fontSize={24} color="#607B96" /> 
        <p>React</p>
        </li>
      </ul>
        </div>


    <div>
      <div className="project-window">
        <p>
         React
        </p>
        <AiOutlineClose color="##607B96"  />
        </div>

        <div className="projects-content">
          
    <div className="grid-cards-projects">
      {projects.map((item) => (
      <CardsProjects 
       key={item.title}
       project={item.project}
       title={item.title}
       text={item.text}
       image={item.image}
       link={item.link}
       />
      ))}
    </div>
        </div>
        </div>
      <div className="retangule" />


       
    </section>
    </>
    )}
    </>
  )
}

export default Projects