import React from 'react'
import { Routes, Route } from "react-router-dom";
import { createGlobalStyle } from 'styled-components'
import HomePage from './components/HomePage'
import ProjectsPage from './components/ProjectsPage';
import NotFound from './components/NotFound';
import ProjectDetails from './components/ProjectDetails';

const App = () => {

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/proyectos" element={ <ProjectsPage /> } />
        <Route path="/proyectos/:idProject" element={ <ProjectDetails /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </>
  )
}

export default App;

const GlobalStyle = createGlobalStyle`
  :root {
    --black: #191919;
    --grey: #E9E9E9;
    --bg-grey: #f8f8f8;
    --orange: #FF9E1B;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
    scroll-behavior: smooth;
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;
  }

  section[id] {
    scroll-margin-top: 80px;
  }
`