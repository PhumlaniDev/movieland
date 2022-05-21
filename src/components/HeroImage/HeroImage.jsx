import React from "react";
import { Wrapper, Content } from "./HeroImage.styles";

const HeroImage = ({ image, title, text }) => {
	return (
		<>
			<Wrapper image={image}>
				<Content>
					<h1>{title}</h1>
					<p>{text}</p>
				</Content>
			</Wrapper>
		</>
	);
};

export default HeroImage;
