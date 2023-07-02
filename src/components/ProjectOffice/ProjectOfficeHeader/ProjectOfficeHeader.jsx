import React, { useState } from 'react';
import { Wrapper } from '../ProjectOfficeStyle';
import { BtnFilter, Title, SvgIcons } from './ProjectOfficeHeaderStyle';
import sprite from '../../../images/sprite.svg';
import { PopUpFilter } from 'components/PopUpFilter/PopUpFilter';

const ProjectOfficeHeader = () => {
  const [isPopUpVisible, setPopUpVisible] = useState(false);

  const togglePopUp = () => {
    setPopUpVisible(!isPopUpVisible);
  };

  const handleClosePopUp = () => {
    setPopUpVisible(false);
  };

  return (
    <>
      <Wrapper>
        <Title>Project</Title>

        <BtnFilter type="button" onClick={togglePopUp}>
          <SvgIcons aria-label="filter icon" width={18} height={18}>
            <svg>
              <use xlinkHref={`${sprite}#icon-filter`} />
            </svg>
          </SvgIcons>
          <span>Filter</span>
        </BtnFilter>
        {isPopUpVisible && <PopUpFilter onClose={handleClosePopUp} />}
      </Wrapper>
    </>
  );
};

export default ProjectOfficeHeader;
