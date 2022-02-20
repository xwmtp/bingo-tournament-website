import { createGlobalStyle } from "styled-components";

export const Colors = {
  mossGreen: "#2F4F4F",
  brightMossGreen: "#6a8f88",
  leafGreen: "#297948",
  darkGrey: "#3A4040",
  mediumGrey: "#454B4B",
  lightGray: "#535959",
  boxShadowGrey: "#383d3c",
  twitchPurple: "#9146FF",
} as const;

export type ColorName = keyof typeof Colors;

export const ScreenWidths = {
  phone: 480,
  tablet: 768,
} as const;

export const Margins = {
  container: 24,
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
    overflow-y: scroll;
    font-size: 100%;
    @media (max-width: ${ScreenWidths["phone"]}px) {
      font-size: 55%;
    }
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

  input {
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    border: inherit;
    box-shadow: none;
    ::placeholder {
      color: ${Colors.lightGray};
      opacity: 1;
    }
  }
  
  h4 {
    font-weight: normal;
    font-size: 1.2rem;
  }

`;
