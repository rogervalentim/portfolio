import React from 'react'

import "./App.css"
import Navbar from './components/Navbar'
import Hello from './views/Hello'
import Projects from "./views/Projects"
import Contact from './views/Contact'
import Footer from './components/Footer'

import { HashRouter, Routes , Route} from "react-router-dom"
import About from './views/About'

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