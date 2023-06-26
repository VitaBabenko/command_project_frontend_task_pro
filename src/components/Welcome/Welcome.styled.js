import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const Title = styled.h1`
position: relative;
margin: 0 ;
color: #161616;
font-size: 40px;
font-family: Poppins;
font-weight: 600;
letter-spacing: 1.6px;

`;

export const IconContainer = styled.div`

  display: flex;
  gap:14px;  
  align-items: center;
  
`;

export const Icon = styled.svg`
 
  width: 48px;
  height: 48px;
  padding: 10px;
  stroke:white;
  fill: white;
  background-color:#161616;
  border-radius: 8px; 
`;

export const Container = styled.div`
    margin: auto ;
    gap:24px;
    display: flex;
    width: 473px;
    height: 100vh;
    flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-color: #F6F6F7;
    
`;

export const ContainerTitle = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap:24px;
   
`

export const Text = styled.p`
    text-align: center;
    font-size: 14px;
    font-family: Poppins;
    line-height: 18px;
    letter-spacing: 0.28px;

    color: #161616;
`;

export const Img = styled.div`
    width: 162px;
    height: 162px;
    background-image: url('https://res.cloudinary.com/dxhypjavs/image/upload/v1687412197/command_project_task_pro_images/additionally/user-desk_tablet.png')
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap:14px;
`;

export const StyledNavLinkReg = styled(NavLink)`
display: flex;
width: 344px;
padding: 14px 0px;
justify-content: center;
align-items: center;

text-decoration: none;
font-size: 14px;
font-family: Poppins;
font-weight: 500;
letter-spacing: 0.28px;

border-radius: 8px;
background: #161616;
color: #FFF;


`;

export const StyledNavLinkLog = styled(NavLink)`
text-decoration: none;
font-size: 14px;
font-family: Poppins;
font-weight: 500;
letter-spacing: 0.28px;

color: #161616;
`
