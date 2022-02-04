import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --moss-green: darkslategrey;
    --dark-grey: #3b4141;
    --medium-gray: #464c4c;
    --light-gray: #535959;
    --twitch-purple: #9146FF
  }

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
    background-color: var(--dark-grey);
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
