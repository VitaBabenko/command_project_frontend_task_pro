import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { FilterWrapper, Title, Wrapper, Text } from '../ProjectOfficeStyle';


const ProjectOfficeHeader = () => {
  return (
    <>
        <Wrapper>
            <Title>Project</Title>
            <FilterWrapper>
                <FilterAltIcon />
                <Text>Filters</Text>
            </FilterWrapper>
        </Wrapper>
    </> 
  );
};

export default ProjectOfficeHeader;

