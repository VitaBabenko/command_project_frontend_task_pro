import { useAuth } from 'components/hooks';
import {
  Button,
  Form,
  FormContainer,
  IconLogin,
  Input,
} from 'components/RegisterForm/RegisterForm.syled';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import { loginUser } from "redux/authorization/operations";
import sprite from "../../images/sprite.svg";



export const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  if (isLoggedIn) {
    navigate('/home', { replace: true });
  }

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  const onSubmit = async e => {
    try {
      dispatch(
        loginUser({
          email: e.email,
          password: e.password,
        })
      );
    } catch (error) {
      console.log(error);
    }

    reset();
  };

  return (
   
    <FormContainer>
      
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            {...register('email', { required: true })}
          />
          {errors.email && <span>Email is required</span>}
        </div>
        <div>
          <Input
            placeholder="Confirm a password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            {...register('password', { required: true })}
          />

          {errors.password && <span>Password is required</span>}
          <div onClick={togglePasswordVisibility}>
    {showPassword ? (<IconLogin aria-label="open theme select icon">
   <use href={sprite + "#icon-eye"}></use> 
</IconLogin>):(<IconLogin aria-label="open theme select icon">
   <use href={sprite + "#icon-eye"}></use> 
</IconLogin>)}
  </div>
        </div>
        <Button type="submit">Log In Now</Button>
      </Form>
      
      </FormContainer>
    
  );
};
