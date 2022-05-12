import styled from "styled-components";

const Image = styled.img`
	width: 100%;
	max-width: 720px;
	border-radius: 20px;
	transition: all 0.3s;
	object-fit: cover;
	height: 330px;
	margin-bottom: 50px;
	animation: animateThumb 0.5s;
	:hover {
		opacity: 0.8;
	}
	@keyframes animateThumb {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

export default Image;