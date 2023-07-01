import styled, { css } from 'styled-components';

export const activeStyleModalDiv = css`
  opacity: 1;
  pointer-events: all;
`
export const defaultStyleModalDiv = css`
 opacity: 0;
 pointer-events: none;
`

export const activeStyleModalContentDiv = css`
 transform: scale(1);
`

export const ModalDiv = styled.div`
 position: fixed;
  z-index: 2000;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  ${props => props.active ? activeStyleModalDiv : defaultStyleModalDiv}
`;

export const ModalContentDiv = styled.div`
  transform: scale(0.5);
  transition: 0.4s all;
  ${props => props.active && activeStyleModalContentDiv}
`;