import styled, { css } from 'styled-components';

export const placeholderStyle = css`
  color: var(${props => (!!props?.error ? '--colorError' : '--placeholder')});
  font-size: 14px;
`;

export const focusStyle = css`
  border: 1px solid
    var(${props => (!!props?.error ? '--colorError' : '--activeBorder')});
  box-shadow: 0px 4px 16px 0px var(--boxShadowColor);
`;

export const disabledStyle = css`
  background: var(--disabledBgColor);
`;

export const constBorderStyle = css`
  border: 1px solid
    var(${props => (!!props?.error ? '--colorError' : '--passiveBorderColor')});
`;

export const Wrapper = styled.div`
  width: 197px;
  height: 238px;
  border-radius: 8px;
  background: var(--helpBgColor);
  padding: 14px;

  @media screen and (min-width: 768px) {
    width: 212px;
    min-height: 272px;
    padding: 20px;
  }
`;

export const Img = styled.img`
  width: 54px;
  height: 78px;
`;

export const Text = styled.p`
  color: var(--needHelpBtn);
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.28px;
  margin-top: 14px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  margin-top: 19px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  color: var(--primaryTextColor);
  font-size: 12px;
  font-weight: 500;
  border: none;
`;

export const BtnTitle = styled.span`
  color: var(--needHelpBtn);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.24px;
  &:disabled {
    background: var(--disabledHelpBgColor);
  }
`;

export const ErrorMsg = styled.p`
  color: var(--colorError);
  display: block;
  font-size: 12px;
  line-height: 16px;
  overflow: hidden;
  width: calc(100% - 18px);
`;

export const WrapperInput = styled.div`
  margin-top: 14px;
  ${ErrorMsg} {
    margin-top: 5px;
    padding-left: 14px;
  }
`;

export const WrapperPopUp = styled.div`
  width: 100%;
  min-height: 355px;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid var(--modalBorderColor);
  background: var(--themeListBgColor);
  box-shadow: 0px 4px 16px 0px var(--boxShadowColor);

  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 340px;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`;

export const Icon = styled.svg`
  stroke: var(--needHelpBtn);
  fill: transparent;
`;

export const Logo = styled.span`
  color: var(--greenGreenBlueColor);
`;

export const Input = styled.input`
  display: flex;
  width: 100%;
  padding: 14px 14px 14px 18px;
  align-items: center;

  color: var(--primaryTextColor);
  outline: none;
  border-radius: 8px;
  ${constBorderStyle};
  background: transparent;

  &::placeholder {
    ${placeholderStyle}
  }

  &:focus {
    ${focusStyle}
  }

  &:disabled {
    ${disabledStyle}
  }
`;

export const InputLabel = styled.label``;

export const Textarea = styled.textarea`
  width: 100%;
  height: 120px;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 18px;
  border-radius: 8px;
  ${constBorderStyle};
  color: var(--primaryTextColor);
  background-color: transparent;
  resize: none;
  outline: none;
  cursor: pointer;
  &::placeholder {
    ${placeholderStyle}
  }

  &:focus {
    ${focusStyle}
  }

  &:disabled {
    ${disabledStyle}
  }
`;

export const ErrorResponseMessage = styled.p`
  color: var(--colorError);
`;

export const SuccessResponseMessage = styled.p`
  color: #1fc81f;
`;

export const ResponseMessage = styled.span`
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
`;

export const ResponseMessageWrapper = styled.div`
  margin: 14px 0;
  ${SuccessResponseMessage}, ${ErrorResponseMessage} {
    & > svg {
      display: inline-block;
      vertical-align: middle;
      margin-right: 8px;
    }
  }
`;
export const WrapperBox = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
`;
