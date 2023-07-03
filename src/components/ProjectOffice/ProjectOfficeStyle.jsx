import { styled } from '@mui/system';
import { Button, CardActions } from '@mui/material';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';

export const Wrapper = styled('div')({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: '5px',
  marginRight: '10px',
  gap: '5px',
});

export const FilterWrapper = styled('div')({
  marginRight: '10px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const ActionsIconsButton = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '8px',
});

export const CardWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  height: '600px',
  overflow: 'scroll',
});

export const CardFooterStyled = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  paddingRight: '20px',
  paddingLeft: '20px',
  gap: '15px',
});

export const CardIconsWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  paddingRight: '20px',
  gap: '8px',
  marginTop: '-5px',
});

export const CardActionsStyled = styled(CardActions)({
  paddingRight: '20px',
  paddingLeft: '20px',
});

export const StackWrapper = styled(Stack)({
  width: '330px',
  height: '56px',
  background: '#F6F6F7',
  borderRadius: '8px',
});

export const CardButtonStyled = styled(Stack)({
  width: '330px',
  height: '56px',
  background: '#BEDBB0',
  borderRadius: '8px',
  marginBottom: '20px',
});

export const ButtonStyled = styled(Button)({
  paddingLeft: '80px',
  color: '#161616',
  fontSize: '14px',
  textTransform: 'none',
});

export const AddIconStyled = styled(AddIcon)({
  width: '28px',
  height: '28px',
  borderRadius: '8px',
});
