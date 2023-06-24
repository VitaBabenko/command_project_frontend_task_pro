import { Formik, Field, Form } from 'formik';

export const ColumnPopUp = () => (
  <div>
    <Formik
      initialValues={{
        title: '',
      }}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
    >
      <Form>
        <label>{'Add column'}</label>
        <Field name="title" placeholder="title" />
        <button type="submit">Add</button>
      </Form>
    </Formik>
  </div>
);
