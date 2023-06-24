import { useState, useEffect } from 'react';

import sprite from '../../images/sprite.svg';
// console.log("sprite: ", Sprite);

import {
  ThemeSelectWrapper,
  ThemeSelects,
  ThemeSelectIcon,
  ThemeSelectTitle,
} from './ThemeSelect.styled';

const ThemeSelect = () => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('light');

  useEffect(() => {
    // console.log("useEffect", selectedTheme);
    document.body.setAttribute('data-theme', selectedTheme);
  }, [selectedTheme]);

  const handleThemeToggle = theme => {
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
