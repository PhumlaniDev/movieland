import React from "react";
import { Wrapper, Logo, TmdbLogo } from "./Footer.styles";
import logo from "../../images/TMDB Logo.svg";

const Footer = () => {
	return (
		<Wrapper>
			<Logo>© PhumlaniDev</Logo>
			<TmdbLogo src={logo} />
		</Wrapper>
	);
};

export default Footer;
