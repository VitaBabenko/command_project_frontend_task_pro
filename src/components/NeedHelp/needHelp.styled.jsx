import styled from 'styled-components';

export const Wrapper = styled.div`
width: 212px;
min-height: 272px;
border-radius: 8px;
background: var(--helpBgColor);
padding: 20px;
`;

export const Img = styled.img`
width: 54px;
height: 78px;
`;


export const Text = styled.p` 
color: var(--primaryTextColor);
font-size: 14px;
font-family: Poppins;
line-height: 20px;
letter-spacing: -0.28px;
margin-top: 14px;
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
`

export const BtnTitle = styled.span`
color: var(--needHelpBtn);
font-size: 12px;
font-family: Poppins;
font-weight: 500;
letter-spacing: -0.24px;
`;

export const WrapperPopUp = styled.div`
width: 100%;
min-height: 355px;
padding: 24px;
border-radius: 8px;
border: 1px solid var(--modalBorderColor);
// background: #151515;
background: var(--themeListBgColor);
box-shadow: 0px 4px 16px 0px var(--boxShadowColor);
`
export const Icon = styled.svg`
stroke: var(--needHelpBtn);
fill: transparent;
`
export const Logo = styled.span`
color: var(--greenGreenBlueColor);
`
export const Input = styled.input`
display: flex;
width: 344px;
padding: 14px 14px 14px 18px;
align-items: center;

color: var(--primaryTextColor);
border-radius: 8px;
border: 1px solid var(--passiveBorderColor);
// opacity: 0.4000000059604645;
background: var(--helpBgColor);
// box-shadow: 0px 4px 16px 0px var(--greenGreenBlueColor);


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
    height:85px
  }
}
`;

export const WrapperInput = styled.div`
&:last-child {
  margin-bottom: 45px;
}
`

export const Textarea = styled.textarea`
width: 100%;
height: 120px;
margin-bottom: 24px;
padding-top: 14px;
padding-bottom: 14px;
padding-left: 18px;
border-radius: 8px;
border: 1px solid var(--passiveBorderColor);
// opacity: 0.4000000059604645;
color: var(--primaryTextColor);
background-color: transparent;
resize: none;
&::placeholder {
  color: var(--placeholder);
  font-size: 14px;
  font-family: Poppins;
}
`;

export const ErrorText = styled.p`
color: #FF5252;
    display: block;
    font-size: 14px;
    line-height: 20px;
    overflow: hidden;
    width: calc(100% - 18px);
`;

export const ErrorMsg = styled.div`
color: #FF5252;
    display: block;
    font-size: 14px;
    line-height: 20px;
    overflow: hidden;
    width: calc(100% - 18px);
`;

export const SuccessMsg = styled.div`
color:#BEDBB0 ;
    display: block;
    font-size: 14px;
    line-height: 20px;
    overflow: hidden;
    width: calc(100% - 18px);
`