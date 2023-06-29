import styled from 'styled-components';


export const EditProfileWrapper = styled.div `
padding: 24px;
width: 400px;
height: 440px;
background: #151515;
border: 1px solid rgba(190, 219, 176, 0.5);
border-radius: 8px;
`;

export const Input = styled.input `
display: none;
`;

export const Avatar= styled.div `
width: 68px;
  height: 68px;
  overflow: hidden;
`;

export const AvatarImg = styled.img `
display: inline-block;
width: auto;
height: auto;
max-width: 100%;
max-height: 100%;
margin: 0 auto;
border-radius: 8px;
`;

export const InputField = styled.input`
font-size: 14px;
font-family: 'Poppins';
letter-spacing: -0.28px;

min-width: 269px;
height: 49px;
padding-left: 18px;
background-color: transparent;
color: white;
border-radius: 8px;
border: 1px solid #bedbb0;
opacity: 0.4000000059604645;
box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);


@media screen and (min-width: 768px) {
  width: 326px;
  height: 49px;
}

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
   
  }
}
`;