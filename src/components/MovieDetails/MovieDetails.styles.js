import styled from "styled-components";
import { IMAGE_URL, BACKDROP_SIZE } from "../../config/config";

const Wrapper = styled.div`
	height: 90vh;
	background: ${({ backdrop }) =>
		backdrop ? `url(${IMAGE_URL}${BACKDROP_SIZE}${backdrop})` : "#000"};
	background-size: cover;
	background-position: center;
	padding: 40px 60px;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-content: space-around;
	justify-content: space-evenly;
	align-items: flex-start;
	animation: animateMovieInfo 1s;
	@keyframes animateMovieInfo {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

const Content = styled.div`
	background-color: rgb(82 82 82 / 86%);
	margin-top: 100px;
	width: 500px;
	height: 300px;
	bottom: 0;
	padding: 20px;
`;

const Date = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-content: space-between;
	justify-content: space-between;
`;

const Genre = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-content: space-between;
	justify-content: flex-start;

	p {
		padding-right: 10px;
	}
`;

const TimeBudget = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-content: space-between;
	justify-content: space-between;
	padding-top: 10px;
`;

const RateAverage = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-content: space-between;
	justify-content: space-between;
	padding-top: 10px;
`;

export { Wrapper, Content, Date, Genre, TimeBudget, RateAverage };
