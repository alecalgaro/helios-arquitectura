import React from 'react'
import styled from 'styled-components'

const SectionTitle = ({title}) => {
  return (
    <>
        <H2>{title}</H2>
        <H3>{title}</H3>
    </>
  )
}

export default SectionTitle

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
    top: 3px;
    font-size: 3rem;
    color: var(--orange);
`