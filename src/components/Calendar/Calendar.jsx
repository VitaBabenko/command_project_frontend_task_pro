import DatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

export const Calendar = ({ prop, click, setFieldValue }) => {
  const handleDateChange = selectedDate => {
    click(selectedDate);
    console.log(selectedDate);
    setFieldValue('deadline', selectedDate);
  };

  return (
    <DatePicker
      selected={prop}
      minDate={new Date()}
      calendarStartDay={1}
      //   onChange={handleDateChange}
      onChange={handleDateChange}
    />
  );
};
