import styled from 'styled-components';

export const SidebarMain = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 260px;
  height: 100%;
  background-color: var(--sidebarBgColor);
  color: #fff;
  transition: left cubic-bezier(0.15, 0.84, 1, 1) 0.219s;

  @media screen and (max-width: 768px) {
    left: -260px;
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
