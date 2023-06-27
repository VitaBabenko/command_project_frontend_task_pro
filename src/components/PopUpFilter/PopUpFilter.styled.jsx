import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: relative;
  width: 302px;
  height: auto;

  box-sizing: border-box;

  border-radius: 8px;
  border: 1px solid rgba(190, 219, 176, 0.5);
  background: var(--themeListBgColor);
  padding: 24px;
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.05);
`;
/* var(--themeTitleTextColor); */

export const CloseButton = styled.button`
  position: absolute;
  right: 14px;
  top: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 18px;
  height: 18px;
  padding: 0;
  margin: 0;
  background: transparent;
  border: none;
`;

export const SvgIcons = styled.svg`
  stroke: var(--primaryTextColor);
`;

export const ModalHeader = styled.h4`
  color: var(--primaryTextColor);
  font-size: 18px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.36px;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--modalGorizontalBorderColor);
  margin: 0 0 14px 0;
`;
