import styled from 'styled-components';

export const HeaderMain = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 68px;
  @media screen and (max-width: 375px) {
    height: 60px;
  }

  background-color: var(--headerBgColor);

  position: relative;
  .header-burger {
    position: absolute;
    left: 32px;
    cursor: pointer;
    display: none;
  }
  @media screen and (max-width: 767px) {
    .header-burger {
      display: block;
      fill: #161616;
    }
  }
  @media screen and (max-width: 375px) {
    .header-burger {
      width: 24px;
      height: 24px;
    }
    .header-burger svg {
      width: inherit;
      height: inherit;
    }
  }
`;

export const Icon = styled.div``;
