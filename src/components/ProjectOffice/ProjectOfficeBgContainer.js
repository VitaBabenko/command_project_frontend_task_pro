import styled from 'styled-components';

const baseBgUrl =
  'https://res.cloudinary.com/dxhypjavs/image/upload/v1687378707/command_project_task_pro_images/';

export const BackgroundContainer = styled.div`
  /* background-color: red; */
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-color: ${props => (props.bgnumber ? 'initial' : 'transparent')};


  @media screen and (max-width: 374px) {
    background-image: ${props =>
      `url(${baseBgUrl}mobile/bg-image-${props.bgnumber}.jpg)`};
  }

  @media screen and (min-device-pixel-ratio: 2) and (max-width: 374px),
    screen and (min-resolution: 192dpi) and (max-width: 374px),
    screen and (min-resolution: 2dppx) and (max-width: 374px) {
    background-image: ${props =>
      `url(
      ${baseBgUrl}mobile/bg-image-${props.bgnumber}_2x.jpg)`};
  }

  @media screen and (min-width: 375px) {
    background-image: ${props =>
      `url(
      ${baseBgUrl}tablet/bg-image-${props.bgnumber}.jpg)`};
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 375px),
    screen and (min-resolution: 192dpi) and (min-width: 375px),
    screen and (min-resolution: 2dppx) and (min-width: 375px) {
    background-image: ${props =>
      `url(
      ${baseBgUrl}tablet/bg-image-${props.bgnumber}_2x.jpg)`};
  }

  @media screen and (min-width: 768px) {
    background-image: ${props =>
      `url(
      ${baseBgUrl}desktop/bg-image-${props.bgnumber}.jpg)`};
  }
  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: ${props =>
      `url(
      ${baseBgUrl}desktop/bg-image-${props.bgnumber}_2x.jpg)`};
  }
`;