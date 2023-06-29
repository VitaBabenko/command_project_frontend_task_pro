import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin-right: 24px;
  align-items: center;
  color: var(--primaryTextColor);
  font-size: 14px;
  margin-left: 14px;
`;

export const ImgWrap = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  margin-left: 8px;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0 0;
`;
