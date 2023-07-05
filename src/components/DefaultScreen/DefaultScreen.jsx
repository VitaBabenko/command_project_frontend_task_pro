import {
  AccentText,
  DefaultText,
  DefaultWrapper,
  Wrap,
} from './DefaultScreen.styled';

export const DefaultScreen = () => {
  return (
    <Wrap>
      <DefaultWrapper>
        <DefaultText>
          Before starting your project, it is essential{' '}
          <AccentText>to create a board</AccentText> to visualize and track all
          the necessary tasks and milestones. This board serves as a powerful
          tool to organize the workflow and ensure effective collaboration among
          team members.
        </DefaultText>
      </DefaultWrapper>
    </Wrap>
  );
};
