import React from "react";
import { Link } from "react-router-dom";
import Image from "./Card.styled";

import PropTypes from "prop-types";

const Card = ({ image, movieId, clickable, movieHeight }) => {
	return (
		<>
			{clickable ? (
				<Link to={`/${movieId}`}>
					<Image src={image} alt="movie-thumb" movieHeight={movieHeight} />;
				</Link>
			) : (
				<Image src={image} alt="movie-thumb" movieHeight={movieHeight} />
			)}
		</>
	);
};

Card.prototypes = {
	image: PropTypes.string,
};

export default Card;
