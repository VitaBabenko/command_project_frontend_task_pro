import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import {
  ECurrentEditOperationEditAvatar,
  ECurrentEditOperationEditData,
  ERegisterFieldAvatar,
  getDefaultValuesForm,
  isAllRequiredFieldsDirty,
  isTypeFileImg,
} from './util';
import './style.css';
import { AvatarEditorContainer } from './AvatarEditor';
import user from '../../images/user.svg'
import { ProfileDataEditor } from './ProfileDataEditor';
import { CustomButtonSend } from 'components/Button/CustomButton';

export const EditProfile = ({ toggle, open, HeaderRender }) => {
  const [currentEditOperation, setCurrentEditOperation] = useState(ECurrentEditOperationEditData);
  const [currentImg, setCurrentImg] = useState(user);
  const [uploadImg, setUploadImg] = useState('');

  const methods = useForm({
    shouldUnregister: true,
    mode: 'onChange',
    defaultValues: getDefaultValuesForm(),
  });

  const { handleSubmit, formState: { dirtyFields, errors }, setError } = methods;
  const isEditAvatarOperation = currentEditOperation === ECurrentEditOperationEditAvatar;

  const isFetching = false;
  const isDisabledSubmitBtn =
    !isAllRequiredFieldsDirty(dirtyFields) ||
    !!Object.keys(errors).length ||
    isFetching;

  const onSubmit = data => {
    console.log(data);
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
    console.log('dasdaD');
    const file = e.target?.files?.[0];
    if (!(file && isTypeFileImg(file?.type))) {
      setCurrentEditOperation(ECurrentEditOperationEditData)
      setFormFieldFieldAvatarError('Invalid format');
      return;
    }
    setUploadImg(e.target);
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
  };
  console.log(currentEditOperation);
  return (
    <div className='edit-profile-wrapper'>
      {HeaderRender('Edit profile')}
      <FormProvider {...methods}>

        {uploadImg && <AvatarEditorContainer {...{ image: uploadImg, handleSetCurrentImg, handleClose: handleCloseEditAvatar }} />}

        <div className={!isEditAvatarOperation ? 'display-block' : 'display-none'}>

          <div >
            <ProfileDataEditor {...{ currentImg, uploadImg, handleChangeNewImg, handleChangeCurrentOperation }} />

            <CustomButtonSend disabled={isDisabledSubmitBtn} onClick={handleSubmit(onSubmit)} >
              Send
            </CustomButtonSend>
          </div >
        </div>
      </FormProvider>
    </div>
  );
};
