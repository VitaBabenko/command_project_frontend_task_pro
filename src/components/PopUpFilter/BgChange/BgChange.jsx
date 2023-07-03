import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getColumnsForBoard,
  updateUserBoard,
} from 'redux/dashboards/operation';

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

const buttonsImg = images;

export const BgChange = React.memo(() => {
  const [loadedImages, setLoadedImages] = useState([]);

  const dispatch = useDispatch();
  const { boardName } = useParams();

  const board = useSelector(state =>
    state.dashboard.dashboards.find(item => item._id === boardName)
  );

  const backgroundId = board.background.toString();

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
        const results = await Promise.allSettled(promises);
        const images = results
          .filter(result => result.status === 'fulfilled')
          .map(result => result.value);
        setLoadedImages(images);
      } catch (error) {
        console.error(error);
      }
    };

    loadImages();
  }, []);

  const handleButtonClick = async id => {
    const data = {
      title: board.title,
      dashboardIcon: board.dashboardIcon,
      background: `${id}`,
    };

    await dispatch(updateUserBoard({ boardId: board._id, board: data }));
    await dispatch(getColumnsForBoard(boardName));
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
        {buttonsImg.map(button => (
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
            {loadedImages[button.id] && (
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
});
