import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Title, Text, InfoWrapper } from "./Hero.styled";

const Hero = ({ backdrop, title, text }) => {
	return (
		<Wrapper backdrop={backdrop}>
			<InfoWrapper>
				<Title>{title}</Title>
				<Text>{text}</Text>
			</InfoWrapper>
		</Wrapper>
	);
};

Hero.prototype = {
	backdrop: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
};

export default Hero;
