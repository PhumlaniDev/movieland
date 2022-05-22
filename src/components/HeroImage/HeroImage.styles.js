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
	max-width: 1280px;
	margin: 0 auto;
	padding: 20px;
`;

const Text = styled.div`
	z-index: 100;
	max-width: 700px;
	position: absolute;
	bottom: 30px;
	min-height: 100px;
	color: #fff;
	h1 {
		font-size: 2.5rem;
		@media screen and (max-width: 720px) {
			font-size: 1.5rem;
		}
	}
	p {
		margin-top: 10px;
		font-size: 1.1rem;
		color: #eee;
		@media screen and (max-width: 720px) {
			fonts-size: 0.9rem;
		}
	}
	@media screen and (max-width: 720px) {
		max-width: 100%;
	}
`;

export { Wrapper, Content, Text };
