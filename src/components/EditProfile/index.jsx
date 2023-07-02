import { useEffect, useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import {
  ECurrentEditOperationEditAvatar,
  ECurrentEditOperationEditData,
  ERegisterFieldAvatar,
  ERegisterFieldEmail,
  ERegisterFieldName,
  ERegisterFieldPassword,
  getDefaultValuesForm,
  isTypeFileImg,
  convert2DataUrl,
  url2File,
} from './util';
import { AvatarEditorContainer } from './AvatarEditor';
import { updateUser } from "redux/authorization/operations";
import { resetUpdateUserInfo } from "redux/authorization/slice";

import { ProfileDataEditor } from './ProfileDataEditor';
import { CustomButtonSend } from 'components/Button/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { EditProfileWrapper, EditProfileWrapperBody, WrapperBox } from './ProfileDataEditor.styled'
import { ResponseMessages } from 'components/NeedHelp/NeedHelpPop';

export const EditProfile = ({ toggle, open, HeaderRender }) => {
  const { user: { name, email, avatar }, loading, error, init } = useSelector((state) => state.auth);
  const [currentEditOperation, setCurrentEditOperation] = useState(ECurrentEditOperationEditData);
  const [currentImg, setCurrentImg] = useState(null);
  const [uploadImg, setUploadImg] = useState('');

  const uploadImgRef = useRef(null);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const methods = useForm({
    shouldUnregister: true,
    mode: 'onChange',
    defaultValues: getDefaultValuesForm(name, email, avatar),
  });

  const { handleSubmit, setError, clearErrors } = methods;
  const isEditAvatarOperation = currentEditOperation === ECurrentEditOperationEditAvatar;

  const isDisabledSubmitBtn = loading;
  const onSubmit = async (data) => {
    console.log('dasdasd', uploadImgRef.current);
    if (!uploadImgRef.current) {
      setFormFieldFieldAvatarError('This input is required.');
      return;
    }

    const blob = new Blob([currentImg], { type: 'image/png' })
    let dataUrl = await convert2DataUrl(blob);
    const file = await url2File(dataUrl, currentImg)

    const userData = {
      name: data[ERegisterFieldName],
      email: data[ERegisterFieldEmail],
      password: data[ERegisterFieldPassword],
      avatarURL: uploadImgRef.current ? uploadImgRef.current : file,
    }

    dispatch(updateUser(userData));
  };

  const setFormFieldsError = (registerName, message) => {
    setError(registerName, {
      type: 'custom', message
    });
  };

  const setFormFieldFieldAvatarError = (message) => {
    setFormFieldsError(ERegisterFieldAvatar, message)
  };

  const handleChangeNewImg = (e) => {
    const file = e.target?.files?.[0];
    if (!(file && isTypeFileImg(file?.type))) {
      setCurrentEditOperation(ECurrentEditOperationEditData)
      setFormFieldFieldAvatarError('Invalid format');
      return;
    }
    uploadImgRef.current = file;
    clearErrors(ERegisterFieldAvatar)
    setUploadImg(file);
  };

  const handleSetCurrentImg = (img) => {
    setCurrentImg(img);
  }

  const handleChangeCurrentOperation = (currentOperation) => {
    setCurrentEditOperation(currentOperation);
  }

  const handleCloseEditAvatar = () => {
    setCurrentEditOperation(ECurrentEditOperationEditData);
    setUploadImg('');
    inputRef.current.value = null;
  };

  useEffect(() => {
    return (() => {
      dispatch(resetUpdateUserInfo())
    });
  }, [dispatch]);

  return (
    <EditProfileWrapper>
      {HeaderRender('Edit profile')}
      <ResponseMessages
        {...{
          data: (!!init && !error) ? 'User success updated' : null,
          isFetching: loading,
          error: error,
          init
        }} />
      <FormProvider {...methods}>
        <WrapperBox>
          {uploadImg &&
            <AvatarEditorContainer {...{
              image: uploadImg, handleSetCurrentImg,
              handleClose: handleCloseEditAvatar,
              isFetching: !!loading,
            }} />}

          <EditProfileWrapperBody $visible={isEditAvatarOperation}>
            <ProfileDataEditor {...{
              currentImg, uploadImg,
              handleChangeNewImg, handleChangeCurrentOperation, inputRef, isFetching: !!loading,
            }} />

            <CustomButtonSend
              disabled={isDisabledSubmitBtn}
              onClick={handleSubmit(onSubmit)}
              styleOptions={{ marginTop: '24px' }}
            >
              Send
            </CustomButtonSend>

          </EditProfileWrapperBody>
        </WrapperBox>
      </FormProvider>
    </EditProfileWrapper >
  );
};
