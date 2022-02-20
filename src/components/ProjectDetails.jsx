import React from 'react'
import styled from 'styled-components'
import imgProject from "../img/proyectos/1.webp";

const ProjectDetails = () => {
  return (
    <DetailsContainer>
        <Details>
            <h2>Casa LY</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dolore ipsum iure eius incidunt officia laboriosam sequi autem amet! Numquam culpa harum voluptate? Officia iste sapiente inventore magni placeat distinctio dolores explicabo culpa aperiam, laudantium earum totam dicta aliquam reiciendis nobis dolorem enim quos corrupti vero labore adipisci corporis voluptatem.</p>
        </Details>
        <GridContainer>
			<GridItem>
				<img src={imgProject} alt="" />
			</GridItem>
			<GridItem>
				<img src={imgProject} alt="" />
			</GridItem>
            <GridItem>
				<img src={imgProject} alt="" />
			</GridItem>
            <GridItem>
				<img src={imgProject} alt="" />
			</GridItem>
            <GridItem>
				<img src={imgProject} alt="" />
			</GridItem>
            <GridItem>
				<img src={imgProject} alt="" />
			</GridItem>
            <GridItem>
				<img src={imgProject} alt="" />
			</GridItem>
            <GridItem>
				<img src={imgProject} alt="" />
			</GridItem>
		</GridContainer>
    </DetailsContainer>
  )
}

export default ProjectDetails

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
`

const Details = styled.div`
    width: 90%;
    margin: 10rem 0 1rem 0;
    text-align: center;

    @media (min-width: 992px) {
        width: 60%;
	}

    h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.5rem;
        margin: 0 1rem;
        line-height: 1.8rem;

        @media (min-width: 992px) {
            font-size: 1.6rem;
	    }
    }
`

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	grid-auto-rows: minmax(150px, auto);
	gap: 2rem;
	padding: 3rem;
    margin: 0 .5rem;
	grid-auto-flow: dense;

	@media (min-width: 576px) {
		gap: 3rem;
		margin: 0 2rem;
	}

    @media (min-width: 1300px) {
        grid-template-columns: repeat(3, 380px);
	}
`;

const GridItem = styled.div`
	display: flex;
    flex-direction: column;
	align-items: center;
	justify-content: center;
    position: relative;
	transition: transform 0.3s ease-in-out;

	&:hover {
		filter: opacity(0.9);
		transform: scale(1.04);
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		border-radius: 10px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
	}

`