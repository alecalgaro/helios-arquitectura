import React, { useState } from "react";
import styled from "styled-components";
import BurguerButton from "./BurguerButton";

import imgLogo from "../../img/logo-nav.webp";
import { Link } from "react-router-dom";

function Navbar({ page }) {
	const [clicked, setClicked] = useState(false);

	const handleClickLink = () => {
		setClicked(false);
	};

	const handleClickBtn = () => {
		setClicked(!clicked);
	};

	return (
		<>
			<NavContainer>
				<Link to="/">
					<img src={imgLogo} alt="logo helios" />
				</Link>
				<div className={`links ${clicked ? "active" : ""}`}>
					{page === "home" ? (
						<>
							<a onClick={handleClickLink} href="#home">
								Inicio
							</a>
							<a onClick={handleClickLink} href="#about">
								Nosotros
							</a>
							<a onClick={handleClickLink} href="#services">
								Servicios
							</a>
							<Link onClick={handleClickLink} to="/proyectos">
								Proyectos
							</Link>
							<a onClick={handleClickLink} href="#contact">
								Contacto
							</a>
						</>
					) : (
						<>
							<Link onClick={handleClickLink} to="/">
								Inicio
							</Link>
							<Link onClick={handleClickLink} to="/proyectos">
								Proyectos
							</Link>
						</>
					)}
				</div>
				<div className="burguer">
					<BurguerButton clicked={clicked} handleClick={handleClickBtn} />
				</div>
			</NavContainer>

			<BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
		</>
	);
}

export default Navbar;

const NavContainer = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	background-color: var(--black);
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	z-index: 10;
	padding: 0.5rem;

	@media (min-width: 768px) {
		padding: 0.5rem;
	}

	img {
		width: 3.2rem;
		height: 3.2rem;
		margin: 0.3rem 1rem 0 1rem;
	}

	.links {
		position: absolute;
		top: -700px;
		left: -1500px;
		right: 0; /* es para cuando se cierra el menu, para que se vaya hacia la izquierda y arriba */
		text-align: center;
		transition: all 0.5s ease;

		a {
			color: var(--grey);
			display: block;
			font-size: 3rem;
			text-transform: uppercase;
			font-weight: 700;
			letter-spacing: 2px;
			margin: 1.5rem;
			text-decoration: none;
			transition: letter-spacing 0.3s;

			&:hover {
				color: var(--orange);
			}
		}

		@media (min-width: 768px) {
			position: initial;
			margin: 0;
			padding: 1rem;

			a {
				font-size: 1.2rem;
				color: var(--grey);
				display: inline;
				margin-left: 1rem;
				font-weight: 400;
			}
		}
	}

	.links.active {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
		position: absolute;
		margin: 0 auto;
		top: 0;
		left: 0;
		right: 0;
		text-align: center;
	}

	.burguer {
		@media (min-width: 768px) {
			display: none;
		}
	}
`;

const BgDiv = styled.div`
	background-color: var(--black);
	position: fixed;
	top: -1000px;
	left: -1500px;
	width: 100%;
	height: 100%;
	z-index: 1;
	transition: all 0.6s ease;

	&.active {
		top: 50px;
		left: 0;
	}
`;
