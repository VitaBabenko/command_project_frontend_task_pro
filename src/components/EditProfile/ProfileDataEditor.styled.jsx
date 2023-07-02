import { Input, InputLabel, ErrorMsg } from 'components/NeedHelp/needHelp.styled';
import styled from 'styled-components';

export const EditProfileWrapper = styled.div`
width: 100%;
  padding: 24px;
  min-height: 440px;
  background: var(--themeListBgColor);
  border: 1px solid rgba(190, 219, 176, 0.5);
  box-shadow: 0px 4px 16px 0px var(--boxShadowColor);
  border-radius: 8px;

  @media screen and (min-width: 375px) {
    width: 335px;
  };
  @media screen and (min-width: 768px){
    width: 400px;    
  };
`;

export const WrapperBox = styled.div`
  margin-top:24px;
`

export const EditProfileWrapperBody = styled.div`
  display: ${props => props.$visible ? 'none' : 'block'};
`;

export const WrapperAvatar = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${Input}{
    display:none;
  };
  ${ErrorMsg}{
    width:auto;
  }
`

export const WrapperAvatarBody = styled.div`
  position: relative;
  margin-bottom: 25px;
  ${InputLabel}{
    position: absolute;
    width: 24px;
    height: 24px;
    background: var(--bgPlus);
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #000;
    border-radius: 5px;
  }
`

export const Avatar = styled.div`
  width: 68px;
  height: 68px;
  overflow: hidden;
`;

export const AvatarImg = styled.svg`
  display: inline-block;
  width: 68px;
  height: 68px;
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

export const Icon = styled.svg`
  display: block;
  stroke: var(--iconEyeColor);
  fill: transparent;
  width: 18px;
  height: 18px;
  z-index: 1;
  cursor: pointer;
`;

export const AvatarImgCurrent = styled.img`
  position: absolute;
  display: inline-block;
  width: 68px;
  height: 68px;
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
  background: var(--themeListBgColor);
  border: 1px solid var(--passiveBorderColor);
  border-radius: 8px;
  outline: none;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
`;

export const BtnEditPhoto = styled.button`
 background-color: transparent;
  border: none;
  padding: 10px;
`;

export const IconPassword = styled.span`
  position: absolute;
  width: 18px;
  height: 18px;
  stroke: #FFFFFF;
  display: block;
  top: 50%;
  right:27px;
  z-index: 1;
  cursor: pointer;
  margin: -8px 0 0;
  padding: 0;
`;

export const WrapperPass = styled.div`
  position: relative;
  ${Input}{
    padding-right:42px;
  }
`
