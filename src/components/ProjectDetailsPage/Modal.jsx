import React from "react";
import styled from "styled-components";
import BtnCerrar from "../../img/cerrar.svg";
import { motion } from "framer-motion";

const Modal = ({ setModal, image }) => {
	const ocultarModal = () => {
		setModal(false);
	};

	return (
		<BgModal initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={ocultarModal}>
			<BtnCerrarModal>
				<ImgBtnCerrar src={BtnCerrar} alt="Botón para cerrar el modal" onClick={ocultarModal} />
			</BtnCerrarModal>
			<ImageModal initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
				<img src={image} alt="Imagen proyecto"></img>
			</ImageModal>
		</BgModal>
	);
};

export default Modal;

const BgModal = styled(motion.div)`
	position: fixed;
	background-color: rgb(0 0 0 / 0.8);
	top: 48px;
	left: 0;
	right: 0;
	bottom: 0;
`;

const BtnCerrarModal = styled.div`
	position: absolute;
	right: 3rem;
	top: 3rem;
	width: 3rem;
	height: 3rem;
	cursor: pointer;
`;

const ImgBtnCerrar = styled.img`
	width: 100%;
`;

const ImageModal = styled(motion.div)`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: 95%;
		max-width: 780px;
		max-height: 98%;
	}
`;
