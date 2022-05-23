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

const Title = styled.h1`
	font-size: 1.5em;
	color: #fff;
	font-family: "Iceland", cursive;
`;

const Input = styled.input`
	border-radius: 30px;
	width: 70%;
	height: 30px;
	padding-left: 20px;
`;

const Logo = styled.img`
	width: 80px;
	height: 70px;
`;

export { Wrapper, Title, Input, Logo };
