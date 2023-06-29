import styled from 'styled-components';

export const BgContainer = styled.div``;

export const Title = styled.h3`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: var(--primaryTextColor);
  margin: 0;
`;

export const ButtonContainer = styled.div`
  max-width: 252px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;

  box-sizing: border-box;
  padding: 14px 0;
`;

export const Button = styled.button`
  display: flex;
  align-content: center;
  justify-content: center;

  width: 28px;
  height: 28px;
  border-radius: 6px;

  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  transition: opacity var(--transition_data);

  &:hover,
  &:focus {
    opacity: 0.7;
  }

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    border-radius: 6px;
  }
`;

export const ButtonNoneBg = styled.button`
  width: 28px;
  height: 28px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;
  background-color: var(--defaultAvatarBgColor);
  border: none;
  outline: none;
  cursor: pointer;
  background-image: url();
  background-size: cover;
  transition: opacity var(--transition_data);

  &:hover,
  &:focus {
    opacity: 0.7;
  }
`;

export const SvgIcons = styled.svg`
  stroke: var(--defaultImgColor);
`;
