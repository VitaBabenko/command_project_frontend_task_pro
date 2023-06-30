import { useForm } from "react-hook-form";
import { WrapperPopUp, Input, WrapperInput, Textarea, ErrorText } from './needHelp.styled'
import { CustomButtonSend } from "components/Button/CustomButton";
import { regExpEmail } from '../../utils.js/regex';
import { ERegisterFieldEmail } from '../EditProfile/util'
import { technicalSupportRequest } from "redux/Auth/operations";
import { useState } from "react";
import { defaultResponseData } from "./util";

export const NeedHelpPop = ({ HeaderRender }) => {
  const [responseData, setResponseData] = useState(defaultResponseData);
  const { register, handleSubmit, formState: { errors } } = useForm(
    {
      shouldUnregister: true,
      mode: 'onChange',
    });

  const { isFetching, init, data, error } = responseData;

  const handleResponse = (response) => {
    setResponseData((prevState) => {
      return { ...prevState, ...response };
    });
  }

  const onSubmit = async (data) => {
    console.log(data);
    const userData = {
      email: data[ERegisterFieldEmail],
      comment: data['exampleRequired'],
    }
    await technicalSupportRequest(userData, handleResponse);
  };
  console.log(JSON.stringify(data), JSON.stringify(error));
  return (
    <WrapperPopUp>
      {HeaderRender('Need help')}
      {init ? (data ? JSON.stringify(data) : JSON.stringify(error)) : ''}
      <WrapperInput>
        <Input
          autoComplete="off"
          placeholder='Email address'
          type="email"
          disabled={isFetching}
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
          disabled={isFetching}
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
      <CustomButtonSend disabled={isFetching} onClick={handleSubmit(onSubmit)}>Send</CustomButtonSend>
    </WrapperPopUp>


  )
}