import { Wrapper, ButtonStyled, AddIconStyled, CardButtonStyled } from '../ProjectOfficeStyle';

const ProjectCardAddButton = () => {
  return (
    <>
    <Wrapper>
        {Array.from(Array(3)).map((_, index) => (
            <CardButtonStyled direction="row" spacing={2} key={index}>
            <ButtonStyled startIcon={<AddIconStyled />}>
                Add another card
            </ButtonStyled>
            </CardButtonStyled>
        ))}
    </Wrapper>


    </> 
  );
};

export default ProjectCardAddButton;

