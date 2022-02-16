import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import About from './About'
import Services from './Services'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

const HomePage = () => {
  return (
    <>
      <header>
        <Navbar />
        <Header />
      </header>
      <main>
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default HomePage