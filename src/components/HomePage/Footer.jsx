import React from "react";
import styled from "styled-components";

const Footer = () => {
	return (
		<FooterContainer>
			<p className="footer">
				Helios Arquitectura 2024 <br /> Sitio web desarrollado por{" "}
				<a href="https://alecalgaro.com.ar" target="_blank">
					Alejandro Calgaro
				</a>
			</p>
		</FooterContainer>
	);
};

export default Footer;

const FooterContainer = styled.section`
	.footer {
		margin: 2rem;
		font-size: 1.4rem;
		text-align: center;
		line-height: 1.6rem;

		a {
			text-decoration: none;
			font-style: italic;
			color: var(--black);
		}
	}
`;
