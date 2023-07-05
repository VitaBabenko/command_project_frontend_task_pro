import styled from 'styled-components';

export const SidebarMain = styled.div`
  min-width: 260px;
  width: 260px;
  background-color: var(--sidebarBgColor);
  padding: 24px;
  color: #fff;
  transition: left cubic-bezier(0.15, 0.84, 1, 1) 0.219s;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  @media screen and (max-width: 375px) {
    min-width: 225px;
    width: 225px;
  }
  @media screen and (max-width: 767px) {
    overflow: auto;
    position: fixed;
    left: -260px;
    z-index: 1000;
    &.visible {
      left: 0;
    }
  }
`;

export const Text = styled.p`
  margin-top: 60px;
`;
