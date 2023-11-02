import React from 'react'

import "./CardsProjects.css"

const CardsProjects = ({ project, title, image, text, link}) => {
  return (
    <>
    <div className="card-project">
    <div className="title-project-container">
    <p className="project-name">
      {project}
    </p>
    <p className="project-title">
      {title}
    </p>
    </div>
    <div className="card-position">
      <img src={image} alt={title} />
      <div className="card-content"> 
      <p className="project-text">{text}</p>
      <a href={link} target="__blank">
      <button type="button">
        ver projeto
      </button>
      </a>
      </div>
      </div>
    </div>
    </>
  )
}

export default CardsProjects