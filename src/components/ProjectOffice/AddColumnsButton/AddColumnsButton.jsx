import { CustomButton } from 'components/Button/CustomButton';
import { useState } from 'react';

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
      <>
        <CustomButton
            type='button'
            onClick={handleToggleModal}
            styleOptions={{
                background: 'var(--customButtonBackground)',
                color: 'var(--customButtonColor)',
            }}
            style={{background: 'var(--plusButtonBackground)'}}
        >
          Add another column
        </CustomButton>
        <ModalColumn
          isOpen={isOpen}
          onClose={handleToggleModal}
          onRemove={handleAddColumn}
        />
      </>
    </>
  );
};

export default AddColumnButton;
