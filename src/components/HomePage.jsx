import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import About from './About'
import Services from './Services'

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
      </main>
      <footer>

      </footer>
    </>
  )
}

export default HomePage