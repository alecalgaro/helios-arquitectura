import React from 'react'
import styled from 'styled-components'
import icon_instagram from '../img/icon-instagram.webp'
import icon_facebook from '../img/icon-facebook.webp'

const SocialMedia = () => {
  return (
    <Social_media>
        <a href="https://www.instagram.com/heliosarquitectura/" target="_blank"><img src={icon_instagram} alt="icono instagram" /></a>
        <a href="https://www.facebook.com/Helios-Arquitectura-100412418965426" target="_blank"><img src={icon_facebook} alt="icono facebook" /></a>
    </Social_media>
  )
}

export default SocialMedia

const Social_media = styled.div`
    display: flex;
    justify-content: space-between;
    width: 8rem;
    margin-top: 1rem;

    img {
        width: 3.2rem;
    }

    a:hover{
      opacity: 65%;
      transition: opacity .3s;
    }
`