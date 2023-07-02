import { useForm } from 'react-hook-form';
import { icons } from 'utils/icons';
import sprite from '../../../images/sprite.svg';
import { images } from 'utils/bgImgPreview';
import { useDispatch } from 'react-redux';
import { addUserBoard } from 'redux/dashboards/operation';
import { CustomButton } from 'components/Button/CustomButton';

const {
  CustomDialog,
  ModalTitle,
  InputWrapper,
  ModalInput,
  IconsTitle,
  StyledLabel,
  IconWrapper,
  BgWrapper,
  BgLabel,
  ImgBg,
  InputStyled,
  SvgModal,
  ErrorText,
} = require('./ModalAddBoard.styled');

export const ModalAddBoard = ({
  isOpen,
  onClose,
  type = 'create',
  handleUpdateBoard,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = ({ title, dashboardIcon, background = '' }) => {
    if (type === 'create') {
      background = background || '';
      console.log({ title, dashboardIcon, background });
      dispatch(addUserBoard({ title, dashboardIcon, background }));
    } else if (type === 'edit') {
      console.log('update');
      console.log({ title, dashboardIcon, background });
      handleUpdateBoard({ title, dashboardIcon, background });
    }
    reset();
    onClose();
  };

  return (
    <CustomDialog open={isOpen} onClose={onClose}>
      <div>
        <ModalTitle>
          {type === 'create' ? 'New board' : 'Edit board'}
        </ModalTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            <ModalInput
              type="text"
              {...register('title', {
                required: 'This field is required',
                maxLength: { value: 20, message: 'Max length is 20' },
                minLength: {value: 2, message: 'Min length is 2'},
              })}
            />
            {errors.title && <ErrorText>{errors.title.message}</ErrorText>}
          </InputWrapper>
          
          <IconWrapper>
            <IconsTitle>Icons</IconsTitle>
            {icons.map((icon, index) => {
              return (
                <StyledLabel key={index}>
                  <InputStyled
                    type="radio"
                    value={icon}
                    {...register('dashboardIcon', {required: 'This field is required',})}
                    style={{ display: 'none' }}
                  />
                  <SvgModal>
                    <use href={sprite + icon} width={18} height={18} />
                  </SvgModal>
                </StyledLabel>
              );
            })}
            {errors.dashboardIcon && <ErrorText>{errors.dashboardIcon.message}</ErrorText>}
          </IconWrapper>
          <div style={{ marginBottom: '40px' }}>
            <IconsTitle>Background</IconsTitle>
            <BgWrapper>
              {images.map((img, index) => {
                return (
                  <BgLabel key={index}>
                    <input
                      type="radio"
                      value={img.id}
                      {...register('background')}
                      style={{ display: 'none' }}
                    />
                    <ImgBg
                      srcSet={`${img.backgroundImage} 1x, ${img.retinaBackgroundImage} 2x`}
                      alt=""
                    />
                  </BgLabel>
                );
              })}
            </BgWrapper>
          </div>
          <CustomButton type="submit">
            {type === 'create' ? 'Create' : 'Edit'}
          </CustomButton>
          {/* <button type="submit">{type === 'create' ? 'Create' : 'Edit'}</button> */}
        </form>
      </div>
    </CustomDialog>
  );
};
