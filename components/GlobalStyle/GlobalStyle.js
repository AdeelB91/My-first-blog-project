import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    background: rgb(245,244,153);
    background: linear-gradient(90deg, rgba(245,244,153,1) 0%, rgba(100,241,114,1) 70%, rgba(2,213,152,1) 100%);  }

  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;
