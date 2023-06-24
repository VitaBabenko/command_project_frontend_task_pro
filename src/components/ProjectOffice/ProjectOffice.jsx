import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { FilterWrapper, Title, Wrapper, Text, StackWrapper, ButtonStyled, AddIconStyled } from './ProjectOfficeStyle';

const ProjectOffice = () => {
  return (
    <>
        <Wrapper>
            <Title>Project office</Title>
            <FilterWrapper>
                <FilterAltIcon />
                <Text>Filters</Text>
            </FilterWrapper>
        </Wrapper>
        <StackWrapper direction="row" spacing={2}>
            <ButtonStyled startIcon={<AddIconStyled />}>
                Add another column
            </ButtonStyled>
        </StackWrapper>
    </> 
  );
};

export default ProjectOffice;
