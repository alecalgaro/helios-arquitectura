import React from 'react'
import styled from 'styled-components'

const SectionTitle = ({title}) => {
  return (
    <TitleContainer>
        <H2>{title}</H2>
        <H3>{title}</H3>
    </TitleContainer>
  )
}

export default SectionTitle

const TitleContainer = styled.div`
  margin: 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const H2 = styled.h2`
  text-transform: uppercase;
  position: absolute;
  top: 0;
  font-size: 4rem;
  opacity: 20%;
  color: var(--black);
`

const H3 = styled.h3`
  text-transform: uppercase;
  position: absolute;
  top: 4px;
  font-size: 3rem;
  color: var(--orange);
`