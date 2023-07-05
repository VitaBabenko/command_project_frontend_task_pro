import styled from 'styled-components';

export const CardStyled = styled.div`
  background: var(--cardItem);
  max-width: 334px;
  min-height: 154px;
  border-radius: 8px;
  margin-top: 15px;
  margin-right: 10px;
  margin-bottom: -10px;
  border-left: 4px solid #8fa1d0;
  border-left: 4px solid
    ${props => {
      switch (props.priority) {
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
`;

export const CardTitle = styled.p`
  color: var(--cardHeaderText);
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 7px;
`;

export const CardText = styled.p`
  color: var(--cardItemText);
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 300px;
`;

export const CardFooterTitle = styled.p`
  color: var(--cardItemText);
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  padding-top: 5px;
`;

export const DividerStyled = styled.div`
  background: var(--dividerColor);
  width: 300px;
  height: 1px;
`;

export const WrapperFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperText = styled.p`
  color: var(--cardHeaderText);
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  padding-top: 8px;
`;

export const StatusWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4px;
`;

export const StatusStyled = styled.div`
  width: 12px;
  height: 12px;
  background: ${props => {
    switch (props.priority) {
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
  border-radius: 50%;
`;

export const SvgIconsStyled = styled.svg`
  stroke: var(--iconCardColor);
  fill: none;
  &:hover,
  &:focus {
    stroke: #bedbb0;
    box-shadow: 0px 0px 0px 0px #87d3ae;
  }
`;

export const ScrollStyled = styled.div`
display: flex;
flex-direction: column;
`;

export const SvgIconsStyledBell = styled.svg`
  stroke: ${props => {
  switch (true) {
      case props.timeline < 0:
        return '#e40c0c';
      case props.timeline < 24:
        return '#BEDBB0';
      default:
        return 'var(--iconCardColor)';
  }
}};
fill: none;
`;

