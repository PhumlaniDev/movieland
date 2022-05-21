import styled from "styled-components";

const Wrapper = styled.div`
	background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0) 41%,
			rgba(0, 0, 0, 0.65) 100%
		),
		url(${({ image }) => image}), #4c4c4c;
	background-size: 100%, cover;
	height: 75vh;
	position: relative;
	background-position: center;
	animation: animateHeroImage 1s;
	@keyframes animateHeroImage {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

const Content = styled.div`
	position: absolute;
	background-color: rgba(70, 83, 98, 0.7);
	margin-bottom: 5vh;
	margin-left: 5vw;
	width: 400px;
	height: 216px;
	bottom: 0;
	padding: 5px;
	color: #a9a9a9;
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
