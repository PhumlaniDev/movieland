import styled from "styled-components";

const Wrapper = styled.div`
	height: 10vh;
	background: #011936;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-content: center;
	justify-content: space-around;
	align-items: center;
`;

const Text = styled.p`
	font-family: "Roboto", sans-serif;
	color: #fff;
`;

const Logo = styled.img`
	width: 80px;
	height: 50px;
`;

export { Wrapper, Text, Logo };
