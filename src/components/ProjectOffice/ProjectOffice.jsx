import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {
  FilterWrapper,
  Title,
  Wrapper,
  Text,
  StackWrapper,
  ButtonStyled,
  AddIconStyled,
} from './ProjectOfficeStyle';
// import { CustomButton } from 'components/Button/CustomButton';
// import { useState } from 'react';
// import { ModalColumn } from 'components/Modal/ModalColumn/ModalColumn';
import ProjectOfficeItem from './ProjectOfficeItem';

const ProjectOffice = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const columns = [{columnName: 'one', id: 1}, {columnName: 'two', id: 2}];

  //   const handleToggleModal = () => {
  //     setIsOpen((prevstate) => !prevstate )
  //   };

  // const handleCreateColumn = (columnName) => {
  //     const newArr = [...columns, { id: 4, columnName: columnName }];
  //     console.log(columns)
  // }

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
        {/* <CustomButton isWhiteBackground={true} onClick={handleToggleModal}>Add</CustomButton>
              <ModalColumn isOpen={isOpen} onClose={handleToggleModal} onRemove={handleCreateColumn} /> */}
        <ButtonStyled startIcon={<AddIconStyled />}>
          Add another column
        </ButtonStyled>
      </StackWrapper>
      <ProjectOfficeItem />
    </>
  );
};

export default ProjectOffice;
