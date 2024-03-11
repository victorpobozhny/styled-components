import { createGlobalStyle } from "styled-components";
import {theme} from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


body {
  background-color: ${theme.colors.primaryBg};
  margin: 0;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${theme.colors.font.main};
  line-height: 1.2;
}
a {
  text-decoration: none;
  color: ${theme.colors.font.main}
}
a:hover {
  color: ${theme.colors.font.secondary};
}
ul {
  list-style: none;
}
button {
  font-family: Montserrat;
  background-color: unset;
  border: none;
}
`