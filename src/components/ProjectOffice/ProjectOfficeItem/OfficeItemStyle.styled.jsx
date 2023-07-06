import styled from 'styled-components';

export const ActionsButton = styled.div`
  background: var(--actionsButton);
  width: 334px;
  height: 56px;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

export const StyledTitle = styled.p`
  color: var(--primaryTextColor);
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
`;

export const IconButtonWrapper = styled.button`
  background: inherit;
  border: none;
  margin-right: -8px;
  cursor: pointer;
`;

export const ProjectWrapper = styled.div`
  display: flex;
  width: calc(100vw - 260px);
  padding: 0px 24px 8px 0;
  flex-direction: row;
  gap: 10px;
  overflow: auto;
  @media screen and (max-width: 375px) {
    max-height: 450px;
    width: 100vw;
  }
  @media screen and (max-width: 767px) {
    width: 100vw;
  }
`;

export const ColumnHeight = styled.div`
  overflow: auto;
  height: calc(100vh - 340px);
`;
