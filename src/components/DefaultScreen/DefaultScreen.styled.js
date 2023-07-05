import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--boardBgColor);
  border: none;
  height: calc(100vh - 68px);

  @media screen and (max-width: 375px) {
    height: calc(100vh - 60px);
  }
`;

export const DefaultWrapper = styled.div`
  padding: 20px;
  width: 335px;

  @media (min-width: 767px) {
    width: 486px;
  }
`;

export const DefaultText = styled.p`
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: -0.02em;
  text-align: center;
  color: var(--primaryTextColor);
`;

export const AccentText = styled.span`
  color: var(--greenGreenBlueColor);
`;
