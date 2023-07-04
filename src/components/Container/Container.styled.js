import styled from 'styled-components';

export const StyleContainer = styled.div`
  /* background-color: var(--sidebarBgColor); */
  height: 100vh;

  @media screen and (min-width: 375px) {
    /* min-height: 752px; */
    // width: 375px;
  }

  @media screen and (min-width: 768px) {
    /* height: 100vh; */
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: row;
  }
`;
