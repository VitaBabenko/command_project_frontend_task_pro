import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectThema } from '../../redux/authorization/selectors';
import { updateThema } from '../../redux/authorization/operations';
import sprite from '../../images/sprite.svg';
import {
  ThemetWrapper,
  ThemeSelectWrapper,
  ThemeSelects,
  ThemeSelectIcon,
  ThemeSelectTitle,
} from './ThemeSelect.styled';

const ThemeSelect = () => {
  const dispatch = useDispatch();
  const [isListOpen, setIsListOpen] = useState(false);

  const [selectedTheme, setSelectedTheme] = useState(useSelector(selectThema));

  useEffect(() => {
    document.body.setAttribute('data-theme', selectedTheme);
  }, [selectedTheme]);

  const handleThemeToggle = theme => {
    dispatch(updateThema(theme));
    setSelectedTheme(theme);
    setIsListOpen(false);
  };

  return (
    <ThemetWrapper>
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
    </ThemetWrapper>
  );
};

export default ThemeSelect;
