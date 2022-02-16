import React from 'react'
import styled from 'styled-components'
import SectionTitle from './SectionTitle'
import SocialMedia from './SocialMedia'

import imgLogo from '../img/logo-nav.webp'
import imgLogoHeader from '../img/logo-header.webp'

const Contact = () => {
  return (
    <ContactContainer id="contact">
        {/* <SectionTitle title="Contacto" /> */}
        <img src={imgLogoHeader} alt="logo header" className='img-logo'/>
        <div className='info-container'>
            <div className='info-item'>
                <img src={imgLogo} alt="" />
                <p>Chajari, Entre Ríos <br /> Santa Fe, Santa Fe</p>
            </div>
            <div className='info-item'>
                <img src={imgLogo} alt="" />
                <p>3456-546096 (Chajari) <br /> 3497-687754 (Santa Fe)</p>
            </div>
            <div className='info-item'>
                <img src={imgLogo} alt="" />
                <p>estudio.heliosarquitectura@gmail.com</p>
            </div>
        </div>
        <SocialMedia />
    </ContactContainer>
  )
}

export default Contact

const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 1rem 0 2.5rem 0;
  background-color: var(--bg-grey);

  .info-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 95%;
    margin: 4rem 0 1rem 0;

    @media (min-width: 768px) {
        flex-direction: row;
    }

    @media (min-width: 992px) {
      width: 80%;
    }
  }

  .img-logo {
    margin-top: 5rem;
    width: 22rem;

    @media (min-width: 756px) {
        width: 25rem;
    }

    @media (min-width: 992px) {
        width: 30rem;
    }
  }

  .info-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
    p {
        text-align: center;
        margin-bottom: 1.5rem;
        font-size: 1.4rem;
    }

    img {
      width: 3.2rem;
      height: 3.2rem;
      margin: .5rem 1rem;
    }

    @media (min-width: 768px) {
        flex-direction: row;

        p { 
            margin-bottom: 0;
            font-size: 1.5rem;
            line-height: 2rem;
        }
    }
    
  }

  
`