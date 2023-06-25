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
  Text,
} from './CardPopUp.styled';
import { CustomButton } from 'components/Button/CustomButton';

export const CardPopUp = ({ title }) => {
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
      <FormText>{title}</FormText>
      <FromInput {...register('title', { minLength: 3 })} placeholder="Title" />
      <FormTextarea
        placeholder="Description"
        {...register('description', { minLength: 3 })}
      ></FormTextarea>
      <Text>Lable color</Text>
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
      <span style={{ marginBottom: 40 }}>Today, March 8</span>

      {errors.exampleRequired && <span>This field is required</span>}
      <CustomButton type="submit">{'Add another card'}</CustomButton>
    </Form>
  );
};
