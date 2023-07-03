import { useForm } from 'react-hook-form';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import sprite from '../../images/sprite.svg';
import { formatDate } from 'utils.js/formatDate';
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
  CustomDialog,
  CloseButton,
} from './CardPopUp.styled';

import { CustomButton } from 'components/Button/CustomButton';
import { pureFinalPropsSelectorFactory } from 'react-redux/es/connect/selectorFactory';

import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

export const CardPopUp = ({
  isOpen,
  onClose,
  boardId,
  columnId,
  setTasks,
  task: {
    _id: taskId,
    title = '',
    description = '',
    priority = 'without',
    deadline = new Date(),
  },
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { title, description, priority, deadline } });

  const onSubmit = async data => {
    const res = await axios.put(
      `/boards/${boardId}/columns/${columnId}/tasks/${taskId} `,
      data
    );

    setTasks(p => {
      return p.map(task => {
        if (task._id === res.data.task._id) {
          return res.data.task;
        }
        return task;
      });
    });
    reset();
    onClose();
  };
  const [unixFromat, setUnixFormat] = useState(
    // new Date(new Date().toUTCString()).getTime() / 1000
    new Date(new Date().toUTCString()).getTime()
  );
  // const [dateBtn, setDateBtn] = useState(new Date());
  const [dateBtn, setDateBtn] = useState(new Date(deadline));
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateInputChange = date => {
    const UTC = date.toUTCString();
    const UNIX = new Date(UTC).getTime();
    setDateBtn(date);
    setUnixFormat(UNIX);
    setValue('deadline', UNIX.toString());
    setShowDatePicker(false);
  };
  const toggleDatePicker = () => {
    setShowDatePicker(prevState => !prevState);
  };
  return (
    <CustomDialog open={isOpen} onClose={onClose}>
      <CloseButton type="button" onClick={onClose}>
        <CloseIcon sx={{ fontSize: 'medium' }} style={{ marginTop: '14px' }} />
      </CloseButton>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormText>{'Add card'}</FormText>
        <FromInput
          {...register('title', {
            minLength: 3,
            required: pureFinalPropsSelectorFactory,
          })}
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
              {...register('priority', { required: false })}
              value="without"
              checked={true}
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
          <CalendarText>{formatDate(dateBtn)}</CalendarText>
          <CalendarArrow
            style={{ width: 18, height: 18 }}
            aria-label="open theme select icon"
          >
            <use href={sprite + '#icon-arrow-down'}></use>
          </CalendarArrow>
        </CalendarWrapp>
        <input
          {...register('deadline', { value: unixFromat.toString() })}
          style={{ display: 'none' }}
        />
        {showDatePicker && (
          <DatePicker
            selected={new Date()}
            onChange={handleDateInputChange}
            dateFormat="dd/MM/yyyy"
            inline
            minDate={new Date()}
          />
        )}
        {errors.exampleRequired && <span>This field is required</span>}
        <CustomButton type="submit">{'Edit'}</CustomButton>
      </Form>
    </CustomDialog>
  );
};

// import { useForm } from 'react-hook-form';
// import { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import sprite from '../../images/sprite.svg';
// import { formatDate } from 'utils.js/formatDate';
// import 'react-datepicker/dist/react-datepicker.css';
// import './calendar.css';
// import {
//   Form,
//   FormText,
//   FromInput,
//   FormTextarea,
//   RadioGroup,
//   RadioButton,
//   RadioLabel,
//   Wrap,
//   Text,
//   CalendarWrapp,
//   CalendarText,
//   CalendarArrow,
//   CustomDialog,
//   CloseButton,
// } from './CardPopUp.styled';

// import { CustomButton } from 'components/Button/CustomButton';
// import { pureFinalPropsSelectorFactory } from 'react-redux/es/connect/selectorFactory';

// import CloseIcon from '@mui/icons-material/Close';

// export const CardPopUp = ({ isOpen, onClose }) => {
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     reset,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = data => {
//     console.log(data);
//     reset();
//   };
//   const [unixFromat, setUnixFormat] = useState(
//     new Date(new Date().toUTCString()).getTime() / 1000
//   );
//   const [dateBtn, setDateBtn] = useState(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);

//   const handleDateInputChange = date => {
//     const UTC = date.toUTCString();
//     const UNIX = new Date(UTC).getTime() / 1000;
//     setDateBtn(date);
//     setUnixFormat(UNIX);
//     setValue('deadline', UNIX.toString());
//     setShowDatePicker(false);
//   };
//   const toggleDatePicker = () => {
//     setShowDatePicker(prevState => !prevState);
//   };
//   return (
//     <CustomDialog open={isOpen} onClose={onClose}>
//       <CloseButton type="button" onClick={onClose}>
//         <CloseIcon sx={{ fontSize: 'medium' }} style={{ marginTop: '14px' }} />
//       </CloseButton>
//       <Form onSubmit={handleSubmit(onSubmit)}>
//         <FormText>{'Add card'}</FormText>
//         <FromInput
//           {...register('title', {
//             minLength: 3,
//             required: pureFinalPropsSelectorFactory,
//           })}
//           placeholder="Title"
//         />
//         <FormTextarea
//           placeholder="Description"
//           {...register('description', { minLength: 3, required: false })}
//         ></FormTextarea>
//         <Text>Label color</Text>
//         <RadioGroup>
//           <Wrap>
//             <RadioButton
//               type="radio"
//               id="low"
//               {...register('priority')}
//               value="low"
//             />
//             <RadioLabel
//               htmlFor="low"
//               value="low"
//               checked={register('priority').value === 'low'}
//             />
//           </Wrap>
//           <Wrap>
//             <RadioButton
//               type="radio"
//               id="medium"
//               {...register('priority')}
//               value="medium"
//             />
//             <RadioLabel
//               htmlFor="medium"
//               value="medium"
//               checked={register('priority').value === 'medium'}
//             />
//           </Wrap>

//           <Wrap>
//             <RadioButton
//               type="radio"
//               id="high"
//               {...register('priority')}
//               value="high"
//             />
//             <RadioLabel
//               htmlFor="high"
//               value="high"
//               checked={register('priority').value === 'high'}
//             />
//           </Wrap>

//           <Wrap>
//             <RadioButton
//               type="radio"
//               id="without"
//               {...register('priority', { required: false })}
//               value="without"
//               checked={true}
//             />
//             <RadioLabel
//               htmlFor="without"
//               value="without"
//               checked={register('priority').value === 'without'}
//             />
//           </Wrap>
//         </RadioGroup>
//         <Text>Deadline</Text>
//         <CalendarWrapp onClick={toggleDatePicker}>
//           <CalendarText>{formatDate(dateBtn)}</CalendarText>
//           <CalendarArrow
//             style={{ width: 18, height: 18 }}
//             aria-label="open theme select icon"
//           >
//             <use href={sprite + '#icon-arrow-down'}></use>
//           </CalendarArrow>
//         </CalendarWrapp>
//         <input
//           {...register('deadline', { value: unixFromat.toString() })}
//           style={{ display: 'none' }}
//         />
//         {showDatePicker && (
//           <DatePicker
//             selected={new Date()}
//             onChange={handleDateInputChange}
//             dateFormat="dd/MM/yyyy"
//             inline
//             minDate={new Date()}
//           />
//         )}
//         {errors.exampleRequired && <span>This field is required</span>}
//         <CustomButton type="submit">{'Edit'}</CustomButton>
//       </Form>
//     </CustomDialog>
//   );
// };
