import styled from 'styled-components';

export const StyleContainer = styled.div`
  height: 100vh;

  /* background-color: var(--sidebarBgColor); */

  @media screen and (min-width: 375px) {
    // width: 375px;
  }

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    width: 100%;
    display: flex;
  }
`;