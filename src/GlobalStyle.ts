import { createGlobalStyle } from "styled-components";

export const Colors: { [key: string]: string } = {
  mossGreen: "#2F4F4F",
  darkGrey: "#3b4141",
  mediumGray: "#464c4c",
  lightGray: "#535959",
  twitchPurple: "#9146FF",
};

export type ColorNames = keyof typeof Colors;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
    overflow-y: scroll;
  }

  body {
    height: 100%;
    width: 100%;
    background-color: ${Colors.darkGrey};
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  #root {
    display: flex;
    flex-flow: column;
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  button {
    color: inherit;
    font-family: inherit;
    font-size: inherit;
  }

`;
