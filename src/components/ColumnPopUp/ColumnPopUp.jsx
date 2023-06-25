import { useForm } from 'react-hook-form';

import { Form, FormText, FromInput } from './ColumnPopUp.styled';

export const ColumnPopUp = () => {
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
      {errors.exampleRequired && <span>This field is required</span>}
      {/* <input type="submit" /> */}
      <button type="submit">
        <svg>
          <use></use>
        </svg>
      </button>
    </Form>
  );
};
