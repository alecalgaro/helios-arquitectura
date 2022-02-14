import React from 'react'
import styled from 'styled-components'

const Service = ({title, description}) => {
  return (
    <ServiceContainer>
        <h3>{title}</h3>
        <p>{description}</p>
    </ServiceContainer>
  )
}

export default Service

const ServiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25rem;
    height: 25rem;
    background-color: var(--orange);
    margin-top: 3rem;
    border-radius: 5rem;
    transition: all .3s;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    &:hover {
        background-color: var(--black);
        color: var(--orange);
    }

    p, h3 {
        text-transform: uppercase;
        font-size: 1.8rem;
        line-height: 2.5rem;
        text-align: center;
        margin: 0 1.2rem;
    }

    h3 {
        margin-bottom: 2rem;
    }

    @media (min-width: 768px) {
        width: 25rem;
        height: 25rem;
        margin: 5rem 2rem;

        p {
            font-size: 1.6rem;
        }

        h3 {
            font-size: 1.8rem;
        }
    }
`