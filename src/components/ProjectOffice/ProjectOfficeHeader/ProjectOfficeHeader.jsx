import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { FilterWrapper, Wrapper } from '../ProjectOfficeStyle';
import { FilterText, Title } from './ProjectOfficeHeaderStyle';


const ProjectOfficeHeader = () => {
  return (
    <>
        <Wrapper>
            <Title>Project</Title>
            <FilterWrapper>
                <FilterAltIcon sx={{color: '#D2D2D2'}}  />
                <FilterText>Filters</FilterText>
            </FilterWrapper>
        </Wrapper>
    </> 
  );
};

export default ProjectOfficeHeader;

