import styled from "styled-components";

const Wrapper = styled.div`
	color: #fff;
	background: #4e4e4e;
	border-radius: 20px;
	padding: 5px;
	text-align: center;

	h3 {
		margin: 10px 0 0 0;
	}

	p {
		margin: 5px 0;
	}
`;

const Image = styled.img`
	display: block;
	width: 100%;
	height: 200px;
	object-fit: cover;
	border-radius: 15px;
`;

export { Wrapper, Image };
