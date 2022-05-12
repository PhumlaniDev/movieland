import styled from "styled-components";

const InputWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-content: space-around;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: absolute;
	height: 45px;
	margin: 10px auto 0 auto;
	width: 100%;
	top: 400px;
	border-radius: 40px;
`;

const Input = styled.input`
	background: rgba(28, 28, 28, 0.6);
	font-size: var(--fontMedium);
	margin: 3px 0px;
	padding: 0px 0px 0px 60px;
	width: 95%;
	height: 40px;
	border: 0px;
	border-radius: 40px;
	color: #ffffff;
`;

export { InputWrapper, Input };
