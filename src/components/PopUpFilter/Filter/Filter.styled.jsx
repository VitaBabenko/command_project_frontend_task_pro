import styled from 'styled-components';
import RadioGroup from '@mui/material/RadioGroup';

export const RadioGr = styled(RadioGroup)`
  margin: 8px 0 0 32px;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 14px;
  border-top: 1px solid var(--modalGorizontalBorderColor);
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: var(--primaryTextColor);
`;

export const BtnShowAll = styled.button`
  border: none;
  background: inherit;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  text-decoration-line: underline;

  color: var(--popupTextColor);
`;

export const radioButtons = [
  {
    value: 'withoutPriority',
    label: 'Without priority',
    color: '#5B5B5B',
    checkedColor: '#5B5B5B',
    buttonColor: '#5B5B5B',
  },
  {
    value: 'low',
    label: 'Low',
    color: '#5B5B5B',
    checkedColor: '#8FA1D0',
    buttonColor: '#8FA1D0',
  },
  {
    value: 'medium',
    label: 'Medium',
    color: '#5B5B5B',
    checkedColor: '#E09CB5',
    buttonColor: '#E09CB5',
  },
  {
    value: 'high',
    label: 'High',
    color: '#5B5B5B',
    checkedColor: '#BEDBB0',
    buttonColor: '#BEDBB0',
  },
];
