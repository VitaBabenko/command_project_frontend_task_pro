import { styled } from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70vw;
  margin: auto;
  padding-top: 20vh;

  color: red;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const CountWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  width: 50px;
`;

export const CountSeconds = styled.p`
  font-size: 40px;
  font-weight: 900;
`;

export const CountMilliseconds = styled.p`
  font-size: 20px;
  font-weight: 900;
  width: 20px;
`;
