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
  font-style: normal;
  font-weight: 400;
  transition: 0.3s ease;
  ${'' /* background-color: var(--boardBgColor); */}


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
  --cardHeaderText: #ffffff;
  --actionsButton: #121212;
  --cardItem: #121212;
  --cardItemText: #888888;

  --boxShadowColor: rgba(22, 22, 22, 0.05);
  --needHelpBtn: #FFFFFF;
  --placeholder:rgba(255, 255, 255, 1);
  --userSvgFill: #161616;
  --bgPlus:#BEDBB0;
  --iconEyeColor:#FFFFFF;
  --btnColorHover: #d8e9cf;
}

body[data-theme="light"] {
  --greenGreenBlueColor: #bedbb0;
  --sidebarBgColor: #FFFFFF;
  --helpBgColor: #F6F6F7;
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
    --cardHeaderText: #161616;
    --actionsButton: #FFFFFF;
    --cardItem: #FFFFFF;
    --cardItemText: ##5C5C5C;
  --boxShadowColor: rgba(22, 22, 22, 0.05);
  --needHelpBtn: #161616;
  --placeholder: rgba(22, 22, 22, 1);
  --userSvgFill: #FFFFFF;
  --bgPlus:#BEDBB0;
  --iconEyeColor:#161616;
  --btnColorHover: #d8e9cf;
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
  --boxShadowColor: rgba(22, 22, 22, 0.05);
  --needHelpBtn: #FFFFFF;
  --placeholder:#161616;
  --userSvgFill: #FFFFFF;
  --bgPlus:#ECEDFD;
  --iconEyeColor:#161616;
  --btnColorHover: #b8bcfd;
}
`;

export default GlobalStyle;
