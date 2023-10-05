import React from 'react'

import "./Hello.css"
import SnakeGame from "../assets/snake-game.jpg"

import Green from "../assets/Green.png"

import CodeSnippet1 from "../assets/codes/code-snippet-1.png"
import CodeSnippet2 from "../assets/codes/code-snippet-2.png"
import CodeSnippet3 from "../assets/codes/code-snippet-3.png"
import CodeSnippet4 from "../assets/codes/code-snippet-4.png"
import CodeSnippet5 from "../assets/codes/code-snippet-5.png"

const Hello = () => {
  return (
    <>
    <section className="hello-section">
      <div className="hello-container">
        <p className="apresentation">
          Olá a todos, Eu sou
        </p>
        <p className="title">
          Roger Valentim
        </p>
        <h2>{`>`} Desenvolvedor Front-end</h2>

        <div className="links-hello">
          <p className="comments">
          {`//`} você pode também pode ver a minha página no github
          </p>
          <p className="const"><code className="const-color">const</code> <span>githubLink</span>
          
          =
            <a href="https://github.com/rogervalentim" target="__blank">
            {`"https://github.com/rogervalentim"`}
            </a>
          </p>
        </div>
      </div>

     <div className="gradient-container">
      <div className="gradient">
        <img src={CodeSnippet4} alt="code-snippet" />
        <img src={CodeSnippet1} alt="code-snippet" />
        <img src={CodeSnippet2} alt="code-snippet" />
        <img src={CodeSnippet3} alt="code-snippet" />
        <img src={CodeSnippet5} alt="code-snippet" />
      </div>
      </div>
    </section>
    </>
  )
}

export default Hello