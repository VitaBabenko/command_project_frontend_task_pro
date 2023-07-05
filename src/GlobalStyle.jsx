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
  --colorError:#FF5252;
}

  body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  transition: 0.3s ease;
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
  --addAnotherColumnBtnBgColor: #121212;

  --createNewBoardIconBgColor: #bedbb0;
  --addAnotherColumnIconBgColor: #ffffff;
  --addAvatarIconBgColor: #bedbb0;
  --iconPlus: #121212;
  --logoIcon: #FFFFFF;
  --logoBackground: #1F1F1F;
  --popupBackground:#1F1F1F;
  --popupColor: rgba(255, 255, 255, 0.50);
  --poupHoverColor: rgba(190, 219, 176, 1);
 

  --primaryTextColor: #ffffff;
  --secondaryTextColor: rgba(255, 255, 255, 0.5);
  --popupTextColor: rgba(255, 255, 255, 0.5);
  --themeTitleTextColor: rgba(255, 255, 255, 0.8);
  --textBoardColor: rgba(255, 255, 255, 0.5);

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
  --iconLogOut: #bedbb0;
  --placeholder:rgba(255, 255, 255, 1);
  --userSvgFill: #161616;
  --bgPlus:#BEDBB0;
  --iconEyeColor:#FFFFFF;
  --btnColorHover: #d8e9cf;
  --iconColor: rgba(255, 255, 255, 0.5);
  --iconCardColor: rgba(255, 255, 255, 0.50);

  --iconPlusColor: #121212;



  --calendarWithoutColor: rgba(255, 255, 255, 0.30);

  --calendarSecondTextColor: rgba(255, 255, 255, 0.50);
  --calendarDisabled: rgba(255, 255, 255, 0.20);
  --calendarDisabled: rgba(255, 255, 255, 0.20);
  --calendarSelectDay: rgba(31, 31, 31, 1);
  --calendarBorderTop: rgba(255, 255, 255, 0.2);

  --currentLinkBgColor: #1F1F1F;

  --activeBorder:#BEDBB0;
  --disabledBgColor: #b4adad;
  --customButtonBackground: #121212;
  --plusButtonBackground: #FFFFFF;
  --customButtonColor: #FFFFFF;
  --addCardButtonBackground: #BEDBB0;
  --addCardButtonColor: #161616;
  --addPlusButtonBackground: #161616;
  --addPlusIconColor: #FFFFFF;
  --dividerColor: #2A2A2A;

  /* полоса прокрутки (скроллбар) */
  ::-webkit-scrollbar {
    width: 8px; /* ширина для вертикального скролла */
    height: 0px; /* высота для горизонтального скролла */
    background-color: #313131;
    border-radius: 12px;
}

/* ползунок скроллбара */
::-webkit-scrollbar-thumb {
    background-color: #121212;
    border-radius: 12px;
    width: 8px;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #121212;
}
  
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
    --addAnotherColumnBtnBgColor: #FFFFFF;

  --createNewBoardIconBgColor: #bedbb0;
  --addAnotherColumnIconBgColor: #161616;
  --addAvatarIconBgColor: #bedbb0;
   --iconPlus: #121212;
   --logoIcon: #FFFFFF;
   --logoBackground: #1F1F1F;
   --popupBackground: #FCFCFC;
   --popupColor: rgba(22, 22, 22, 1);
   --poupHoverColor: rgba(190, 219, 176, 1);

  --primaryTextColor: #161616;
  --secondaryTextColor: rgba(22, 22, 22, 0.7);
  --popupTextColor: #161616;
  --themeTitleTextColor: rgba(22, 22, 22, 0.8);
  --textBoardColor: rgba(22, 22, 22, 0.5);

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
   --iconLogOut: #bedbb0;
  --placeholder: rgba(22, 22, 22, 1);
  --userSvgFill: #FFFFFF;
  --bgPlus:#BEDBB0;
  --iconEyeColor:#161616;
  --btnColorHover: #d8e9cf;
  --iconColor: rgba(22, 22, 22, 0.5);

   --iconCardColor: rgba(22, 22, 22, 0.5);

  --iconPlusColor: #FFFFFF;



  --calendarWithoutColor: rgba(22, 22, 22, 0.30);

  --calendarSecondTextColor: rgba(22, 22, 22, 0.50);
  --calendarDisabled: rgba(22, 22, 22, 0.20);
  --calendarSelectDay: rgba(22, 22, 22, 1);
  --calendarBorderTop: rgba(22, 22, 22, 0.2);

  --currentLinkBgColor: #F6F6F7;


  --activeBorder:#BEDBB0;
  --disabledBgColor: #b4adad;
  --customButtonBackground: #FFFFFF;
  --customButtonColor: #161616;
  --plusButtonBackground: #161616;
  --addCardButtonBackground: #BEDBB0;
  --addCardButtonColor: #161616;
  --addPlusButtonBackground: #161616;
  --addPlusIconColor: #FFFFFF;
  --dividerColor: #E8E8E8;

  /* полоса прокрутки (скроллбар) */
  ::-webkit-scrollbar {
    width: 8px; /* ширина для вертикального скролла */
    height: 0px; /* высота для горизонтального скролла */
    background-color: #E8E8E8;
    border-radius: 12px;
}

/* ползунок скроллбара */
::-webkit-scrollbar-thumb {
    background-color: #D3D3D3;
    border-radius: 12px;
    width: 8px;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #D3D3D3;
}
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
      --addAnotherColumnBtnBgColor: #FFFFFF;

  --createNewBoardIconBgColor: #b8bcfd;
  --addAnotherColumnIconBgColor: #FFFFFF;
  --addAvatarIconBgColor: #ecedfd;
   --iconPlus: #FFFFFF;
   --logoIcon: #5255bc;
   --logoBackground: #ECEDFD;
   --popupBackground: #FCFCFC;
  --popupColor: rgba(22, 22, 22, 1);
  --poupHoverColor: rgba(82, 85, 188, 1);

  --primaryTextColor: #161616;
  --secondaryTextColor: rgba(22, 22, 22, 0.7);
  --popupTextColor: #161616;
  --themeTitleTextColor: rgba(22, 22, 22, 0.8);
   --textBoardColor: rgba(255, 255, 255, 0.5);

  --passiveBorderColor: rgba(82, 85, 188, 0.4);
  --modalGorizontalBorderColor: rgba(22, 22, 22, 0.1);
  --modalBorderColor: transparent;
  --defaultImgColor: rgba(22, 22, 22, 0.7);
    --defaultUserColor: #FFFFFF;
       --cardItem: #FFFFFF;
  --boxShadowColor: rgba(22, 22, 22, 0.05);
  --needHelpBtn: #FFFFFF;
  --iconLogOut: #FFFFFF;
  --placeholder:#161616;
  --userSvgFill: #FFFFFF;
  --bgPlus:#ECEDFD;
  --iconEyeColor:#161616;
  --btnColorHover: #b8bcfd;
  --iconColor: rgba(22, 22, 22, 0.5);
   --iconCardColor: rgba(22, 22, 22, 0.5);

  --iconPlusColor: #FFFFFF;


  --calendarWithoutColor: rgba(22, 22, 22, 0.30);

  --calendarSecondTextColor: rgba(22, 22, 22, 0.50);
  --calendarDisabled: rgba(22, 22, 22, 0.20);
  --calendarSelectDay: rgba(252, 252, 252, 1);
  --calendarBorderTop: rgba(22, 22, 22, 0.2);
  --activeBorder:#5255BC;

  --currentLinkBgColor: rgba(255, 255, 255, 0.50);
;

  --customButtonBackground: #FFFFFF;
  --customButtonColor: #161616;
  --plusButtonBackground: #5255BC;
  --addCardButtonBackground: #5255BC;
  --addCardButtonColor: #FFFFFF;
  --addPlusButtonBackground: #FFFFFF;
  --addPlusIconColor: #161616;
  --dividerColor: #E8E8E8;
  --actionsButton: #FFFFFF;
}
`;

export default GlobalStyle;
