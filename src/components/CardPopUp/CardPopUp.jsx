import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Calendar from 'react-datepicker';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import './calendar.css';
import {
  Form,
  FormText,
  FromInput,
  FormTextarea,
  RadioGroup,
  RadioButton,
  RadioLabel,
  Wrap,
  Text,
} from './CardPopUp.styled';

import { CustomButton } from 'components/Button/CustomButton';

export const CardPopUp = ({ title }) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    console.log(data);
    reset();
  };

  /* =============================================================================== */
  // const [date, setDate] = useState(new Date());
  // const [formattedDate, setFormattedDate] = useState('');

  // const hendleSubmitCalendar = selectedDate => {
  //   setDate(selectedDate);
  // };

  const [startDate, setStartDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  // function formatTodayDate(date) {
  //   const day = date.getDate();

  //   return `Today, ${day} `;
  // }
  function formatDate(date) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (isSameDay(date, today)) {
      return `Today, ${date.getDate()}`;
    } else if (isSameDay(date, tomorrow)) {
      return `Tomorrow, ${date.getDate()}`;
    } else {
      const options = { weekday: 'long', day: 'numeric' };
      const formattedDate = date.toLocaleDateString('en-US', options);
      return formattedDate;
    }
  }

  function isSameDay(date1, date2) {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  }

  const handleDateInputChange = date => {
    setStartDate(date);
    setValue('deadline', formatDate(date));
    setShowDatePicker(false);
  };

  const toggleDatePicker = () => {
    setShowDatePicker(prevState => !prevState);
  };
  /* =============================================================================== */

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormText>{title}</FormText>
      <FromInput
        {...register('title', { minLength: 3, required: false })}
        placeholder="Title"
      />
      <FormTextarea
        placeholder="Description"
        {...register('description', { minLength: 3, required: false })}
      ></FormTextarea>
      <Text>Label color</Text>
      <RadioGroup>
        <Wrap>
          <RadioButton
            type="radio"
            id="low"
            {...register('priority')}
            value="low"
          />
          <RadioLabel
            htmlFor="low"
            value="low"
            checked={register('priority').value === 'low'}
          />
        </Wrap>
        <Wrap>
          <RadioButton
            type="radio"
            id="medium"
            {...register('priority')}
            value="medium"
          />
          <RadioLabel
            htmlFor="medium"
            value="medium"
            checked={register('priority').value === 'medium'}
          />
        </Wrap>

        <Wrap>
          <RadioButton
            type="radio"
            id="high"
            {...register('priority')}
            value="high"
          />
          <RadioLabel
            htmlFor="high"
            value="high"
            checked={register('priority').value === 'high'}
          />
        </Wrap>

        <Wrap>
          <RadioButton
            type="radio"
            id="without"
            {...register('priority')}
            value="without"
          />
          <RadioLabel
            htmlFor="without"
            value="without"
            checked={register('priority').value === 'without'}
          />
        </Wrap>
      </RadioGroup>
      <Text>Deadline</Text>
      {/* <span style={{ marginBottom: 40 }}>Today, March 8</span> */}
      {/* =============================================================================== */}
      <input
        // {...register('deadline')}
        value={formatDate(startDate)}
        onClick={toggleDatePicker}
      />
      <input {...register('deadline')} />

      {showDatePicker && (
        <DatePicker
          selected={startDate}
          onChange={handleDateInputChange}
          dateFormat="dd/MM/yyyy"
          inline
        />
      )}

      {/* <Calendar /> */}
      {/* <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        dateFormat="dd/MM/yyyy"
      /> */}
      {/* <button
          type="button"
          style={{ width: 30, height: 30 }}
          onClick={() => setValue('deadline', '111')}
        ></button> */}
      {/* <StyleErrorMessage name="deadline" component="div" /> */}

      {/* =============================================================================== */}
      {errors.exampleRequired && <span>This field is required</span>}
      <CustomButton type="submit">{'Add another card'}</CustomButton>
    </Form>
  );
};
