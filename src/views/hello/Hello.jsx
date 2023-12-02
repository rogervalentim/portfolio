import React from 'react'

import "./Hello.css"

import CodeSnippet1 from "../../assets/codes/code-snippet-1.png"
import CodeSnippet2 from "../../assets/codes/code-snippet-2.png"
import CodeSnippet3 from "../../assets/codes/code-snippet-3.png"
import CodeSnippet4 from "../../assets/codes/code-snippet-4.png"
import CodeSnippet5 from "../../assets/codes/code-snippet-5.png"

import { useMediaQuery } from 'react-responsive'

const Hello = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return (
    <>
      {isMobile ? (
        <>
          <section className="hello-mobile">
            <div className="apresentation-container">
              <p className="hello-mobile-apresentation">
                Olá a todos, Eu sou
              </p>
              <h1>
                Roger Valentim
              </h1>
              <p className='title-home-mobile'>{`>`} Desenvolvedor Front-end</p>

              <p className="text-apresentation">Transformando ideias em experiências visuais cativantes:<br></br>meu portfólio front-end é o reflexo da minha paixão por design e desenvolvimento, onde cada linha de código conta uma história de inovação e usabilidade.</p>


            </div>
            <div className="links-hello-mobile">
              <p className="comments">
                {`//`} Encontre o meu perfil no github
              </p>

              <div className="const-container">
                <p className="const"><code className="const-color">const</code> <span>githubLink</span>
                  =
                  <a href="https://github.com/rogervalentim" target="__blank">
                    {`"https://
              github.com/rogervalentim"`}
                  </a>
                </p>
              </div>
            </div>
          </section>
        </>
      ) : (
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
              <p className="text-apresentation">Transformando ideias em experiências visuais cativantes:<br></br>meu portfólio front-end é o reflexo da minha paixão por design e desenvolvimento, onde cada linha de código conta uma história de inovação e usabilidade.</p>

              <div className="links-hello">
                <p className="comments">
                  {`//`} Encontre o meu perfil no github
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
                <div className="green" />
                <img src={CodeSnippet1} alt="code-snippet" />
                <img src={CodeSnippet2} alt="code-snippet" />
                <img src={CodeSnippet3} alt="code-snippet" />
                <img src={CodeSnippet5} alt="code-snippet" />
              </div>
            </div>
          </section>
        </>
      )}
    </>
  )
}

export default Hello