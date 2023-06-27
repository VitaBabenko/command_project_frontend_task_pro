import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
// import { NavLink } from 'react-router-dom';

export const AuthPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background-image: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    #bedbb0 92.19%
  );
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
  color: rgba(255, 255, 255, 0.3);
  font-size: 18px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-decoration: none;

  ${props =>
    props.isactive &&
    css`
      color: #fff;
    `}
`;
export const NavWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 40px;
`;
