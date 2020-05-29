import React from "react"

// style
import "../App.css"

// components
import Header from "../components/Header"
import Lead from "../components/Lead"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Education from "../components/Education"
import Footer from "../components/Footer"

// to set the title of the website
import { Helmet } from "react-helmet"

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Portfolio</title>
      </Helmet>
      <Header />
      <Lead />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Footer />
    </div>
  )
}

export default App
