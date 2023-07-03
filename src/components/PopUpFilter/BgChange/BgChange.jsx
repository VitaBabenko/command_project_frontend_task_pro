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
import { images } from '../../../utils/bgImgPreview';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateUserBoard } from 'redux/dashboards/operation';

const buttonsImg = images;

export const BgChange = () => {
  const [loadedImages, setLoadedImages] = useState([]);

  //
  const dispatch = useDispatch();
  const { boardName } = useParams();

  const board = useSelector(state =>
    state.dashboard.dashboards.find(item => item._id === boardName)
  );
  //

  const backgroundId = board.background.toString();
  console.log(backgroundId);

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

  const handleButtonClick = async id => {
    // await dispatch(
    //   updateUserBoard({
    //     background: id,
    //     _id: board._id,
    //     title: board.title,
    //     dashboardIcon: board.dashboardIcon,
    //   })
    // );
    console.log(id);
  };

  return (
    <BgContainer>
      <Title>Background</Title>
      <ButtonContainer>
        <ButtonNoneBg type="button" onClick={() => handleButtonClick(0)}>
          <SvgIcons width={18} height={18}>
            <use href={sprite + '#icon-bg-default'} />
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
            className={
              backgroundId.toString() === button.id.toString() ? 'active' : ''
            }
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
