import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { regExpEmail } from '../../utils.js/regex';
import {
  ERegisterFieldEmail,
  ERegisterFieldName,
  ERegisterFieldPassword,
  getDefaultValuesForm,
  isAllRequiredFieldsDirty,
} from './util';
import './style.css';
// import { useEffect } from "react";

export const EditProfile = ({ toggle, open, HeaderRender }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    shouldUnregister: true,
    mode: 'onChange',
    defaultValues: getDefaultValuesForm(),
  });

  const isFetching = false;
  const isDisabledSubmitBtn =
    !isAllRequiredFieldsDirty(dirtyFields) ||
    !!Object.keys(errors).length ||
    isFetching;

  const togglePass = () => {
    setIsShowPassword(prev => !prev);
  };

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="edit-profile-wrapper">
      {HeaderRender('Edit profile')}
      {/* <img></img> */}

      <div className="wrapper-input">
        <input
          autoComplete="off"
          disabled={isFetching}
          className={errors?.ERegisterFieldName && 'error'}
          type="text"
          {...register(ERegisterFieldName, {
            required: 'This input is required.',
            maxLength: {
              value: 255,
              message: 'This input must not exceed 255 characters',
            },
          })}
        />
        {errors?.ERegisterFieldName && (
          <span className="error">{errors.ERegisterFieldName.message}</span>
        )}
      </div>

      <div className="wrapper-input">
        <input
          autoComplete="off"
          disabled={isFetching}
          className={errors?.ERegisterFieldEmail && 'error'}
          type="text"
          {...register(ERegisterFieldEmail, {
            required: 'This input is required.',
            pattern: {
              value: regExpEmail,
              message: 'Invalid email address',
            },
            maxLength: {
              value: 255,
              message: 'This input must not exceed 255 characters',
            },
          })}
        />
        {errors?.ERegisterFieldEmail && (
          <span className="error">{errors.ERegisterFieldEmail.message}</span>
        )}
      </div>

      <div className="wrapper-input">
        <div className="toggle_pass">
          <input
            autoComplete="off"
            disabled={isFetching}
            className={errors?.ERegisterFieldPassword && 'error'}
            type={isShowPassword ? 'text' : 'password'}
            {...register(ERegisterFieldPassword, {
              required: 'This input is required.',
              maxLength: {
                value: 255,
                message: 'This input must not exceed 255 characters',
              },
            })}
          />
          <span className="eye" onClick={togglePass}></span>
        </div>
        {errors?.ERegisterFieldPassword && (
          <span className="error">{errors.ERegisterFieldPassword.message}</span>
        )}
      </div>

      <button disabled={isDisabledSubmitBtn} onClick={handleSubmit(onSubmit)}>
        Save
      </button>
    </div>
  );
};
