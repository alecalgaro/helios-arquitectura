import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SectionTitle from "../General/SectionTitle";

const Projects = () => {
	return (
		<ProjectsContainer>
			<SectionTitle title="Proyectos" />
			<p>
				Si te interesa conocer todos nuestros proyectos, haz click <Link to="/proyectos">aquí</Link>
			</p>
		</ProjectsContainer>
	);
};

export default Projects;

const ProjectsContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	margin-bottom: 5rem;

	p {
		font-size: 1.8rem;
		margin: 5rem 2rem 0 2rem;
		text-align: center;
	}

	a {
		color: var(--orange);
		font-style: italic;
		font-weight: 700;
	}

	@media (min-width: 768px) {
		font-size: 2rem;
	}
`;
