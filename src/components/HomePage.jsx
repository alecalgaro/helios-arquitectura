import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import About from './About'
import Services from './Services'
import Projects from './Projects'

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
      </main>
      <footer>

      </footer>
    </>
  )
}

export default HomePage