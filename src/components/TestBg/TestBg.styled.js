import styled from 'styled-components';

const baseBgUrl =
  'https://res.cloudinary.com/dxhypjavs/image/upload/v1687378707/command_project_task_pro_images/';

export const TestBgImage = styled.div`
  width: 200px;
  height: 200px;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;

  @media screen and (max-width: 767px) {
    background-image: ${props =>
      `url(${baseBgUrl}mobile/bg-image-${props.bgnumber}.jpg)`};
  }

  @media screen and (min-device-pixel-ratio: 2) and (max-width: 767px),
    screen and (min-resolution: 192dpi) and (max-width: 767px),
    screen and (min-resolution: 2dppx) and (max-width: 767px) {
    background-image: ${props =>
      `url(
      ${baseBgUrl}mobile/bg-image-${props.bgnumber}_2x.jpg)`};
  }

  @media screen and (min-width: 768px) {
    background-image: ${props =>
      `url(
      ${baseBgUrl}tablet/bg-image-${props.bgnumber}.jpg)`};
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: ${props =>
      `url(
      ${baseBgUrl}tablet/bg-image-${props.bgnumber}_2x.jpg)`};
  }

  @media screen and (min-width: 1280px) {
    background-image: ${props =>
      `url(
      ${baseBgUrl}desktop/bg-image-${props.bgnumber}.jpg)`};
  }
  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1280px),
    screen and (min-resolution: 192dpi) and (min-width: 1280px),
    screen and (min-resolution: 2dppx) and (min-width: 1280px) {
    max-width: 1600px;
    background-image: ${props =>
      `url(
      ${baseBgUrl}desktop/bg-image-${props.bgnumber}_2x.jpg)`};
  }
`;
