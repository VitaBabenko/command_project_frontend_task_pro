import { useForm } from "react-hook-form";
import { WrapperPopUp } from './needHelp.styled'
import { CustomButtonSend } from "components/Button/CustomButton";
import { regExpEmail } from '../../utils.js/regex';
import {ERegisterFieldEmail} from '../EditProfile/util'

export const NeedHelpPop = ({ HeaderRender }) => {
   const { register, handleSubmit, formState: { errors } } = useForm(
    {
      shouldUnregister: true,
      mode: 'onChange',
    });

  const onSubmit = (data) => {
    console.log(data);
  };


  return (
    <WrapperPopUp>
     {HeaderRender('Need help')}
     <input
          autoComplete="off"
          placeholder='Email address'
         
          type="email"
          {...register(ERegisterFieldEmail, {
            required: 'This input is required.',
            pattern: {
              value: regExpEmail,
              message: 'Invalid email address',
            },
            maxLength: {
              value: 32,
              message: 'This input must not exceed 32 characters',
            },
          })}
        />
      <input {...register("exampleRequired", { required: true })} placeholder='Comment'/>
      {errors.exampleRequired && <p>This field is required</p>}
      <CustomButtonSend onClick={handleSubmit(onSubmit)}>Send</CustomButtonSend>
    </WrapperPopUp>


  )
}