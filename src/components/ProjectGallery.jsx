import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import projects from './data.json';

import { motion } from "framer-motion";

const gridContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2
      }
    }
  };
  
  const gridItem = {
    hidden: {opacity: 0 },
    visible: {
      opacity: 1
    }
  };

const ProjectGallery = () => { 
	return (
		<GridContainer
            variants={gridContainer}
            initial="hidden"
            animate="visible"
            >
            {projects.map( (project) => (
                <Link to={"/proyectos/" + project.id} key={project.id}>
                    <GridItem variants={gridItem}>
                        <img src={"https://drive.google.com/uc?export=view&id="+project.img} alt={project.title} />
                        <div className="bg-hover-item">
                            <p>{project.title}</p>
                        </div>
                    </GridItem>
                </Link>
            ))}
		</GridContainer>
	);
};

export default ProjectGallery;

const GridContainer = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	grid-auto-rows: minmax(150px, auto);
	gap: 20px;
	padding: 20px;
	grid-auto-flow: dense;
	margin-top: 10rem;

	@media (min-width: 576px) {
		gap: 50px;
		padding: 50px;
	}

	@media (min-width: 768px) {
		margin-top: 5rem;
	}
`;

const GridItem = styled(motion.div)`
	display: flex;
    flex-direction: column;
	align-items: center;
	justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
	transition: transform 0.3s ease-in-out;

	&:hover {
		/* filter: opacity(0.9); */
		transform: scale(1.04);
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		border-radius: 10px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
	}

    .bg-hover-item {
        position: absolute;
        top: 0;
        display: flex;
        justify-content: center;
        background-color: var(--black);
        width: 100%;
        height: 100%;
        border-radius: 10px;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;

        &:hover {
            opacity: 50%;
        }

        p{
            position: absolute;
            bottom: 2rem;
            font-size: 2rem;
            color: var(--grey);
            font-weight: bold;
            text-transform: uppercase;
        }
    }
`;
