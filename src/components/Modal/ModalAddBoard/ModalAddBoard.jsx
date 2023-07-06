import { useForm } from 'react-hook-form';
import { icons } from 'utils/icons';
import sprite from '../../../images/sprite.svg';
import { images } from 'utils/bgImgPreview';
import { useDispatch } from 'react-redux';
import { addUserBoard } from 'redux/dashboards/operation';
import { CustomButton } from 'components/Button/CustomButton';
import CloseIcon from '@mui/icons-material/Close';

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
  DefaultImgWrapper,
  DefaultImg,
  InputBg,
} = require('./ModalAddBoard.styled');

export const ModalAddBoard = ({
  isOpen,
  onClose,
  type = 'create',
  handleUpdateBoard,
  title = '',
  background = '',
  dashboardIcon = '',
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: { title, dashboardIcon, background } });

  const dispatch = useDispatch();

  const onSubmit = ({ title, dashboardIcon, background = '' }) => {
    if (type === 'create') {
      background = background || '';
      dispatch(addUserBoard({ title, dashboardIcon, background }));
    } else if (type === 'edit') {
      handleUpdateBoard({ title, dashboardIcon, background });
    }
    reset();
    onClose();
  };

  return (
    <CustomDialog open={isOpen} onClose={onClose}>
      <div>
        <CloseIcon
          onClick={onClose}
          sx={{
            color: 'var(--primaryTextColor)',
            position: 'absolute',
            top: '14px',
            right: '14px',
            height: '18px',
            width: '18px',
            cursor: 'pointer',
          }}
        />
        <ModalTitle>
          {type === 'create' ? 'New board' : 'Edit board'}
        </ModalTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            <ModalInput
              placeholder="Title"
              type="text"
              {...register('title', {
                required: 'This field is required',
                maxLength: { value: 20, message: 'Max length is 20' },
                minLength: { value: 2, message: 'Min length is 2' },
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
                    {...register('dashboardIcon', {
                      required: 'This field is required',
                    })}
                    style={{ display: 'none' }}
                  />
                  <SvgModal>
                    <use href={sprite + icon} width={18} height={18} />
                  </SvgModal>
                </StyledLabel>
              );
            })}
            {errors.dashboardIcon && (
              <ErrorText>{errors.dashboardIcon.message}</ErrorText>
            )}
          </IconWrapper>
          <div style={{ marginBottom: '40px' }}>
            <IconsTitle>Background</IconsTitle>
            <BgWrapper>
              <DefaultImgWrapper>
                <DefaultImg width={16} height={16}>
                  <use href={sprite + '#icon-bg-default'} />
                </DefaultImg>
              </DefaultImgWrapper>
              {images.map((img, index) => {
                return (
                  <BgLabel key={index}>
                    <InputBg
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
          <CustomButton
            type="submit"
            styleOptions={{
              background: 'var(--addCardButtonBackground)',
              color: 'var(--addCardButtonColor)',
              width: '302px',
              height: '49px',
            }}
            style={{ background: 'var(--addPlusButtonBackground)' }}
            customIcons={{ stroke: 'var(--addPlusIconColor' }}
          >
            {type === 'create' ? 'Create' : 'Edit'}
          </CustomButton>
          {/* <CustomButton type="submit">
            {type === 'create' ? 'Create' : 'Edit'}
          </CustomButton> */}
          {/* <button type="submit">{type === 'create' ? 'Create' : 'Edit'}</button> */}
        </form>
      </div>
    </CustomDialog>
  );
};
