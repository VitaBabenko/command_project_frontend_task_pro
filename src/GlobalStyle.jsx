import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

const GlobalStyle = createGlobalStyle`

:root {
  --boxShadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  --authBgGradient: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    #bedbb0 92.19%
  );
  --transition_data: 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

  body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  transition: 0.3s ease;
${
  '' /* 
   background-image: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    #bedbb0 92.19%
  ); 
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat; */
}

  background-color: var(--boardBgColor);


  ul,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}

.button {
  cursor: pointer;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}

}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}


body[data-theme="dark"] {
  --greenGreenBlueColor: #bedbb0;
  --sidebarBgColor: #121212;
  --helpBgColor: #1f1f1f;
  --headerBgColor: #161616;
  --boardBgColor: #1f1f1f;
  --taskBgColor: #121212;
  --currentProjBgColor: #1f1f1f;
  --themeListBgColor: #151515;
  --defaultAvatarBgColor: #1f1f1f;

  --createNewBoardIconBgColor: #bedbb0;
  --addAnotherColumnIconBgColor: #ffffff;
  --addAvatarIconBgColor: #bedbb0;

  --primaryTextColor: #ffffff;
  --secondaryTextColor: rgba(255, 255, 255, 0.5);
  --popupTextColor: rgba(255, 255, 255, 0.5);
  --themeTitleTextColor: rgba(255, 255, 255, 0.8);

  --passiveBorderColor: rgb(190, 219, 176, 0.4);
  --modalGorizontalBorderColor: rgba(255, 255, 255, 0.1);
  --modalBorderColor: rgba(190, 219, 176, 0.5);
  --defaultImgColor: rgba(255, 255, 255, 0.7);
  --defaultUserColor: #151515;

  --calendarSelectDay: #1F1F1F;
  --calendarDisabled:rgba(22, 22, 22, 0.20);
  --calendarBorderTop: rgba(255, 255, 255, 0.2);
  --calendarSecondTextColor:rgba(22, 22, 22, 0.50);
  --calendarWithoutColor: rgba(255, 255, 255, 0.30);


 
}

body[data-theme="light"] {
  --greenGreenBlueColor: #bedbb0;
  --sidebarBgColor: #FFFFFF;
  --helpBgColor: #fcfcfc;
  --headerBgColor: #fcfcfc;
  --boardBgColor: #F6F6F7;
  --taskBgColor: #f6f6f7;
  --currentProjBgColor: #f6f6f7;
  --themeListBgColor: #fcfcfc;
  --defaultAvatarBgColor: #f6f6f7;

  --createNewBoardIconBgColor: #bedbb0;
  --addAnotherColumnIconBgColor: #161616;
  --addAvatarIconBgColor: #bedbb0;

  --primaryTextColor: #161616;
  --secondaryTextColor: rgba(22, 22, 22, 0.7);
  --popupTextColor: #161616;
  --themeTitleTextColor: rgba(22, 22, 22, 0.8);

  --passiveBorderColor: rgb(190, 219, 176, 0.4);
  --modalGorizontalBorderColor: rgba(22, 22, 22, 0.1);
  --modalBorderColor: transparent;
  --defaultImgColor: rgba(22, 22, 22, 0.7);
    --defaultUserColor: #FFFFFF;

  --calendarSelectDay: #161616;
  --calendarDisabled:rgba(22, 22, 22, 0.20);
  --calendarBorderTop: rgba(22, 22, 22, 0.2);
  --calendarSecondTextColor:rgba(22, 22, 22, 0.50);
  --calendarWithoutColor: rgba(22, 22, 22, 0.30);



}

body[data-theme="violet"] {
  --greenGreenBlueColor: #5255bc;
  --sidebarBgColor: #5255bc;
  --helpBgColor: rgba(236, 237, 253, 0.4);
  --headerBgColor: #ffffff;
  --boardBgColor: #ecedfd;
  --taskBgColor: #ffffff;
  --currentProjBgColor: rgba(255, 255, 255, 0.5);
  --themeListBgColor: #fcfcfc;
  --defaultAvatarBgColor: #ecedfd;

  --createNewBoardIconBgColor: #b8bcfd;
  --addAnotherColumnIconBgColor: #FFFFFF;
  --addAvatarIconBgColor: #ecedfd;

  --primaryTextColor: #161616;
  --secondaryTextColor: rgba(22, 22, 22, 0.7);
  --popupTextColor: #161616;
  --themeTitleTextColor: rgba(22, 22, 22, 0.8);

  --passiveBorderColor: rgba(82, 85, 188, 0.4);
  --modalGorizontalBorderColor: rgba(22, 22, 22, 0.1);
  --modalBorderColor: transparent;
  --defaultImgColor: rgba(22, 22, 22, 0.7);
    --defaultUserColor: #FFFFFF;

  --calendarSelectDay: #FCFCFC;
  --calendarDisabled:rgba(22, 22, 22, 0.20);
  --calendarBorderTop:rgba(22, 22, 22, 0.2);
  --calendarSecondTextColor: rgba(22, 22, 22, 0.50);
  --calendarWithoutColor: rgba(22, 22, 22, 0.30);


}
`;

export default GlobalStyle;
