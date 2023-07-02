import { Wrapper, ButtonStyled, AddIconStyled, CardButtonStyled } from '../ProjectOfficeStyle';

const ProjectCardAddButton = () => {
  return (
    <>
    <Wrapper>
            <CardButtonStyled direction="row" spacing={2} >
            <ButtonStyled startIcon={<AddIconStyled />}>
                Add another card
            </ButtonStyled>
            </CardButtonStyled>
    </Wrapper>


    </> 
  );
};

export default ProjectCardAddButton;

