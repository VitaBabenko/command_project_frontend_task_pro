import { useForm } from "react-hook-form";
import {
  WrapperPopUp, Input, WrapperInput, Textarea, ErrorMsg,
  ErrorResponseMessage, SuccessResponseMessage, ResponseMessageWrapper, ResponseMessage, WrapperBox
} from './needHelp.styled'
import { CustomButtonSend } from "components/Button/CustomButton";
import { technicalSupportRequest } from "redux/authorization/operations";
import { useState } from "react";
import { defaultResponseData, ERegisterFieldEmail, ERegisterFieldComment, defaultValues, checkResponse } from "./util";
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const ResponseMessages = ({ init, data, error }) => {
  if (!init) {
    return <></>;
  }
  return (
    <ResponseMessageWrapper>
      {data ?
        <SuccessResponseMessage>
          <CheckCircleIcon />
          <ResponseMessage>{data}</ResponseMessage>
        </SuccessResponseMessage > :

        <ErrorResponseMessage>
          <ErrorIcon />
          <ResponseMessage>{error}</ResponseMessage>
        </ErrorResponseMessage>}
    </ResponseMessageWrapper>
  );
}

export const NeedHelpPop = ({ HeaderRender }) => {
  const [responseData, setResponseData] = useState(defaultResponseData);
  const { register, handleSubmit, formState: { errors }, reset } = useForm(
    {
      shouldUnregister: true,
      mode: 'onChange',
      defaultValues,
    });

  const { isFetching } = responseData;

  const handleResponse = (response) => {
    setResponseData((prevState) => {
      return { ...prevState, ...response };
    });
    checkResponse(response.data, reset);
  }

  const onSubmit = async (data) => {
    const userData = {
      email: data[ERegisterFieldEmail],
      comment: data[ERegisterFieldComment],
    }
    await technicalSupportRequest(userData, handleResponse);
  };

  return (
    <WrapperPopUp>
      {HeaderRender('Need help')}
      <ResponseMessages {...{ ...responseData }} />
      <WrapperBox>
        <WrapperInput>
          <Input
            autoComplete="off"
            placeholder='Email address'
            type="email"
            disabled={isFetching}
            error={errors?.ERegisterFieldEmail}
            {...register(ERegisterFieldEmail, {
              required: 'This field is required.',
              pattern: {
                value:
                  '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$',
                message: 'Please enter a valid email',
              },
              maxLength: {
                value: 32,
                message: 'This field must not exceed 32 characters',
              },
            })}
          />
          {errors?.ERegisterFieldEmail && (
            <ErrorMsg>{errors.ERegisterFieldEmail.message}</ErrorMsg>
          )}
        </WrapperInput>
        <WrapperInput>
          <Textarea
            autoComplete="off"
            className={errors?.ERegisterFieldComment && 'error'}
            type="text"
            placeholder='Comment'
            disabled={isFetching}
            error={errors?.ERegisterFieldComment}
            {...register(ERegisterFieldComment, {
              required: 'This field is required.',
              maxLength: {
                value: 255,
                message: 'This input must not exceed 255 characters',
              },
            })}
          />
          {errors?.ERegisterFieldComment && (
            <ErrorMsg>{errors.ERegisterFieldComment.message}</ErrorMsg>
          )}
        </WrapperInput>
      </WrapperBox>
      <CustomButtonSend disabled={isFetching} onClick={handleSubmit(onSubmit)}>Send</CustomButtonSend>
    </WrapperPopUp >
  )
}