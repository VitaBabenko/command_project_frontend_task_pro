import styled from 'styled-components';

// https://res.cloudinary.com/demo/image/upload/c_crop,g_north_west,h_150,w_200/docs/models.jpg

// c_scale,h_150,w_150/docs/models.jpg

// https://res.cloudinary.com/dxhypjavs/image/upload/v1687378707/command_project_task_pro_images/desktop/bg-image-1.jpg

// https://res.cloudinary.com/dxhypjavs/image/upload/c_crop,h_200,w_200/v1687378707/command_project_task_pro_images/desktop/bg-image-1.jpg

// https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_200/v1687378707/command_project_task_pro_images/desktop/bg-image-1.jpg

// зменшує до висоти 200 рх а потім обрізає по бокам до 200*200
// https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_200/c_crop,h_200,w_200/v1687378707/command_project_task_pro_images/desktop/bg-image-1.jpg
// https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_200/c_crop,h_200,w_200/v1687378707/command_project_task_pro_images/desktop/bg-image-1_2x.jpg

const baseBgUrl =
  'https://res.cloudinary.com/dxhypjavs/image/upload/v1687378707/command_project_task_pro_images/';

export const TestBgImage = styled.div`
  margin-top: 300px;
  width: 200px;
  height: 200px;
  /* border: 2px solid green; */
  background-color: red;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;

  /* background-image: url("https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_28/c_crop,h_28,w_28/v1687378707/command_project_task_pro_images/desktop/bg-image-1.jpg") */

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
