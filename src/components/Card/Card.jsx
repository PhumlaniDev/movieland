import React from "react";
import Image from "./Card.styled";

import PropTypes from "prop-types";

const Card = ({ image }) => {
	return <Image src={image} alt="movie-thumb" />;
};

Card.prototypes = {
	image: PropTypes.string,
};

export default Card;
