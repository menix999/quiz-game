import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
      /* font-size: 62.5%; */
      height: -webkit-fill-available;
      scroll-behavior: smooth;
      overflow-y: hidden;
      overflow-x: hidden;
    }

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    body {
      font-style: normal;
      overflow: hidden;
      min-height: 100vh;
      min-height: -webkit-fill-available;
      font-family: "Jura";
      
      ::-webkit-scrollbar-track {
        border-radius: 10px;
      }

      ::-webkit-scrollbar {
        width: 12px;
        height: 12px;
        border-radius: 10px;
      }
      
      ::-webkit-scrollbar-thumb {
        background: lightgrey;
        border-radius: 10px;
      }
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    .ReactCollapse--collapse {
      transition: height 300ms;
    }
  `;
