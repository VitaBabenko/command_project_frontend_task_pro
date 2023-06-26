import { NavLink } from 'react-router-dom';
import styled, {css} from 'styled-components';
// import { NavLink } from 'react-router-dom';


export const AuthPageContainer = styled.div`
   
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
 
  
`;

export const ContentWrapper = styled.div`
 /* width: 424px;
  height: 332px; */
  padding: 40px;
  background: #151515;
  border-radius: 8px;
  
  text-align: center;
  color: white; 
  margin: 0 auto;
  
`;

export const Navlink = styled(NavLink)`
  color: rgba(255, 255, 255, 0.30);
font-size: 18px;
font-family: Poppins;
font-weight: 500;
letter-spacing: -0.36px;
text-decoration: none;

  ${(props) =>
    props.isactive &&
    css`
      color: #FFF;
 
    `}
  
`;
export const NavWrapper = styled.div`
  display: flex;
  gap:10px;
  margin-bottom: 40px;

  

`

