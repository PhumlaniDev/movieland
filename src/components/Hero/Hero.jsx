import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Content, Text } from "./Hero.styled";

const Hero = ({ backdrop, title, overview }) => {
	return (
		<Wrapper backdrop={backdrop}>
			<Content>
				<Text>
					<h1>{title}</h1>
					<p>{overview}</p>
				</Text>
			</Content>
		</Wrapper>
	);
};

Hero.prototype = {
	backdrop: PropTypes.string,
	title: PropTypes.string,
	overview: PropTypes.string,
};

export default Hero;
