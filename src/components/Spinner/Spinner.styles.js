import styled from "styled-components";

const Wrapper = styled.div`
	width: 50px;
  height:500px
  border: 10px solid #f3f3f3
  border-top: 10px solid #383636
  border-radius:50%
  animation: spinner 1.5s linear infinite;

  keyframes {
    0%{
      transform: rotate(0deg);
    }

    100%{
      transform: rotate(360deg)
    }
  }
`;

export default Wrapper;
