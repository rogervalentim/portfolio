import React from 'react'

import "./Projects.css"

import { BiSolidDownArrow, BiLogoReact } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai" 
import CardsProjects from '../components/CardsProjects'
import { projects } from "../constants/data"


const Projects = () => {
  return (
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
  )
}

export default Projects