import { useForm } from "react-hook-form";
import { WrapperPopUp, Input, WrapperInput, Textarea, ErrorText } from './needHelp.styled'
import { CustomButtonSend } from "components/Button/CustomButton";
import { regExpEmail } from '../../utils.js/regex';
import { ERegisterFieldEmail } from '../EditProfile/util'

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
      <WrapperInput>
        <Input
          autoComplete="off"
          placeholder='Email address'
          type="email"
          {...register(ERegisterFieldEmail, {
            required: 'This field is required.',
            pattern: {
              value: regExpEmail,
              message: 'Invalid email address',
            },
            maxLength: {
              value: 32,
              message: 'This field must not exceed 32 characters',
            },
          })}
        />
        {errors?.ERegisterFieldEmail && (
          <span className="error">{errors.ERegisterFieldEmail.message}</span>
        )}
        <Textarea
          autoComplete="off"
          className={errors?.ERegisterFieldName && 'error'}
          type="text"
          placeholder='Comment'
          {...register('exampleRequired', {
            required: 'This field is required.',
            maxLength: {
              value: 255,
              message: 'This input must not exceed 255 characters',
            },
          })}
        />
        {errors.exampleRequired && <ErrorText>This field is required</ErrorText>}
      </WrapperInput>
      <CustomButtonSend onClick={handleSubmit(onSubmit)}>Send</CustomButtonSend>
    </WrapperPopUp>


  )
}