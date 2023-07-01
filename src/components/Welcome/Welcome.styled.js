import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WelcomeWrapper = styled.h1`
background-color: #ffffff;
  background-image: var(--authBgGradient);
`;

export const Title = styled.h1`
  position: relative;
  margin: 0;
  color: #161616;
  font-size: 40px;
  font-family: Poppins;
  font-weight: 600;
  
  letter-spacing: 1.6px;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;

export const Icon = styled.svg`
  width: 48px;
  height: 48px;
  padding: 10px;
  stroke: white;
  fill: white;
  background-color: #161616;
  border-radius: 8px;
`;

export const Container = styled.div`
margin: auto;
  gap: 24px;
  display: flex;
  width:100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
@media (min-width: 375px) {
  width: 335px;
}

@media (min-width: 768px) {
  width: 473px;
}
  
  /* background-color: #f6f6f7; */
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 14px;
  
  line-height: 18px;
  letter-spacing: -0.28px;
  font-weight: 400;

  color: #161616;
`;

export const Img = styled.div`
  width: 162px;
  height: 162px;
  background-image: url('https://res.cloudinary.com/dxhypjavs/image/upload/v1687412197/command_project_task_pro_images/additionally/user-desk_tablet.png');
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 14px;
  width: 100%;
`;

export const StyledNavLinkReg = styled(NavLink)`


  display: flex;
  width: 100%;
  padding: 14px 0;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: 0.28px;

  border-radius: 8px;
  background: #161616;
  color: #fff;

  transition: opacity var(--transition_data);
  @media (min-width: 375px) {
  width: 335px;;
}
@media (min-width: 768px) {
  width: 344px;
}
  &:hover {
    opacity: 0.7;
  }
`;

export const StyledNavLinkLog = styled(NavLink)`
  text-decoration: none;
  font-size: 14px;
  padding: 14px 0px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
  justify-content: center;
  align-items: center;

  color: #161616;
`;
