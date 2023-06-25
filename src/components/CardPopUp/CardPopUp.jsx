import { useForm } from 'react-hook-form';

import {
  Form,
  FormText,
  FromInput,
  FormTextarea,
  RadioGroup,
  RadioButton,
  RadioLabel,
  Wrap,
} from './CardPopUp.styled';

export const CardPopUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    console.log(data);
    reset();
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormText>TEXT</FormText>
      <FromInput {...register('title', { minLength: 3 })} placeholder="Title" />
      <FormTextarea
        placeholder="Description"
        {...register('description', { minLength: 3 })}
      ></FormTextarea>
      <label>Label color</label>
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

      {errors.exampleRequired && <span>This field is required</span>}
      <button type="submit">
        <svg>
          <use></use>
        </svg>
      </button>
    </Form>
  );
};
