import React from 'react'

import "./App.css"

import { Navbar, Footer } from './components/index'
import { Hello, About, Projects, Contact } from "./views/index"

import { HashRouter, Routes , Route} from "react-router-dom"

const App = () => {
  return (
    <>
    <HashRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<Hello />} />
    <Route path="/sobre" element={<About />} />
    <Route path="/projetos" element={<Projects />} />
    <Route path="/contato" element={<Contact />} />
    </Routes>
    <Footer />
    </HashRouter>
    </>
  )
}

export default App