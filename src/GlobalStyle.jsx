import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

const GlobalStyle = createGlobalStyle`

:root {
  --boxShadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
}

  body {
  margin: 0;
  ${
    '' /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  }

  font-family: "Poppins", sans-serif;
  ${'' /* background-color: var(--sidebarBgColor); */}
    ${
      '' /* background-image: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    #bedbb0 92.19%
  );
   background-repeat: no-repeat; */
    }
  transition: 0.3s ease;


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
  --headerBgColor: #1f1f1f;
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
 
}

body[data-theme="light"] {
  --greenGreenBlueColor: #bedbb0;
  --sidebarBgColor: #f6f6f7;
  --helpBgColor: #fcfcfc;
  --headerBgColor: #fcfcfc;
  --boardBgColor: #fcfcfc;
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
  --addAnotherColumnIconBgColor: #5255bc;
  --addAvatarIconBgColor: #ecedfd;

  --primaryTextColor: #161616;
  --secondaryTextColor: rgba(22, 22, 22, 0.7);
  --popupTextColor: #161616;
  --themeTitleTextColor: rgba(22, 22, 22, 0.8);

  --passiveBorderColor: rgba(82, 85, 188, 0.4);
  --modalGorizontalBorderColor: rgba(22, 22, 22, 0.1);
  --modalBorderColor: transparent;
}
`;

export default GlobalStyle;
