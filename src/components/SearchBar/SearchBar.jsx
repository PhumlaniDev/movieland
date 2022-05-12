import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Input, InputWrapper } from "./SearchBar.styles";

const SearchBar = ({ setSearchQuery }) => {
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
				<Input
					type={"text"}
					placeholder={"Search Movie"}
					onChange={handleChange}
					value={state}
				/>
			</InputWrapper>
		</>
	);
};

Input.prototype = {
	callback: PropTypes.func,
};
export default SearchBar;
