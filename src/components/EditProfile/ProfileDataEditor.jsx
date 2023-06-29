import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { regExpEmail } from '../../utils.js/regex';
import {
  ECurrentEditOperationEditAvatar,
  ERegisterFieldEmail,
  ERegisterFieldName,
  ERegisterFieldPassword,
} from './util';
import '../../assets/index.css';
// import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import sprite from "../../images/sprite.svg";
import { Avatar, AvatarImg, InputField, Icon, IconUser, AvatarImgCurrent } from './ProfileDataEditor.styled'

export const ProfileDataEditor = ({ currentImg, uploadImg, handleChangeNewImg, handleChangeCurrentOperation, inputRef }) => {
  const { register, control, formState: { errors } } = useFormContext();
  const [isShowPassword, setIsShowPassword] = useState(false);

  const isFetching = false;
  const togglePass = () => {
    setIsShowPassword(prev => !prev);
  };

  return (
    <>
      <div className="file">
        <div>
          <Avatar>
            {currentImg ?
              <AvatarImgCurrent src={currentImg} /> :
              <AvatarImg
                aria-label="icon eye"
                width="68"
                height="68"
              >
                <IconUser href={sprite + '#icon-user-default'}></IconUser>
              </AvatarImg>
            }
          </Avatar>

          <label htmlFor='avatar'>
            <InputField
              id='avatar'
              type="file"
              accept="/image/*"
              ref={inputRef}
              onChange={(e) => {
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
        <InputField
          autoComplete="off"
          disabled={isFetching}
          className={errors?.ERegisterFieldName && 'error'}
          type="text"
          placeholder="Enter your name"
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
        <InputField
          autoComplete="off"
          disabled={isFetching}
          className={errors?.ERegisterFieldEmail && 'error'}
          placeholder="Enter your email"
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
          <InputField
            autoComplete="off"
            disabled={isFetching}
            className={errors?.ERegisterFieldPassword && 'error'}
            placeholder="Confirm a password"
            type={isShowPassword ? 'text' : 'password'}
            {...register(ERegisterFieldPassword, {
              required: 'This input is required.',
              maxLength: {
                value: 32,
                message: 'This input must not exceed 32 characters',
              },
            })}
          />
          <span onClick={togglePass}>
            <Icon
              aria-label="icon eye"
              width="18"
              height="18"
            >
              <use href={sprite + '#icon-eye'}></use>
            </Icon>
          </span>
        </div>
        {errors?.ERegisterFieldPassword && (
          <span className="error">{errors.ERegisterFieldPassword.message}</span>
        )}
      </div>
    </ >
  );
};
