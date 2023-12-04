import { useState } from "react"

import "./Projects.css"

import { BiSolidDownArrow, BiLogoReact } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"

import { CardsProjects } from '../../components/index'

import { projects, technologies } from "../../constants/data"

import { useMediaQuery } from 'react-responsive'

import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io"

import CardTechnologies from "../../components/cardTechnologies/CardTechnologies"

const Projects = () => {
  const [showTechnologies, setShowTechnologies] = useState(false)


  const toggleTechnologies = () => {
    setShowTechnologies(!showTechnologies)
  }

  const isMobile = useMediaQuery({ maxWidth: 768 })

  return (
    <>
      {isMobile ? (
        <section className="projects-mobile">
          <p className="title-project-mobile">
            _projetos
          </p>

          <div className="box-section">
            <div className="box-info">
              {showTechnologies ? <IoMdArrowDropdown fontSize={18} color="#fff" onClick={toggleTechnologies} /> :
                <IoMdArrowDropright fontSize={18} color="#fff" onClick={toggleTechnologies} />
              }
              tecnologias que eu trabalho.

            </div>

            {showTechnologies && (
              <div className="grid-img-technologies">
                {technologies.map((item) => (
                  <CardTechnologies
                    key={item.name}
                    name={item.name}
                    icon={item.icon}
                  />
                ))}
              </div>
            )}
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
      ) : (
        <>
          <section className="projects-section">
            <div>
              <div className="projects-container">
                <BiSolidDownArrow fontSize={10} color="#fff" />
                <p>projetos</p>
              </div>
              <ul className="projects-technologies">
                <li>
                  <BiLogoReact fontSize={24} color="#607B96" />
                  <p>React</p>
                </li>
              </ul>
              <div className="tecnologies-container">
                <BiSolidDownArrow fontSize={10} color="#fff" />
                <p>Tecnologias que eu trabalho</p>
              </div>

              <div className="grid-img-technologies">
                {technologies.map((item) => (
                  <CardTechnologies
                    key={item.name}
                    name={item.name}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>


            <div>
              <div className="project-window">
                <p>
                  React
                </p>
                <AiOutlineClose color="##607B96" />
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