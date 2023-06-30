import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, ErrorContainer, ErrorMessage, Form, FormContainer, Icon, Input } from './RegisterForm.syled';
import sprite from '../../images/sprite.svg';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/Auth/operations';


export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  const {
    register,
    handleSubmit,

    formState: { errors },
    reset,
  } = useForm();


  const onSubmit = (data,token) => {
   dispatch(registerUser( data,token))
  
    

    reset();
  };

  return (
    <FormContainer>
    <Form onSubmit={handleSubmit(onSubmit)}>
      
      <ErrorContainer>
        <Input
          type="text"
          name="name"
          placeholder="Enter your name"
          {...register('name', { 
            required: 'This field is required',
          pattern: {
            value:  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
            message: 'Name can only contain Latin letters, digits, and some special characters'
          },
          minLength: {
            value: 2,
            message: 'Name must be at least 2 characters long'
          },
          maxLength: {
            value: 32,
            message: 'Name can be maximum 32 characters long' }})}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </ErrorContainer>
      <ErrorContainer>
        <Input
           variant="filled"
           size="md"
          type="email"
          name="email"
          placeholder="Enter your email"
          {...register('email'
          , { 
          required: 'This field is required',
          pattern: {
            value: "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$",
            message: 'Please enter a valid email'
          } }
          )}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </ErrorContainer>
        <ErrorContainer>
        <Input
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Create a password"
          {...register('password', {
            required: 'This field is required',
            pattern: {
              value: /^[A-Za-z0-9!@#$%^&*()_]+$/,
              message: 'Password can only contain Latin letters, digits, and some special characters'
          },
            minLength: {
             value: 8,
             message: 'Password must be at least 8 characters long'
          },
            maxLength: {
              value: 64,
              message: 'Password can be maximum 64 characters long'
          }})}
        />
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        </ErrorContainer>
        <div onClick={togglePasswordVisibility}>
          {showPassword ? (
            <Icon aria-label="open theme select icon">
              <use href={sprite + '#icon-eye'}></use>
            </Icon>
          ) : (
            <Icon aria-label="open theme select icon">
              <use href={sprite + '#icon-eye'}></use>
            </Icon>
          )}
        </div>
            
      <Button type="submit">Register Now</Button>
     
    </Form>
    </FormContainer>
  );
};
