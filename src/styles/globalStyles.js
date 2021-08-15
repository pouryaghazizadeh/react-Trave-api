import { createGlobalStyle } from "styled-components";

export const globalStyles = createGlobalStyle`
body {
background: red

}
`;

export const lightTheme = {
  body: "#fff",
  text: "#121212",
};

export const darkTheme = {
  body: "#121212",
  text: "#fff",
};
