import styled from "styled-components";

const InputWrapper = styled.div`
	background: rgb(28, 28, 28);
	display: flex;
	flex-wrap: wrap;
	align-content: space-around;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 45px;
	margin: 0 auto 0 auto;
	width: 100%;
	position: fixed;
	z-index: 1;
	top: 0;
`;

const Logo = styled.h1`
	font-family: "Iceland", cursive;
	font-size: 48px;
	line-height: 47px;
	color: #ffffff;
	text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
`;

const Input = styled.input`
	font-size: var(--fontMedium);
	margin: 3px 0px;
	padding: 0px 0px 0px 30px;
	width: 50%;
	height: 20px;
	border: 0px;
	border-radius: 40px;
	color: #ffffff;
`;

const TMDBLogo = styled.img`
	width: 194px;
	height: 30px;
`;

export { InputWrapper, Logo, Input, TMDBLogo };
