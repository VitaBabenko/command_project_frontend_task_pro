import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  /* background-color: var(--taskBgColor); */
  background-color: white;
  padding: 24px;
  border-radius: 8px;
  position: relative;
`;

export const ThemeSelectIcon = styled.svg`
  width: 18px;
  height: 18px;
  /* stroke: var(--primaryTextColor); */
  stroke: red;
  position: absolute;
  top: 14px;
  right: 14px;
`;
