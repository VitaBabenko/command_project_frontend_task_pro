import styled from 'styled-components';

export const SidebarMain = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  min-width: 260px;
  width: 260px;
  background-color: var(--sidebarBgColor);
  padding: 24px;
  color: #fff;
  transition: left cubic-bezier(0.15, 0.84, 1, 1) 0.219s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  @media screen and (max-width: 375px) {
    min-width: 225px;
    width: 225px;
  }
  @media screen and (min-width: 768px) {
    /* height: 100vh; */
    overflow: auto;
    position: static;
    /* left: -260px;
    top: 68px;
    z-index: 1000; */
    /* min-height: 100%; */
    /* padding-bottom: 120px; */
    &.visible {
      left: 0;
    }
  }
`;

// export const Inn = styled.div`
//   background-color: var(--sidebarBgColor);
//   // display: flex;
//   // flex-direction: column;
//   // height: 100%;
// `;

export const Text = styled.p`
  margin-top: 60px;
`;
