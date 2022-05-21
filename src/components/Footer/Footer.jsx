import React from "react";
import { Wrapper, Text, Logo } from "./Footer.styles";
import logo from "../../images/logo2.svg";

const Footer = () => {
	const date = new Date();
	const currentYear = date.getFullYear();

	return (
		<>
			<Wrapper>
				<Text>©PhumlaniDev {currentYear}</Text>
				<Logo src={logo} />
			</Wrapper>
		</>
	);
};

export default Footer;
