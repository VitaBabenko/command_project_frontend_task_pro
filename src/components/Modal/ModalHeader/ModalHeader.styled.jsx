import styled from 'styled-components';

export const ModalHeaderWrapper = styled.div`
width: 100%;
  height: auto;
  order: 0;
  flex: 0 1 auto;
  align-self: auto;
`;
export const ModalHeaderWrapperTittleContainer = styled.div`
display: flex;
  font-weight: 500;
  font-size: 18px;
  /* line-height: 32px; */
  color:var(--primaryTextColor);
  letter-spacing: -0.36px;
  position: relative;
  margin: 0;
`;

export const ModalHeaderTittle = styled.h2`
width: 100%;
overflow: hidden;
white-space: nowrap;

display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: flex-start;

color: var(--primaryTextColor);
font-size: 18px;
font-weight: 500;
letter-spacing: -0.36px;
`;
export const ModalHeaderClose = styled.button`
display: flex;
position: absolute;
top: -10px;
right: -10px;
justify-content: center;
align-items: center;
padding: 0;
width: 18px;
height: 18px; 
background-color: transparent;
border: none;
color:var(--primaryTextColor);
`;
