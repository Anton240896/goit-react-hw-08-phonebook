import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
background-image: radial-gradient(circle at -15.28% 73.76%, #c7ef82 0, #aee578 25%, #90d86c 50%, #70cb62 75%, #4ec15c 100%);  margin:0;
font-size: 9px;
}

code {
  font-family: 'Lato', monospace;
}
`;
