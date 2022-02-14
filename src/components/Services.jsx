import React from 'react'
import styled from 'styled-components'
import SectionTitle from './SectionTitle'
import Service from './Service'

const Services = () => {
  return (
    <ServicesContainer id='services'>
        <SectionTitle title="Servicios" />
        <SubContainer>
          <Service title="¿Qué ofrecemos?" description="Anteproyectos proyectos remodelaciones ampliaciones regulación de obras dirección de obras "  />
          <Service title="¿Dónde?" description="Santa Fe, Santa Fe; Chajari, Entre Ríos; y alrededores"  />
          <Service title="¿De qué modo?" description="Presencial o virtual"  />
      </SubContainer>
    </ServicesContainer>
  )
}

export default Services

const ServicesContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  margin-bottom: 3rem;
  padding: 2rem;
  background-color: #f8f8f8;
`

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`