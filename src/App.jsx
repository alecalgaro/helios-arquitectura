import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'

const App = () => {

  return (
    <>
      <GlobalStyle />
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

export default App;

const GlobalStyle = createGlobalStyle`
  :root {
    --black: #191919;
    --grey: #E9E9E9;
    --orange: #FF9E1B;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: 'Poppins', sans-serif; */
    font-family: 'Josefin Sans', sans-serif;
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;
  }
`