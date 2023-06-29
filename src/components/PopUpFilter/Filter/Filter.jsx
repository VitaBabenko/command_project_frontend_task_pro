import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import {
  Title,
  FilterContainer,
  BtnShowAll,
  RadioGr,
  radioButtons,
} from './Filter.styled';

export const Filter = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const primaryTextColor = `var(--primaryTextColor)`;

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  const handleReset = () => {
    setSelectedValue('');
  };

  const handleShowAll = () => {
    console.log('Show all selected');
    handleReset();
  };

  const handleRadioButtonChange = event => {
    console.log(`Selected priority: ${event.target.value}`);
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <FilterContainer>
        <Title>Label color</Title>
        <BtnShowAll type="button" onClick={handleShowAll}>
          Show all
        </BtnShowAll>
      </FilterContainer>
      <FormControl>
        <RadioGr
          aria-labelledby="priority"
          name="radio-buttons-group"
          value={selectedValue}
          onChange={handleRadioButtonChange}
        >
          {radioButtons.map(button => (
            <FormControlLabel
              key={button.value}
              sx={{
                color: button.color,
                '& .Mui-checked.MuiRadio-root': {
                  color: button.checkedColor,
                },
                '& .MuiSvgIcon-root': {
                  fontSize: 14,
                },
                '& .MuiFormControlLabel-label': {
                  fontSize: 12,
                },
                '& .MuiButtonBase-root.MuiRadio-root': {
                  color: button.checkedColor,
                  padding: 0,
                  backgroundColor:
                    selectedValue === button.value
                      ? 'transparent'
                      : button.buttonColor,
                },
                '& .MuiTypography-root': {
                  marginLeft: 1,
                  color:
                    selectedValue === button.value
                      ? primaryTextColor
                      : 'inherit',
                },
              }}
              value={button.value}
              control={<Radio />}
              label={button.label}
            />
          ))}
        </RadioGr>
      </FormControl>
    </>
  );
};
