import sprite from "../../images/sprite.svg"
import { Container, ContainerTitle, Icon, IconContainer, Img, Nav, StyledNavLinkLog, StyledNavLinkReg, Text, Title } from "./Welcome.styled";



export const Welcome = () => {
  return (
    <Container>
     <Img></Img>
      <ContainerTitle>
        <IconContainer >

        <Icon aria-label="open theme select icon">
        <use href={sprite + "#icon-logo-lightning"}></use> 
        </Icon>
        <Title>Task Pro</Title>
        </IconContainer>
      
      <Text>
      Supercharge your productivity and take control of your tasks with Task Pro - Dont wait, start achieving your goals now!
      </Text>
      </ContainerTitle>
      <Nav>
        <StyledNavLinkReg to="/auth/register">Registration</StyledNavLinkReg>
        <StyledNavLinkLog to="/auth/login">Log In</StyledNavLinkLog >
      </Nav>
    </Container>
  );
};
