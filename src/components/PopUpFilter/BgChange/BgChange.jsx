import sprite from '../../../images/sprite.svg';
import {
  Button,
  ButtonNoneBg,
  ButtonContainer,
  Title,
  SvgIcons,
} from './BgChange.styled';

const buttonsImg = [
  {
    id: 0,
    backgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/v1687385776/command_project_task_pro_images/desktop/bg-image-1.jpg',
  },
  {
    id: 1,
    backgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/v1687385776/command_project_task_pro_images/desktop/bg-image-2.jpg',
  },
  {
    id: 2,
    backgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/v1687385776/command_project_task_pro_images/desktop/bg-image-3.jpg',
  },
  {
    id: 3,
    backgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/v1687385776/command_project_task_pro_images/desktop/bg-image-4.jpg',
  },
  {
    id: 4,
    backgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/v1687385776/command_project_task_pro_images/desktop/bg-image-5.jpg',
  },
  {
    id: 5,
    backgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/v1687385776/command_project_task_pro_images/desktop/bg-image-6.jpg',
  },
  {
    id: 6,
    backgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/v1687385776/command_project_task_pro_images/desktop/bg-image-7.jpg',
  },
  {
    id: 7,
    backgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/v1687385776/command_project_task_pro_images/desktop/bg-image-8.jpg',
  },
  {
    id: 8,
    backgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/v1687385776/command_project_task_pro_images/desktop/bg-image-9.jpg',
  },
  {
    id: 9,
    backgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/v1687385776/command_project_task_pro_images/desktop/bg-image-10.jpg',
  },
  {
    id: 10,
    backgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/v1687385776/command_project_task_pro_images/desktop/bg-image-11.jpg',
  },

  {
    id: 11,
    backgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/v1687385776/command_project_task_pro_images/desktop/bg-image-12.jpg',
  },
  {
    id: 12,
    backgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/v1687385776/command_project_task_pro_images/desktop/bg-image-13.jpg',
  },
  {
    id: 13,
    backgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/v1687385776/command_project_task_pro_images/desktop/bg-image-14.jpg',
  },
  {
    id: 14,
    backgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/v1687385776/command_project_task_pro_images/desktop/bg-image-15.jpg',
  },
];

export const BgChange = () => {
  return (
    <>
      <Title>Background</Title>
      <ButtonContainer>
        <ButtonNoneBg type="button">
          <SvgIcons aria-label="close modal select icon" width={18} height={18}>
            <use href={`${sprite}#icon-image`}></use>
          </SvgIcons>
        </ButtonNoneBg>
        {buttonsImg.map(button => (
          <Button
            key={button.id}
            type="button"
            style={{ backgroundImage: `url(${button.backgroundImage})` }}
          ></Button>
        ))}
      </ButtonContainer>
    </>
  );
};
