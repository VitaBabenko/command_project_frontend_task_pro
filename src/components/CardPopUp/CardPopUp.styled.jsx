import styled, { css } from 'styled-components';

const hoverFocusStyles = css`
  border: 1px solid var(--greenGreenBlueColor);
  opacity: 0.7;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 302px;
`;
export const FormText = styled.label`
  color: var(--primaryTextColor);
  text-align: start;
  margin-bottom: 24px;
  font-size: 18px;
  font-weight: 500;
`;
export const FromInput = styled.input`
  background-color: var(--themeListBgColor);
  padding: 14px 18px;
  margin-bottom: 24px;
  border-radius: 8px;
  border: 1px solid var(--passiveBorderColor);
  outline: none;
  transition: opacity var(--transition_data);
  &:hover {
    ${hoverFocusStyles};
  }
  &:focus {
    ${hoverFocusStyles};
  }
  &::placeholder {
    color: var(--calendarSecondTextColor);
  }
`;

export const FormTextarea = styled.textarea`
  background-color: var(--themeListBgColor);
  vertical-align: text-top;
  resize: none;
  min-height: 154px;
  padding: 14px 18px;
  margin-bottom: 24px;
  border-radius: 8px;
  border: 1px solid var(--passiveBorderColor);
  outline: none;
  transition: opacity var(--transition_data);
  &::placeholder {
  }
  &:hover {
    ${hoverFocusStyles};
  }
  &:focus {
    ${hoverFocusStyles};
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
`;

export const RadioLabel = styled.label`
  --radio-background-color: ${props => {
    switch (props.value) {
      case 'low':
        return '#8FA1D0';
      case 'medium':
        return '#E09CB5';
      case 'high':
        return '#BEDBB0';
      case 'without':
        return ' var(--calendarWithoutColor)';
      default:
        return '#000000';
    }
  }};
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;

  cursor: pointer;
  background-color: var(--radio-background-color);
`;

export const RadioButton = styled.input`
  display: none;
  &:checked + ${RadioLabel} {
    width: 8px;
    height: 8px;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 14px;
      height: 14px;
      background-color: transparent;
      border: 1px solid var(--radio-background-color);
      border-radius: 50%;
    }
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export const Text = styled.span`
  color: var(--calendarSecondTextColor);
  font-size: 12px;
  margin-bottom: 6px;
`;

export const CalendarWrapp = styled.div`
  display: flex;

  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 40px;
  transition: opacity var(--transition_data);
  &:hover {
    opacity: 0.7;
  }
  &:focus {
    opacity: 0.7;
  }
`;
export const CalendarText = styled.span`
  color: var(--greenGreenBlueColor);
  margin-right: 4px;
`;

export const CalendarArrow = styled.svg`
  width: 18px;
  height: 18px;
  stroke: var(--greenGreenBlueColor);
`;
