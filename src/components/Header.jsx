import React from 'react'
import SocialMedia from './SocialMedia'
import styled from 'styled-components'
import imgBackgroud from '../img/bg-header.webp'
import imgLogoHeader from '../img/logo-header.webp'

const Header = () => {
  return (
    <>
        <ImageBackground src={imgBackgroud} className="img-background" alt="imagen de fondo" />
        <BackgroundGrey />
        <HeaderContainer>
            <div className='logo'>
                <h1><img src={imgLogoHeader} alt="logo header"/></h1>
            </div>
            <SocialMedia />
        </HeaderContainer>
        
    </>
  )
}

export default Header;

const ImageBackground = styled.img`
    width: 100vw;
    height: 100vh;
    z-index: -1;
`

const BackgroundGrey = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--grey);
    opacity: 20%;
    position: absolute;
    top: 0;
    left: 0;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;

  .logo img {
    width: 22rem;

    @media (min-width: 756px) {
        width: 25rem;
    }

    @media (min-width: 992px) {
        width: 30rem;
    }
  }
`