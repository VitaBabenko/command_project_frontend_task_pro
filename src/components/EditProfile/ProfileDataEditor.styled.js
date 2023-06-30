import styled from 'styled-components';


export const EditProfileWrapper = styled.div`
padding: 24px;
width: 400px;
min-height: 440px;
background: var(--themeListBgColor);
border: 1px solid rgba(190, 219, 176, 0.5);
box-shadow: 0px 4px 16px 0px var(--boxShadowColor);
border-radius: 8px;
`;

export const Input = styled.input`
display: none;
`;

export const Avatar = styled.div`
width: 68px;
  height: 68px;
  overflow: hidden;
`;

export const AvatarImg = styled.svg`
display: inline-block;
width: auto;
height: auto;
max-width: 100%;
max-height: 100%;
margin: 0 auto;
border-radius: 8px;
background-color: var(--defaultAvatarBgColor);
fill: var(--userSvgFill);
`;

export const IconUser = styled.use`
 border-radius: 8px;
 
 `;
export const InputField = styled.input`
display: block;
width: 100%;
background: var(--themeListBgColor);
border: 1px solid var(--passiveBorderColor);
border-radius: 8px;
height: 48px;
line-height: 18px;
font-size: 14px;

color: var(--primaryTextColor);
padding: 14px 18px;
outline: none;
letter-spacing: -0.28px;
background-color: transparent;
// opacity: 0.4000000059604645;
box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);


@media screen and (min-width: 768px) {
  width: 100%;
  height: 49px;
}

&::placeholder {
  color: var(--placeholder);
    font-size: 14px;
    font-family: Poppins;
  }

  &:first-child {
    margin-bottom: 14px;
  }

  &:last-child {
    margin-bottom: 24px;
   
  }
}
`;

export const Icon = styled.svg`
  position: absolute;
  stroke: var(--iconEyeColor);
  fill: transparent;
  width: 18px;
  height: 18px;
  display: block;
  right: 18px;
  top: 50%;
  z-index: 1;
  cursor: pointer;
  margin: -8px 0 0;
  padding: 0;
`;

export const AvatarImgCurrent = styled.img`
  position: absolute;
  display: inline-block;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
  background: var(--themeListBgColor);
  border: 1px solid var(--passiveBorderColor);
  border-radius: 8px;
  outline: none;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
`;
