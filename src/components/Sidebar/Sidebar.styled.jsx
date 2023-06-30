import styled from 'styled-components';

export const SidebarMain = styled.div`
  min-width: 260px;
  width: 260px;
  height: 100vh;
  background-color: var(--sidebarBgColor);
  color: #fff;
  transition: left cubic-bezier(0.15, 0.84, 1, 1) 0.219s;
  @media screen and (max-width: 768px) {
    position: fixed;
    left: -260px;
    top: 64px;
    &.visible {
      left: 0;
    }
  }
`;

export const Inn = styled.div`
 margin-left: 24px;
`;

export const Text = styled.p`
 margin-top: 60px;
`;
