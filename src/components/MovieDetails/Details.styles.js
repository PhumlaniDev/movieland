import styled from "styled-components";

import { IMAGE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../../config/config";

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

const InnerWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-content: space-around;
	justify-content: center;
	align-items: center;
`;

const InfoWrapper = styled.div`
	background: rgba(71, 70, 70, 0.81);
	border-radius: 20px;
	width: 400px;
`;

const InfoWrapper2 = styled.div`
	background: rgba(71, 70, 70, 0.81);
	border-radius: 20px;
	width: 400px;
`;

export { Wrapper, InnerWrapper, InfoWrapper, InfoWrapper2 };
