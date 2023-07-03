import styled from 'styled-components';

export const SidebarLogo = styled.div`
  color: #ffffff;
  /* margin-top: 24px; */
  /* margin-left: 24px; */
  margin-right: auto;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.div`
  margin-right: 8px;
  width: 32px;
  height: 32px;
  background-color: var(--logoBackground);
  border-radius: 8px;
  padding: 6px 7px;
`;

export const IconLogo = styled.svg`
  fill: var(--logoIcon);
`;

export const Text = styled.h3`
  color: var(--addAnotherColumnIconBgColor);
  font-size: 16px;
  font-weight: 600;
`;
