import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Sora', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }

  input, textarea, select {
    font-family: 'Sora', sans-serif;
    font-size: 16px;
  }
`;
