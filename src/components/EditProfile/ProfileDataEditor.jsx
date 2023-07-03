import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import {
  ECurrentEditOperationEditAvatar,
  ERegisterFieldEmail,
  ERegisterFieldName,
  ERegisterFieldPassword,
} from './util';
import AddIcon from '@mui/icons-material/Add';
import sprite from '../../images/sprite.svg';
import {
  Avatar,
  AvatarImg,
  Icon,
  IconUser,
  AvatarImgCurrent,
  WrapperPass,
  IconPassword,
  WrapperAvatar,
  WrapperAvatarBody,
} from './ProfileDataEditor.styled';
import { WrapperInput, Input, ErrorMsg, InputLabel } from 'components/NeedHelp/needHelp.styled';

export const ProfileDataEditor = ({
  currentImg,
  handleChangeNewImg,
  handleChangeCurrentOperation,
  inputRef,
  isFetching,
}) => {
  const {
    register,
    formState: { errors }, watch,
  } = useFormContext();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const watchPass = watch(ERegisterFieldPassword);

  const togglePass = () => {
    setIsShowPassword(prev => !prev);
  };

  return (
    <>
      <WrapperAvatar>
        <WrapperAvatarBody>
          <Avatar>
            {currentImg ? (
              <AvatarImgCurrent src={currentImg} />
            ) : (
              <AvatarImg
                aria-label="icon eye"
                width="68"
                height="68"
                viewBox="0 -3 68 68"
              >
                <IconUser href={sprite + '#icon-user-default'} ></IconUser>
              </AvatarImg>
            )}
          </Avatar>

          <InputLabel htmlFor="avatar">
            <Input
              id="avatar"
              type="file"
              accept="/image/*"
              ref={inputRef}
              onChange={e => {
                handleChangeCurrentOperation(ECurrentEditOperationEditAvatar);
                handleChangeNewImg(e);
              }}
            />
            <AddIcon disabled={isFetching} />
          </InputLabel>
        </WrapperAvatarBody>

        {errors?.ERegisterFieldAvatar && (
          <ErrorMsg>{errors.ERegisterFieldAvatar.message}</ErrorMsg>
        )}

      </WrapperAvatar>

      <WrapperInput>
        <Input
          autoComplete="off"
          placeholder="Enter your name"
          type="text"
          disabled={isFetching}
          error={errors?.ERegisterFieldName}
          {...register(ERegisterFieldName, {
            required: 'This field is required.',
            minLength: {
              value: 2,
              message: 'Name must be at least 2 characters long',
            },
            maxLength: {
              value: 32,
              message: 'Name can be maximum 32 characters long',
            },
          })}
        />
        {errors?.ERegisterFieldName && (
          <ErrorMsg>{errors.ERegisterFieldName.message}</ErrorMsg>
        )}
      </WrapperInput>

      <WrapperInput>
        <Input
          autoComplete="off"
          placeholder="Enter your email"
          type="text"
          disabled={isFetching}
          error={errors?.ERegisterFieldEmail}
          {...register(ERegisterFieldEmail, {
            required: 'This input is required.',
            pattern: {
              value:
                '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$',
              message: 'Please enter a valid email',
            },
            maxLength: {
              value: 64,
              message: 'This input must not exceed 64 characters',
            },
          })}
        />
        {errors?.ERegisterFieldEmail && (
          <ErrorMsg>{errors.ERegisterFieldEmail.message}</ErrorMsg>
        )}
      </WrapperInput>

      <WrapperInput>
        <WrapperPass>
          < Input
            autoComplete="off"
            placeholder="Enter a password"
            type={isShowPassword ? 'text' : 'password'}
            disabled={isFetching}
            error={errors?.ERegisterFieldPassword}
            {...register(ERegisterFieldPassword, {
              required: 'This input is required.',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long',
              },
              maxLength: {
                value: 64,
                message: 'Password can be maximum 64 characters long',
              },
            })}
          />
          {watchPass &&
            <>
              <IconPassword onClick={togglePass}>
                <Icon aria-label="icon eye" width="18" height="18">
                  <use href={sprite + '#icon-eye'}></use>
                </Icon>
              </IconPassword>
            </>
          }
        </WrapperPass>
        {errors?.ERegisterFieldPassword && (
          <ErrorMsg>{errors.ERegisterFieldPassword.message}</ErrorMsg>
        )}
      </WrapperInput>
    </>
  );
};
