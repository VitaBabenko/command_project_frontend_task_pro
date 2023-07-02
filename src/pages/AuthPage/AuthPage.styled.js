import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

export const AuthPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
  background-image: var(--authBgGradient);
`;

export const ContentWrapper = styled.div`
  width: 100%;

  padding: 24px;
  background: #151515;
  border-radius: 8px;

  text-align: center;
  color: white;
  margin: 0 auto;

  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 768px) {
    width: 424px;
    border: 1px solid black;
    padding: 40px;
  }
`;

export const Navlink = styled(NavLink)`
  margin-bottom: 40px;
  color: rgba(255, 255, 255, 0.3);
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-decoration: none;

  &.active {
    color: #ffff;
  }
`;
export const NavWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
