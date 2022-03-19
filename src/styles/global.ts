import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #E52E4D;
    --blue: #5429CC;
    --green: #33CC95;
    --shape: #FFFFFF;
    --text-body: #969CB3;
    --background: #F0F2F5;
    --blue-light: #6933FF;
    --text-title: #363F5F;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, text-area, button {
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
  }

  h1, h2, h3, h4, h5,h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay{
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.5);
  }

  .react-modal-content{
    width: 100%;
    padding: 3rem;
    max-width: 576px;
    position: relative;
    border-radius: 0.25rem;
    background: var(--background);
  }

  .react-modal-close{
    border: 0;
    top: 1.5rem;
    right: 1.5rem;
    position: absolute;
    background: transparent;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }

  }

`;
