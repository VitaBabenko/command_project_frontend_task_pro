import { CustomButton } from 'components/Button/CustomButton';
import { useState } from 'react';

import { StackWrapper } from '../ProjectOfficeStyle';

import { ModalColumn } from 'components/Modal/ModalColumn/ModalColumn';
// import { useParams } from 'react-router-dom';

const AddColumnButton = ({ handleAddColumn }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const columns = [
  //   { columnName: 'one', id: 1 },
  //   { columnName: 'two', id: 2 },
  // ];

  const handleToggleModal = () => {
    setIsOpen(prevstate => !prevstate);
  };

  // const handleCreateColumn = (columnName) => {
  //   //   const newArr = [...columns, { id: 4, columnName: columnName }];
  //     console.log(columns)
  // }

  return (
    <>
      <StackWrapper direction="row" spacing={2}>
        <CustomButton isWhiteBackground={true} onClick={handleToggleModal}>
          Add
        </CustomButton>
        <ModalColumn
          isOpen={isOpen}
          onClose={handleToggleModal}
          onRemove={handleAddColumn}
        />
        {/* <ButtonStyled startIcon={<AddIconStyled />}>
                Add another column
            </ButtonStyled> */}
      </StackWrapper>
    </>
  );
};

export default AddColumnButton;
