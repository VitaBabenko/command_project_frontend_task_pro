import { Formik, Field } from 'formik';
import { RadioInput, FromWrapp, StyledInput } from './CardPopUp.styled';

export const CardPopUp = () => (
  <div>
    <Formik
      initialValues={{
        title: '',
        description: '',
        picked: '',
      }}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
    >
      <FromWrapp>
        <label>{'Add card'}</label>
        <Field as={StyledInput} name="title" placeholder="title" />
        <Field as={StyledInput} name="description" placeholder="Description" />
        <div id="my-radio-group">Label color</div>
        <div role="group" aria-labelledby="my-radio-group">
          <RadioInput type="radio" name="picked" value="low" />
          <RadioInput type="radio" name="picked" value="medium" />
          <RadioInput type="radio" name="picked" value="high" />
          <RadioInput type="radio" name="picked" value="without" />
        </div>
        <button type="submit">Add</button>
      </FromWrapp>
    </Formik>
  </div>
);
