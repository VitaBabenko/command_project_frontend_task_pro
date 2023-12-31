import styled from 'styled-components';

export const Title = styled.p`
  color: var(--cardHeaderText);
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const FilterText = styled.p`
  color: var(--cardHeaderText);
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  cursor: pointer;
`;

export const SvgIcons = styled.svg`
  stroke: var(--primaryTextColor);
`;

export const BtnFilter = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  color: var(--cardHeaderText);
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;

  width: 64px;
  height: 20px;
  padding: 0;
  margin: 0;
  background: transparent;
  border: none;
  transition: opacity var(--transition_data);

  &:hover,
  &:focus {
    opacity: 0.7;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const PopUpFilterWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 999;
`;

export const PopUpFilterContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  padding: 16px;
`;

export const ContainerOffiseHeader = styled.div`
  width: calc(100vw - 300px);
  padding: 18px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 767px) {
    width: 100vw;
    padding: 18px 32px;
  }
  @media screen and (max-width: 375px) {
    padding: 18px 32px;
    width: 100vw;
  }
`;
