import React from "react";
import PropTypes from "prop-types";
import Wrapper from "./Button.styles";

const Button = ({ callback, children }) => {
	return (
		<>
			<Wrapper type="button" onClick={callback}>
				{children}
			</Wrapper>
		</>
	);
};

Button.propTypes = {
	children: PropTypes.any,
	callback: PropTypes.func,
};

export default Button;
