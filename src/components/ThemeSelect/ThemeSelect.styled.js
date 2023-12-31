import styled from 'styled-components';

export const ThemetWrapper = styled.div`
  position: relative;
`;

export const ThemeSelectTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 68px;
  height: 21px;
  color: var(--themeTitleTextColor);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  cursor: pointer;
  transition: opacity var(--transition_data);

  &:hover,
  &:focus {
    opacity: 0.7;
  }
`;

export const ThemeSelectWrapper = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100px;
  height: 107px;
  box-sizing: border-box;
  padding: 18px 44px 18px 18px;
  border-radius: 8px;
  border: 1px solid var(--greenGreenBlueColor);
  background-color: var(--themeListBgColor);
  box-shadow: var(--boxShadow);
  z-index: 50;
`;

export const ThemeSelects = styled.li`
  font-size: 14px;
  letter-spacing: -0.28px;
  cursor: pointer;
  color: var(
    --${props => (props.theme === props.children.toLowerCase() ? 'greenGreenBlueColor' : 'popupTextColor')}
  );
  transition: opacity var(--transition_data);

  &:hover {
    opacity: 0.7;
  }
`;

export const ThemeSelectIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--themeTitleTextColor);
  fill: var(--passiveBorderColor);
`;
