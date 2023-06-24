import { styled } from '@mui/system';
import { Typography, Button, Card, CardActions, Divider } from '@mui/material';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';

export const Wrapper = styled('div')({
    margin: '20px', 
    display: 'flex', 
    justifyContent: 'space-between'
});

export const FilterWrapper = styled('div')({
    marginRight: '10px', 
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center' 
});

export const ActionsButton = styled('div')({
    background: 'beige', 
    width: "334px", 
    height: '56px', 
    borderRadius: '8px', 
    padding: '20px',
    display: 'flex', 
    justifyContent: 'space-between', 
});

export const ActionsIconsButton = styled('div')({
    display: 'flex', 
    justifyContent: 'flex-end', 
    alignItems: 'center', 
    gap: '8px'
});

export const CardWrapper = styled('div')({
    display: 'flex', 
    justifyContent: 'space-between', 
    flexWrap: 'wrap'
});

export const CardFooterStyled = styled('div')({
    display: 'flex', 
    justifyContent: 'flex-start', 
    paddingRight: '20px', 
    paddingLeft: '20px', 
    gap: '15px'
});

export const CardIconsWrapper = styled('div')({
    display: 'flex', 
    justifyContent: 'flex-end',
    paddingRight: '20px', 
    gap: '8px'
});

export const CardStyled = styled(Card)({
    maxWidth: '334px', 
    minHeight: '154px', 
    borderRadius: '8px', 
    margin: '20px'
});

export const CardTitle = styled(Typography)({
    fontWeight: '600', 
    fontSize: '14px', 
    lineHeight: '21px'
});

export const CardFooterTitle = styled(Typography)({
    fontWeight: '400', 
    fontSize: '10px', 
    lineHeight: '12px', 
    color: '#16161680'
});

export const CardText= styled(Typography)({
    fontWeight: '400', 
    fontSize: '12px', 
    lineHeight: '16px' 
});

export const CardActionsStyled= styled(CardActions)({
    paddingRight: '20px', 
    paddingLeft: '20px'
});

export const DividerStyled= styled(Divider)({
    background: '#1616160', 
    width: '300px', 
    height: '1px'
});

export const StackWrapper = styled(Stack)({
    width: '330px', 
    height: '56px', 
    background: '#F6F6F7', 
    borderRadius: '8px' 
});

export const CardButtonStyled = styled(Stack)({
    width: '330px', 
    height: '56px', 
    background: '#BEDBB0', 
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

