import { styled } from '@mui/system';
import { Typography, Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';

export const Wrapper = styled('div')({
    marginLeft: '10px', 
    display: 'flex', 
    justifyContent: 'space-between'
});

export const FilterWrapper = styled('div')({
    marginRight: '10px', 
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center' 
});

export const StackWrapper = styled(Stack)({
    width: '330px', 
    height: '56px', 
    background: '#F6F6F7', 
    borderRadius: '8px' 
});

export const ButtonStyled = styled(Button)({
    paddingLeft: '80px', 
    color: '#161616', 
    fontSize: '14px', 
    textTransform: 'none'
});

export const AddIconStyled = styled(AddIcon)({
    background: '#161616', 
    width: '28px', 
    height: '28px', 
    color: '#ffff', 
    borderRadius: '8px' 
});

export const Title = styled(Typography)({
    fontWeight: 500, 
    fontSize: '18px', 
    lineHeight: '27px', 
    marginBottom: '5px' 
});

export const Text = styled(Typography)({
    fontWeight: 500, 
    fontSize: '14px', 
    lineHeight: '21px'
});

