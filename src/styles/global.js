import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    font-size: 16px;
    background: #FFF;

    @media (max-width: 1450px) {
      font-size: 12px
    }

    @media (max-width: 1100px) {
      font-size: 10px
    }
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #FFF;
    font-family: Helvetica, sans-serif;
    font-size: 25px;
    color: #011721;
  }

  button {
    border:none;
    background: transparent;
  }
`
