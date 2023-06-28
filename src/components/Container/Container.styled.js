import styled from 'styled-components';

export const StyleContainer = styled.div`
height: 100vh;

  /* background-color: var(--sidebarBgColor); */

  @media screen and (min-width: 320px) {
    width: 320px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    display: flex;
  }
`;
