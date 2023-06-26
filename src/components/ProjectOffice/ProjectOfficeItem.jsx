import { Wrapper, ActionsButton } from './ProjectOfficeStyle';
import ProjectOfficeColumns from './ProjectOfficeColumns/ProjectOfficeColumns';
import ProjectOfficeCardItem from './ProjectOfficeCardItem/ProjectOfficeCardItem';
import ProjectCardAddButton from './ProjectCardAddButton/ProjectCardAddButton';


const ProjectOfficeItem = ({ column: { title } }) => {
  return (
    <>
        <Wrapper>
            <ActionsButton>
                  { title }
                <ProjectOfficeColumns />
            </ActionsButton>
            <ActionsButton>
                In progress
                <ProjectOfficeColumns />
            </ActionsButton>
            <ActionsButton>
                Done
                <ProjectOfficeColumns />
            </ActionsButton>
        </Wrapper>
        <ProjectOfficeCardItem />
        <ProjectCardAddButton />

    </> 
  );
};

export default ProjectOfficeItem;
