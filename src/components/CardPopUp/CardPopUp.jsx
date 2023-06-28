import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Calendar from 'react-datepicker';
import { format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
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
import {
  ButtonDate,
  CalendarContainer,
  ChevronDown,
  BtnName,
} from '../Calendar/Calendar.styled';
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
  const [date, setDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState('');

  const hendleSubmitCalendar = selectedDate => {
    setDate(selectedDate);
  };

  const isToday = date => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };
  const formattedDateForBtn = date => {
    if (isToday(date)) {
      return 'Today, ' + format(date, 'MMMM dd');
    }
    return format(date, 'MMMM dd');
  };
  /* =============================================================================== */

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormText>{title}</FormText>
      <FromInput {...register('title', { minLength: 3 })} placeholder="Title" />
      <FormTextarea
        placeholder="Description"
        {...register('description', { minLength: 3 })}
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
      <input {...register('deadline')} />
      <CalendarContainer>
        <ButtonDate type="button">
          <BtnName>
            {formattedDate}
            <ChevronDown />
          </BtnName>
        </ButtonDate>
        <Calendar
          selected={date}
          click={hendleSubmitCalendar}
          setValue={setValue}
          dateFormat="dd/MM/yyyy"
        />
        {/* <button
          type="button"
          style={{ width: 30, height: 30 }}
          onClick={() => setValue('deadline', '111')}
        ></button> */}
        {/* <StyleErrorMessage name="deadline" component="div" /> */}
      </CalendarContainer>
      {/* =============================================================================== */}
      {errors.exampleRequired && <span>This field is required</span>}
      <CustomButton type="submit">{'Add another card'}</CustomButton>
    </Form>
  );
};
