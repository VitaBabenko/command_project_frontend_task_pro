import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import {  useParams } from "react-router-dom";
import { useState } from "react";
import { AuthPageContainer, ContentWrapper, Navlink, NavWrapper } from "./AuthPage.styled";





const AuthPage = () => {
  const { id } = useParams();
  const [currentForm, setCurrentForm] = useState(id);

 

  return (
    <AuthPageContainer>
      
      <ContentWrapper>
        <NavWrapper>
        <Navlink to="/auth/register" isActive={currentForm === 'register'} onClick={() => setCurrentForm('register')} >
          Register
        </Navlink>
        <Navlink to="/auth/login" isActive={currentForm === 'login'} onClick={() => setCurrentForm('login')} >
          Log In
        </Navlink>
        </NavWrapper>
      {currentForm === 'register' && <RegisterForm  />}
      {currentForm === 'login' && <LoginForm  />}
      </ContentWrapper>
    </AuthPageContainer>
  );

  }





export default AuthPage;
