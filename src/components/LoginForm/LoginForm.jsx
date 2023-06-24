import { Button, Form, Icon, Input } from "components/RegisterForm/RegisterForm.syled";
import { useState } from "react";
import { useForm } from "react-hook-form";
import sprite from "../../images/sprite.svg";
// import { unstable_HistoryRouter } from "react-router-dom";

export const LoginForm = () => {

  const { register, handleSubmit,  formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  // const history = unstable_HistoryRouter();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      // history.push('/home');
    } catch (error) {
      console.log(error);
    }
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
