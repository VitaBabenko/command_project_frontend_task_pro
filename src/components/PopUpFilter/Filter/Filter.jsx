import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../../redux/filter/filterSlice';
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
  const dispatch = useDispatch();

  const primaryTextColor = `var(--primaryTextColor)`;

  const handleReset = () => {
    setSelectedValue('');
  };

  const handleShowAll = () => {
    console.log('Show all selected');
    dispatch(setFilter('all'));
    handleReset();
  };

  const handleFilterChange = event => {
    const { value } = event.target;
    console.log('Selected filter:', value);
    setSelectedValue(value);
    dispatch(setFilter(value));
  };

  const handleRadioButtonChange = event => {
    const { value } = event.target;
    console.log(`Selected priority: ${value}`);
    setSelectedValue(value);
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
              onChange={handleFilterChange}
            />
          ))}
        </RadioGr>
      </FormControl>
    </>
  );
};
