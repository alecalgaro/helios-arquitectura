import React from 'react'
import styled from 'styled-components'
import imgAbout from '../img/about.webp'
import imgHelios from '../img/helios.webp'
import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <AboutContainer id='about'>
        <SectionTitle title="Nosotros" />
        <Us>
            <img src={imgAbout} alt="foto nosotros" />
            <Parrafo>Somos Mauro Yardín, Maximiliano Calgaro y Dolores Buteler. Nos conocimos y formamos en la Facultad de Arquitectura, Diseño y Urbanismo de la ciudad de Santa Fe, Argentina. 
                    En 2020 decidimos formar Helios Arquitectura. A partir de entonces nos dedicamos a la realización de proyectos de viviendas, reformas e interiorismo. También nos especialización en sistemas constructivos en seco (Steel Frame y Wood Frame).
            </Parrafo>
        </Us>
        <Helios>
            <img src={imgHelios} alt="imagen Helios" />
            <Parrafo>
                <span>¿Por qué HELIOS arquitectura?</span><br /><br />
                En las primeras décadas del siglo XX y en pleno auge del Movimiento Moderno, el arquitecto ucraniano Wladimiro Acosta, ahora radicado en Argentina, plantea los lineamientos del Sistema Helios, una manera original de concebir la arquitectura mediante la conjunción entre la arquitectura moderna y las características autóctonas de nuestro país.
                Como estudio nos proponemos retomar estos nobles ideales y repensarlos en los tiempos presentes y de cara hacia el futuro. 
                Se trata de concebir una arquitectura autentica, racional, que responda a su contexto, clima, paisaje, y arraigada en las necesidades particulares de cada persona.
            </Parrafo>
        </Helios>
    </AboutContainer>
  )
}

export default About

const AboutContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100%;
    margin: 5rem 0 3rem 0;
`

const Us = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5rem 0 2rem 0;

    img {
        width: 75%;
        margin: 2rem 0;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }

    @media (min-width: 768px) {
        flex-direction: row;
        margin: 5rem 5rem 2rem 5rem;
        img {
            width: 40%;
            margin-right: 4rem;
        }
    }

    @media (min-width: 992px) {
        img {
            width: 25%;
            margin-right: 6rem;
        }
    }
`

const Helios = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 50%;
        margin-bottom: 2rem;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }

    @media (min-width: 768px) {
        flex-direction: row;
        margin: 0 5rem;
        img {
            width: 30%;
            margin-left: 6rem;
            order: 1;
        }
    }

    @media (min-width: 992px) {
        img {
            width: 20%;
            margin-left: 8rem;
        }
    }
`

const Parrafo = styled.p`
    width: 85%;
    font-size: 1.4rem;
    line-height: 1.8rem;
    text-align: justify;
    
    span {
        font-weight: 700;
    }

    @media (min-width: 768px) {
        width: 45%;
        line-height: 2rem;
        margin: 2rem 0;
    }

    @media (min-width: 992px) {
        width: 40%;
        font-size: 1.6rem;
    }

    @media (min-width: 1200px) {
        width: 35%;
    }
`