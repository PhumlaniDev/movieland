import { useEffect, useRef, useState } from "react";
import { Wrapper, Title, Input, Logo } from "./Header.styles";

import logo from "../../images/logo1.svg";
import { Link } from "react-router-dom";

const Header = ({ setSearchTerm }) => {
	const [state, setState] = useState("");
	const handleChange = (e) => {
		setState(e.currentTarget.value);
	};

	const initial = useRef(true);

	useEffect(() => {
		if (initial.current) {
			initial.current = false;
			return;
		}
		const timer = setTimeout(() => {
			setSearchTerm(state);
		}, 500);
		return () => clearTimeout(timer);
	}, [setSearchTerm, state]);

	return (
		<>
			<Wrapper>
				<Link to="/" style={{ textDecoration: "none" }}>
					<Title>Movie Land</Title>
				</Link>

				<Input
					type="text"
					placeholder="Search Movie"
					onChange={handleChange}
					value={state}
				/>
				<a target="_blank" href="https://www.themoviedb.org/" rel="noreferrer">
					<Logo src={logo} />
				</a>
			</Wrapper>
		</>
	);
};

export default Header;
