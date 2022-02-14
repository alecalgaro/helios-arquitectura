import React from 'react'
import styled from 'styled-components'
import SectionTitle from './SectionTitle'
import Service from './Service'

const Services = () => {
  return (
    <ServicesContainer>
        <SectionTitle title="Servicios" />
        <Service title="¿Qué ofrecemos?" description="Anteproyectos proyectos remodelaciones ampliaciones regulación de obras dirección de obras "  />
        <Service title="¿Dónde?" description="Santa Fe, Santa Fe; Chajari, Entre Ríos; y alrededores"  />
        <Service title="¿De qué modo?" description="Presencial o virtual"  />
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
    margin: 5rem 0;
    position: relative;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`

