import styled from 'styled-components';
import { Field, Form } from 'formik';

export const RadioInput = styled(Field)``;
export const FromWrapp = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid red;
  width: auto;
  padding: 24px;
`;

export const StyledInput = styled.input`
  width: 302px;
  padding: 14px 18px;
  border: 1px solid #bedbb0;
  border-radius: 8px;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
`;
