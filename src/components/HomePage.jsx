import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import About from './About'

const HomePage = () => {
  return (
    <>
      <header>
        <Navbar />
        <Header />
      </header>
      <main>
        <About />
      </main>
      <footer>

      </footer>
    </>
  )
}

export default HomePage