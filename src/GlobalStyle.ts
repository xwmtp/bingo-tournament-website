import { createGlobalStyle } from "styled-components";

export const Colors = {
  mossGreen: "#2F4F4F",
  brightMossGreen: "#6a8f88",
  brighterMossGreen: "#9acbb9",
  darkGrey: "#3A4040",
  mediumGrey: "#454B4B",
  lightGray: "#535959",
  brightGrey: "#818888",
  boxShadowGrey: "#383d3c",
  racetimeDarkGrey: "#3A4040",
  racetimeLightGrey: "#a7babb",
  racetimeGreen: "#26DB9AFF",
  twitchPurple: "#9146FF",
  coral: "#a15f4f",
  brightCoral: "#ef8b73",
  jeansBlue: "#5483af",
} as const;

export type ColorName = keyof typeof Colors;

export const ScreenWidths = {
  smallPhone: 425,
  phone: 500,
  tablet: 768,
} as const;

export const Margins = {
  container: 1.4,
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
    @media (max-width: ${ScreenWidths.phone}px) {
      font-size: 55%;
    }
  }

  body {
    height: 100%;
    width: 100%;
    background-color: ${Colors.darkGrey};
    color: white;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
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

  p {
    line-height: 1.4rem;
  }

  .wideScreenOnly {
    @media (min-width: ${ScreenWidths.phone + 1}px) and (max-width: ${ScreenWidths.tablet}px) {
      display: none;
    }
    @media (max-width: ${ScreenWidths.smallPhone}px) {
      display: none;
    }
  }

`;
