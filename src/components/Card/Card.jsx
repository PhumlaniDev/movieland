import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// Styles
import { Image } from "./Card.styles";

const Card = ({ image, movieId, clickable, movieHeight }) => {
	return (
		<>
			{clickable ? (
				<Link to={`/${movieId}`}>
					<Image src={image} alt="movie-thumb" movieHeight={movieHeight} />
				</Link>
			) : (
				<Image src={image} alt="movie-thumb" movieHeight={movieHeight} />
			)}
		</>
	);
};

Card.prototype = {
	image: PropTypes.string,
	movieId: PropTypes.number,
	clickable: PropTypes.bool,
};

export default Card;
