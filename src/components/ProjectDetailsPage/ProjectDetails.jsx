import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../General/Navbar";
import Modal from "./Modal";
import data from "../../data/data.json";

import { motion } from "framer-motion";

const gridContainer = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};

const gridItem = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
	},
};

const ProjectDetails = () => {
	const { idProject } = useParams();

	const [modal, setModal] = useState(false);
	const [imgModal, setImgModal] = useState("");

	const openModalImage = (image) => {
		setModal(true);
		setImgModal(image);
	};

	return (
		<>
			<Navbar page="projects" />

			{data.map((project) =>
				project.id == idProject ? (
					<div key={project.id}>
						<DetailsContainer>
							<Details>
								<h2>{project.title}</h2>
								<p>{project.description}</p>
							</Details>
						</DetailsContainer>

						<GridContainer variants={gridContainer} initial="hidden" animate="visible">
							{project.images.map((image, index) => (
								<GridItem key={index} variants={gridItem} onClick={() => openModalImage(image)}>
									<img src={image} alt={project.title} />
								</GridItem>
							))}
						</GridContainer>
					</div>
				) : null
			)}

			{modal && <Modal setModal={setModal} image={imgModal} />}
		</>
	);
};

export default ProjectDetails;

const DetailsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
`;

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
		font-size: 1.6rem;
		margin: 0 1rem;
		line-height: 1.8rem;

		@media (min-width: 992px) {
			font-size: 1.7rem;
		}
	}
`;

const GridContainer = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	grid-auto-rows: minmax(150px, auto);
	gap: 2rem;
	padding: 1rem;
	margin: 0 1rem;
	grid-auto-flow: dense;

	@media (min-width: 576px) {
		gap: 3rem;
		padding: 2rem 5rem;
	}

	@media (min-width: 1200px) {
		grid-template-columns: repeat(3, minmax(300px, 600px));
		padding: 2rem 5rem;
	}
`;

const GridItem = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	transition: transform 0.3s ease-in-out;

	&:hover {
		transform: scale(1.04);
		cursor: pointer;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		border-radius: 10px;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
	}
`;
