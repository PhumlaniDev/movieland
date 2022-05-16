import styled from "styled-components";

const Wrapper = styled.div`
	background: rgb(28, 28, 28);
	display: flex;
	flex-wrap: wrap;
	align-content: space-around;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 45px;
	margin: 50px auto 0 auto;
	width: 100%;
	bottom: 0;
`;

const Logo = styled.p`
	color: #ffffff;
`;

const TmdbLogo = styled.img`
	width: 194px;
	height: 30px;
`;

export { Wrapper, Logo, TmdbLogo };
