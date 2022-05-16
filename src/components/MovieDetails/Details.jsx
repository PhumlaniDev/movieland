import React from "react";

import {
	Wrapper,
	InnerWrapper,
	InfoWrapper,
	InfoWrapper2,
} from "./Details.styles";

const Details = ({ backdrop, original_title, overview, rating }) => {
	return (
		<Wrapper backdrop={backdrop}>
			<InnerWrapper>
				<InfoWrapper>
					<h1>{original_title}</h1>
					<p>{overview}</p>
					<p>{rating}</p>
				</InfoWrapper>
				<InfoWrapper2>InfoWrapper2</InfoWrapper2>
			</InnerWrapper>
		</Wrapper>
	);
};

export default Details;
