import styled from "styled-components";
import { IMAGE_URL, BACKDROP_SIZE } from "../../config/config";

const Wrapper = styled.div`
	background: ${({ backdrop }) =>
		backdrop ? `url(${IMAGE_URL}${BACKDROP_SIZE}${backdrop})` : "#000"};
	background-size: cover;
	background-repeat: no-repeat;
	height: 500px;
	width: 100%;
	position: relative;
	background-position: center;
`;

const Title = styled.h1`
	font-size: 34px;
	font-family: "Noto Serif", serif;
	color: #585858;
`;

const InfoWrapper = styled.div`
	padding-top: 50px;
	padding-left: 145px;
	padding-right: 130px;
`;

const Text = styled.p`
	font-family: "Roboto", sans-serif;
	color: #585858;
	margin-top: 20px;
`;

export { Wrapper, Title, Text, InfoWrapper };
