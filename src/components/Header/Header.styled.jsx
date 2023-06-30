import styled from 'styled-components';

export const HeaderMain = styled.div`
  display: flex;
  width: 1180px;
  justify-content: flex-end;
  align-items: center;
  height: 68px;
  background-color: var(--headerBgColor);

  position: relative;
  .header-burger {
    position: absolute;
    left: 32px;
    cursor: pointer;
    display: none;
  }
  @media screen and (max-width: 768px) {
    .header-burger {
      display: block;
    }
  }
`;
