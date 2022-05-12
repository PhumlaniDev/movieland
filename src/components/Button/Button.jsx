import React from "react";
import { Wrapper } from "./Button.styled";
import PropTypes from "prop-types";

const Button = ({ children, callback }) => {
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
