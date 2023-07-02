// import ThemeSelect from "components/ThemeSelect/ThemeSelect";
import sprite from '../../images/sprite.svg';
import {
  WelcomeWrapper,
  Container,
  ContainerTitle,
  Icon,
  IconContainer,
  Img,
  Nav,
  StyledNavLinkLog,
  StyledNavLinkReg,
  Text,
  Title,
} from './Welcome.styled';

export const Welcome = () => {
  return (
    <WelcomeWrapper>
      <Container>
        <Img></Img>
        <ContainerTitle>
          <IconContainer>
            <Icon aria-label="open ">
              <use href={sprite + '#icon-logo-lightning'}></use>
            </Icon>
            <Title>Task Pro</Title>
          </IconContainer>

          <Text>
            Supercharge your productivity and take control of your tasks with
            Task <br /> Pro - Don`t wait, start achieving your goals now!
          </Text>
        </ContainerTitle>
        <Nav>
          <StyledNavLinkReg to="/auth/register">Registration</StyledNavLinkReg>
          <StyledNavLinkLog to="/auth/login">Log In</StyledNavLinkLog>
        </Nav>
        {/* <ThemeSelect /> */}
      </Container>
    </WelcomeWrapper>
  );
};
