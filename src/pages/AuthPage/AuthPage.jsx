import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { useParams } from 'react-router-dom';

import {
  AuthPageContainer,
  ContentWrapper,
  Navlink,
  NavWrapper,
} from './AuthPage.styled';

const AuthPage = () => {
  const { id } = useParams();

  return (
    <AuthPageContainer>
      <ContentWrapper>
        <NavWrapper>
          <Navlink to="/auth/register">Register</Navlink>
          <Navlink to="/auth/login">Log In</Navlink>
        </NavWrapper>
        {id === 'register' && <RegisterForm />}
        {id === 'login' && <LoginForm />}
      </ContentWrapper>
    </AuthPageContainer>
  );
};

export default AuthPage;
