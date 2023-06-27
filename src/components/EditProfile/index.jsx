import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import {
  ECurrentEditOperationEditAvatar,
  ECurrentEditOperationEditData,
  getDefaultValuesForm,
  isAllRequiredFieldsDirty,
} from './util';
import './style.css';
import { AvatarEditorContainer } from './AvatarEditor';
import user from '../../images/user.svg';
import { ProfileDataEditor } from './ProfileDataEditor';
import { CustomButtonSend } from 'components/Button/CustomButton';
// import { EditProfileWrapper, } from './ProfileDataEditor.styled'

export const EditProfile = ({ toggle, open, HeaderRender }) => {
  const [currentEditOperation, setCurrentEditOperation] = useState(
    ECurrentEditOperationEditData
  );
  const [currentImg, setCurrentImg] = useState(user);
  const [uploadImg, setUploadImg] = useState('');

  const methods = useForm({
    shouldUnregister: true,
    mode: 'onChange',
    defaultValues: getDefaultValuesForm(),
  });

  const {
    handleSubmit,
    formState: { dirtyFields, errors },
  } = methods;
  const isEditAvatarOperation =
    currentEditOperation === ECurrentEditOperationEditAvatar;

  console.log(isEditAvatarOperation);
  const isFetching = false;
  const isDisabledSubmitBtn =
    !isAllRequiredFieldsDirty(dirtyFields) ||
    !!Object.keys(errors).length ||
    isFetching;

  const onSubmit = data => {
    console.log(data);
  };

  const handleChangeNewImg = e => {
    setUploadImg(e.target.files[0]);
  };

  const handleSetCurrentImg = img => {
    setCurrentImg(img);
  };

  const handleChangeCurrentOperation = currentOperation => {
    setCurrentEditOperation(currentOperation);
  };

  const handleCloseEditAvatar = () => {
    setCurrentEditOperation(ECurrentEditOperationEditData);
    setUploadImg('');
  };

  return (
    // <EditProfileWrapper>
    <div className="edit-profile-wrapper">
      {HeaderRender('Edit profile')}
      <FormProvider {...methods}>
        <div
          className={isEditAvatarOperation ? 'display-block' : 'display-none'}
        >
          <AvatarEditorContainer
            {...{
              image: uploadImg,
              handleSetCurrentImg,
              handleClose: handleCloseEditAvatar,
            }}
          />
        </div>

        <div
          className={!isEditAvatarOperation ? 'display-block' : 'display-none'}
        >
          <div>
            <ProfileDataEditor
              {...{
                currentImg,
                handleChangeNewImg,
                handleChangeCurrentOperation,
              }}
            />

            {/* <button disabled={isDisabledSubmitBtn} onClick={handleSubmit(onSubmit)}>
              Save
            </button> */}
            <CustomButtonSend
              disabled={isDisabledSubmitBtn}
              onClick={handleSubmit(onSubmit)}
            >
              Send
            </CustomButtonSend>
          </div>
        </div>
      </FormProvider>
    </div>
    // </EditProfileWrapper >
  );
};
