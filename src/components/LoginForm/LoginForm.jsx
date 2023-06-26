import { Button, Form, Icon, Input } from "components/RegisterForm/RegisterForm.syled";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "redux/Auth/operestions";
import sprite from "../../images/sprite.svg";



export const LoginForm = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit,reset,  formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  

  const onSubmit = async (data) => {
    try {
      dispatch(loginUser(data));
     
      
    } catch (error) {
      console.log(error);
    }
    reset()
  };

  return (
    <div>
      
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
        <Input
        type="email"
        name="email"
        placeholder='Enter your email'
        {...register('email',{ required: true })}
      />
      {errors.email && <span>Email is required</span>}
        </div>
        <div>
          
          <Input placeholder="Confirm a password" type="password" name="password" {...register('password',{ required: true })} />

          {errors.password && <span>Password is required</span>}
          <div onClick={togglePasswordVisibility}>
    {showPassword ? (<Icon aria-label="open theme select icon">
   <use href={sprite + "#icon-eye"}></use> 
</Icon>):<Icon aria-label="open theme select icon">
   <use href={sprite + "#icon-eye"}></use> 
</Icon>}
  </div>
        </div>
        <Button type="submit">Log In Now</Button>
      </Form>
    </div>
  );
};
