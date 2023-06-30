import { useForm } from 'react-hook-form';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import sprite from '../../images/sprite.svg';
import { formatDate } from 'helpers/formatDate';
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
  CalendarWrapp,
  CalendarText,
  CalendarArrow,
} from './CardPopUp.styled';

import { CustomButton } from 'components/Button/CustomButton';

export const CardPopUp = () => {
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
  const [startDate, setStartDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateInputChange = date => {
    setStartDate(date);
    setValue('deadline', startDate);
    setShowDatePicker(false);
  };

  const toggleDatePicker = () => {
    setShowDatePicker(prevState => !prevState);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormText>{'title'}</FormText>
      <FromInput
        {...register('title', { minLength: 3, required: true })}
        placeholder="Title"
      />
      <FormTextarea
        placeholder="Description"
        {...register('description', { minLength: 3, required: true })}
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
            {...register('priority', { required: true })}
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
      <CalendarWrapp onClick={toggleDatePicker}>
        <CalendarText>{formatDate(startDate)}</CalendarText>
        <CalendarArrow
          style={{ width: 18, height: 18 }}
          aria-label="open theme select icon"
        >
          <use href={sprite + '#icon-arrow-down'}></use>
        </CalendarArrow>
      </CalendarWrapp>
      <input
        {...register('deadline', { value: startDate })}
        style={{ display: 'none' }}
      />

      {showDatePicker && (
        <DatePicker
          selected={startDate}
          onChange={handleDateInputChange}
          dateFormat="dd/MM/yyyy"
          inline
          minDate={new Date()}
        />
      )}
      {errors.exampleRequired && <span>This field is required</span>}
      <CustomButton type="submit">{'Add another card'}</CustomButton>
    </Form>
  );
};
