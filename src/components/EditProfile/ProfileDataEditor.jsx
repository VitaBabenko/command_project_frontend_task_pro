import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { regExpEmail } from '../../utils.js/regex';
import {
  ECurrentEditOperationEditAvatar,
  ERegisterFieldAvatar,
  ERegisterFieldEmail,
  ERegisterFieldName,
  ERegisterFieldPassword,
} from './util';
import '../../assets/index.css';
// import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import sprite from "../../images/sprite.svg";
import { Avatar, AvatarImg ,InputField} from './ProfileDataEditor.styled'

export const ProfileDataEditor = ({ currentImg, uploadImg, handleChangeNewImg, handleChangeCurrentOperation }) => {
  const { register, control, formState: { errors } } = useFormContext();
  const [isShowPassword, setIsShowPassword] = useState(false);

  const isFetching = false;
  const togglePass = () => {
    setIsShowPassword(prev => !prev);
  };

  console.log('uploadImg', uploadImg);
  return (
    <>
      <div className="file">
        <div>
          <Avatar>
            <AvatarImg src={currentImg} alt='Avatar' />
          </Avatar>

          <label htmlFor='avatar'>
            <input
              id='avatar'
              type="file"
              accept="/image/*"
              // value={''}
              onChange={(e) => {
                console.log(e);
                handleChangeCurrentOperation(ECurrentEditOperationEditAvatar);
                handleChangeNewImg(e);
              }}
            />
            <AddIcon />
          </label>

        </div>
        {errors?.ERegisterFieldAvatar && (
          <span className="error">{errors.ERegisterFieldAvatar.message}</span>
        )}
      </div>

      <div className="wrapper-input">
        <input
          autoComplete="off"
          disabled={isFetching}
          className={errors?.ERegisterFieldName && 'error'}
          type="text"
          placeholder=''
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
              value: 32,
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
                value: 32,
                message: 'This input must not exceed 32 characters',
              },
            })}
          />
          <span className="eye" onClick={togglePass}><svg className="icon" aria-label="open theme select icon">
            <use href={sprite + "#icon-eye"}></use>
          </svg></span>
        </div>
        {errors?.ERegisterFieldPassword && (
          <span className="error">{errors.ERegisterFieldPassword.message}</span>
        )}
      </div>
    </ >
  );
};
