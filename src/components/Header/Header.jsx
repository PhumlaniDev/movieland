import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Logo, Input, InputWrapper, TMDBLogo } from "./Header.styles";
import logo from "../../images/TMDB Logo.svg";

const Header = ({ setSearchQuery }) => {
	const [state, setState] = useState("");

	const handleChange = (event) => {
		setState(event.currentTarget.value);
	};

	const initial = useRef(true);

	useEffect(() => {
		if (initial.current) {
			initial.current = false;
			return;
		}
		const timer = setTimeout(() => {
			setSearchQuery(state);
		}, 500);
		return () => clearTimeout(timer);
	}, [setSearchQuery, state]);

	return (
		<>
			<InputWrapper>
				<Logo>Movie Land</Logo>
				<Input
					type={"text"}
					placeholder={"Search Movie"}
					onChange={handleChange}
					value={state}
				/>
				<TMDBLogo src={logo} />
			</InputWrapper>
		</>
	);
};

Input.prototype = {
	callback: PropTypes.func,
};
export default Header;
