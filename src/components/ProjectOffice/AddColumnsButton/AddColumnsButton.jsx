// import { CustomButton } from 'components/Button/CustomButton';
import { useState } from 'react';

import { ModalColumn } from 'components/Modal/ModalColumn/ModalColumn';
import { AddCustomButton, CustomButtonBackground, SvgPlusIcon } from './AddColumnsButton.styled';
import sprite from '../../../images/sprite.svg';
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
      <>
        <AddCustomButton onClick={handleToggleModal}>
            <CustomButtonBackground>
            <SvgPlusIcon aria-label="icon-bell" width={14} height={14}>
                <use href={`${sprite}#icon-plus`}></use>
        </SvgPlusIcon>
            </CustomButtonBackground>
            Add another column
        </AddCustomButton>
        
        {/* <CustomButton
          isWhiteBackground={true}
          onClick={handleToggleModal}
          styleOptions={{
            backgroundColor: 'var(--addAnotherColumnBtnBgColor)',
            color: 'var(--primaryTextColor)',
          }}
        >
          Add another column
        </CustomButton> */}
        <ModalColumn
          isOpen={isOpen}
          onClose={handleToggleModal}
          onRemove={handleAddColumn}
        />
        {/* <ButtonStyled startIcon={<AddIconStyled />}>
                Add another column
            </ButtonStyled> */}
      </>
    </>
  );
};

export default AddColumnButton;
