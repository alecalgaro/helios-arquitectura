import React from 'react'
import Navbar from './Navbar'
import ProjectGallery from './ProjectGallery'

const ProjectsPage = () => {
  return (
    <>
      <header>
        <Navbar page="projects"/>
      </header>
      <main>
        <ProjectGallery />
      </main>
    </>
  )
}

export default ProjectsPage