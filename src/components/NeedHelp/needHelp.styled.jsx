
import styled from 'styled-components';

export const Wrapper = styled.div`
width: 212px;
height: 272px;
border-radius: 8px;
background: #1F1F1F;
padding: 20px;
`;

export const Img = styled.img`
width: 54px;
height: 78px;
`;


export const Text = styled.p` 
color: #FFF;
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
color: #FFF;
font-size: 12px;
font-weight: 500;
border: none;
`

export const BtnTitle = styled.span`
color: #FFF;
font-size: 12px;
font-family: Poppins; font-weight: 500;
letter-spacing: -0.24px;
`;

export const WrapperPopUp = styled.div `
width: 100%;
height: 355px;
padding: 24px;
border-radius: 8px;
border: 1px solid rgba(190, 219, 176, 0.50);
background: #151515;
box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.05);
`
export const Icon =  styled.svg `
stroke: #FFFFFF;
`

export const Input = styled.input`
display: flex;
width: 344px;
padding: 14px 14px 14px 18px;
align-items: center;

color: #FFF;
border-radius: 8px;
border: 1px solid #BEDBB0;
opacity: 0.4000000059604645;
background: #1F1F1F;
box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);


&::placeholder {
    color: #fff;
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

export const WrapperInput = styled.div `
&:last-child {
  margin-bottom: 45px;
}
`