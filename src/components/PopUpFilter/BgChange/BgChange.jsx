import React, { useState, useEffect } from 'react';

import sprite from '../../../images/sprite.svg';
import {
  Button,
  ButtonNoneBg,
  ButtonContainer,
  Title,
  SvgIcons,
  BgContainer,
} from './BgChange.styled';

const buttonsImg = [
  {
    id: 1,
    backgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_28/c_crop,h_28,w_28/v1687378707/command_project_task_pro_images/desktop/bg-image-1.jpg',
    retinaBackgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_56/c_crop,h_56,w_56/v1687378707/command_project_task_pro_images/desktop/bg-image-1_2x.jpg',
  },
  {
    id: 2,
    backgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_28/c_crop,h_28,w_28/v1687378707/command_project_task_pro_images/desktop/bg-image-2.jpg',
    retinaBackgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_56/c_crop,h_56,w_56/v1687378707/command_project_task_pro_images/desktop/bg-image-2_2x.jpg',
  },
  {
    id: 3,
    backgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_28/c_crop,h_28,w_28/v1687378707/command_project_task_pro_images/desktop/bg-image-3.jpg',
    retinaBackgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_56/c_crop,h_56,w_56/v1687378707/command_project_task_pro_images/desktop/bg-image-3_2x.jpg',
  },
  {
    id: 4,
    backgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_28/c_crop,h_28,w_28/v1687378707/command_project_task_pro_images/desktop/bg-image-4.jpg',
    retinaBackgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_56/c_crop,h_56,w_56/v1687378707/command_project_task_pro_images/desktop/bg-image-4_2x.jpg',
  },
  {
    id: 5,
    backgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_28/c_crop,h_28,w_28/v1687378707/command_project_task_pro_images/desktop/bg-image-5.jpg',
    retinaBackgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_56/c_crop,h_56,w_56/v1687378707/command_project_task_pro_images/desktop/bg-image-5_2x.jpg',
  },
  {
    id: 6,
    backgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_28/c_crop,h_28,w_28/v1687378707/command_project_task_pro_images/desktop/bg-image-6.jpg',
    retinaBackgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_56/c_crop,h_56,w_56/v1687378707/command_project_task_pro_images/desktop/bg-image-6_2x.jpg',
  },
  {
    id: 7,
    backgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_28/c_crop,h_28,w_28/v1687378707/command_project_task_pro_images/desktop/bg-image-7.jpg',
    retinaBackgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_56/c_crop,h_56,w_56/v1687378707/command_project_task_pro_images/desktop/bg-image-7_2x.jpg',
  },
  {
    id: 8,
    backgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_28/c_crop,h_28,w_28/v1687378707/command_project_task_pro_images/desktop/bg-image-8.jpg',
    retinaBackgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_56/c_crop,h_56,w_56/v1687378707/command_project_task_pro_images/desktop/bg-image-8_2x.jpg',
  },
  {
    id: 9,
    backgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_28/c_crop,h_28,w_28/v1687378707/command_project_task_pro_images/desktop/bg-image-9.jpg',
    retinaBackgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_56/c_crop,h_56,w_56/v1687378707/command_project_task_pro_images/desktop/bg-image-9_2x.jpg',
  },
  {
    id: 10,
    backgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_28/c_crop,h_28,w_28/v1687378707/command_project_task_pro_images/desktop/bg-image-10.jpg',
    retinaBackgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_56/c_crop,h_56,w_56/v1687378707/command_project_task_pro_images/desktop/bg-image-10_2x.jpg',
  },
  {
    id: 11,
    backgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_28/c_crop,h_28,w_28/v1687378707/command_project_task_pro_images/desktop/bg-image-11.jpg',
    retinaBackgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_56/c_crop,h_56,w_56/v1687378707/command_project_task_pro_images/desktop/bg-image-11_2x.jpg',
  },

  {
    id: 12,
    backgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_28/c_crop,h_28,w_28/v1687378707/command_project_task_pro_images/desktop/bg-image-12.jpg',
    retinaBackgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_56/c_crop,h_56,w_56/v1687378707/command_project_task_pro_images/desktop/bg-image-12_2x.jpg',
  },
  {
    id: 13,
    backgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_28/c_crop,h_28,w_28/v1687378707/command_project_task_pro_images/desktop/bg-image-13.jpg',
    retinaBackgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_56/c_crop,h_56,w_56/v1687378707/command_project_task_pro_images/desktop/bg-image-13_2x.jpg',
  },
  {
    id: 14,
    backgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_28/c_crop,h_28,w_28/v1687378707/command_project_task_pro_images/desktop/bg-image-14.jpg',
    retinaBackgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_56/c_crop,h_56,w_56/v1687378707/command_project_task_pro_images/desktop/bg-image-14_2x.jpg',
  },
  {
    id: 15,
    backgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_28/c_crop,h_28,w_28/v1687378707/command_project_task_pro_images/desktop/bg-image-15.jpg',
    retinaBackgroundImage:
      'https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_56/c_crop,h_56,w_56/v1687378707/command_project_task_pro_images/desktop/bg-image-15_2x.jpg',
  },
];

export const BgChange = () => {
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    const loadImage = async imageUrl => {
      try {
        const response = await fetch(imageUrl);
        if (response.ok) {
          return await response.blob();
        }
        throw new Error('Image loading failed.');
      } catch (error) {
        console.error(error);
      }
    };

    const loadImages = async () => {
      const promises = buttonsImg.map(button =>
        loadImage(button.backgroundImage)
      );
      try {
        const images = await Promise.all(promises);
        setLoadedImages(images);
      } catch (error) {
        console.error(error);
      }
    };

    loadImages();
  }, []);

  const handleButtonClick = id => {
    console.log(`Button clicked with ID: ${id}`);
  };

  return (
    <BgContainer>
      <Title>Background</Title>
      <ButtonContainer>
        <ButtonNoneBg type="button" onClick={() => handleButtonClick(0)}>
          <SvgIcons width={18} height={18}>
            <use xlinkHref={`${sprite}#icon-image`} />
          </SvgIcons>
        </ButtonNoneBg>
        {buttonsImg.map((button, index) => (
          <Button
            key={button.id}
            type="button"
            style={{
              backgroundImage: `url(${button.backgroundImage})`,
              backgroundSize: 'cover',
            }}
            onClick={() => handleButtonClick(button.id)}
          >
            {loadedImages[index] && (
              <img
                srcSet={`${button.backgroundImage} 1x, ${button.retinaBackgroundImage} 2x`}
                alt=""
              />
            )}
          </Button>
        ))}
      </ButtonContainer>
    </BgContainer>
  );
};
