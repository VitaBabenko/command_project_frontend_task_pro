import DatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

export const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      dateFormat="dd/MM/yyyy"
      startDate={setStartDate}
      inline
      showDisabledMonthNavigation
    />
  );
};
