import styled from 'styled-components';


export const Form = styled.form`

  display: flex;
  
  gap:14px;
  flex-direction: column;
  align-items: center;
`;



export const Input = styled.input`
 
 display: flex;
 margin-top:0;
/* width: 344px; */
padding: 14px 14px 14px 18px;
align-items: center;
flex-direction: column;

color: #FFF;
border-radius: 8px;
border: 1px solid #BEDBB0;
opacity: 0.4000000059604645;
background: #1F1F1F;
box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
@media (min-width: 375px) {
    width: 287px;
    padding:  14px 15px 14px 18px;
  }

  @media (min-width: 768px) {
   
    padding:14px 14px 14px 18px;
    width: 344px;
  }

&::placeholder {
    color: #fff;
    font-size: 14px;
   
  }
`;

export const Icon = styled.svg`
position: absolute;
right: 50px;
bottom: 15px;
width: 18px;
height: 18px;
stroke:#FFFFFF;
`

export const Button = styled.button`

 display: flex;
width: 100%;
padding: 14px 0px;
justify-content: center;
align-items: center;
border-radius: 8px;
background: #BEDBB0;
  cursor: pointer;
  @media (min-width: 375px) {
    width: 287px;
    padding:  14px 15px 14px 18px;
  }

  @media (min-width: 768px) {
   
    width: 344px;
  }


`;

export const ErrorMessage = styled.span`


  color: red;
  font-size: 16px;
  
`;

export const FormContainer = styled.div`
position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const IconLogin = styled.svg`
position: absolute;
right: 50px;
bottom: 80px;
width: 18px;
height: 18px;
stroke:#FFFFFF;
`;

export const ErrorContainer = styled.div`
position: relative;

gap:10px;
`