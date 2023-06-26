import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, Icon, Input } from './RegisterForm.syled';
import sprite from "../../images/sprite.svg";
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/Auth/operestions';




export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };




  const {
    register,
    handleSubmit,
    
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
   dispatch(registerUser( data))
  console.log(data);
    
    reset();
    
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
    <div>
      
      <Input
        type="text"
        name="name"
        placeholder="Enter your name"
        {...register('name',{ required: true })}
      />
      {errors.name && <span></span>}
    </div>
    <div>
      
      <Input
        type="email"
        name="email"
        placeholder='Enter your email'
        {...register('email',{ required: true })}
      />
      {errors.email && <span></span>}
    </div>
    <div>
      
      <Input
         type={showPassword ? "text" : "password"}
         name="password"
        
        placeholder='Create a password'
        {...register('password',{ required: true })}
      />
      {errors.password && <span></span>}
      <div onClick={togglePasswordVisibility}>
    {showPassword ? (<Icon aria-label="open theme select icon">
   <use href={sprite + "#icon-eye"}></use> 
</Icon>):<Icon aria-label="open theme select icon">
   <use href={sprite + "#icon-eye"}></use> 
</Icon>}
  </div>
    </div>
    <Button type="submit">Register Now</Button>
  </Form>
  );
};
