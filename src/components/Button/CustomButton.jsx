import { Button } from '@mui/material';
import sprite from '../../images/sprite.svg';
import {
  AddCustomButton,
  CustomButtonBackground,
  SvgPlusIcon,
} from 'components/ProjectOffice/AddColumnsButton/AddColumnsButton.styled';

export const CustomButton = ({
  children,
  onClick,
  style = {},
  styleOptions = {},
  customIcons = {},
  type = 'button',
}) => {
  return (
    <AddCustomButton onClick={onClick} type={type} style={{ ...styleOptions }}>
      <CustomButtonBackground style={{ ...style }}>
        <SvgPlusIcon
          style={{ ...customIcons }}
          aria-label="icon-bell"
          width={14}
          height={14}
        >
          <use href={`${sprite}#icon-plus`}></use>
        </SvgPlusIcon>
      </CustomButtonBackground>
      {children}
    </AddCustomButton>
  );
};

export const CustomButtonSend = ({
  children,
  onClick,
  styleOptions = {},
  type = 'button',
  isWhiteBackground = false,
  disabled = false,
}) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      fullWidth
      type={type}
      disabled={disabled}
      sx={{
        height: '49px',
        maxWidth: '352px',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '1.5',
        letterSpacing: '-0.02em',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--greenGreenBlueColor)',
        borderRadius: '8px',
        color: isWhiteBackground ? '#FFFFFF' : '#161616',
        textTransform: 'none',
        cursor: 'pointer',
        '&:hover': {
          background: 'var(--btnColorHover)',
        },
        '&:disabled': {
          background: 'var(--btnColorHover)',
          opacity: 0.95,
        },
        ...styleOptions,
      }}
    >
      {children}
    </Button>
  );
};
