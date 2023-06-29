import styled from 'styled-components';

export const StyleContainer = styled.div`
  height: 100vh;

  /* background-color: var(--sidebarBgColor); */

  @media screen and (min-width: 375px) {
    width: 100%;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    display: flex;
  }
`;
