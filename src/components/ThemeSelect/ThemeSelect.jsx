import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from '../../redux/theme/themeSlice';
import sprite from '../../images/sprite.svg';
import { useSelector } from 'react-redux';
// console.log("sprite: ", Sprite);

import {
  ThemeSelectWrapper,
  ThemeSelects,
  ThemeSelectIcon,
  ThemeSelectTitle,
} from './ThemeSelect.styled';

const ThemeSelect = () => {
  const dispatch = useDispatch();
  const [isListOpen, setIsListOpen] = useState(false);


  const currentTheme = useSelector(state => state.theme.themeColor);
  console.log('currentTheme: ', currentTheme);

    const [selectedTheme, setSelectedTheme] = useState(currentTheme);

  useEffect(() => {
    // console.log("useEffect", selectedTheme);
    document.body.setAttribute('data-theme', selectedTheme);
  }, [selectedTheme]);

  const handleThemeToggle = theme => {
    dispatch(setTheme(theme));
    setSelectedTheme(theme);
    setIsListOpen(false);
  };

  return (
    <>
      <ThemeSelectTitle onClick={() => setIsListOpen(!isListOpen)}>
        Theme
        <ThemeSelectIcon aria-label="theme-select icon">
          <use href={sprite + '#icon-arrow-down'}></use>
        </ThemeSelectIcon>
      </ThemeSelectTitle>
      {isListOpen && (
        <ThemeSelectWrapper>
          <ThemeSelects
            theme={selectedTheme}
            onClick={() => handleThemeToggle('light')}
          >
            Light
          </ThemeSelects>
          <ThemeSelects
            theme={selectedTheme}
            onClick={() => handleThemeToggle('dark')}
          >
            Dark
          </ThemeSelects>
          <ThemeSelects
            theme={selectedTheme}
            onClick={() => handleThemeToggle('violet')}
          >
            Violet
          </ThemeSelects>
        </ThemeSelectWrapper>
      )}
    </>
  );
};

export default ThemeSelect;
