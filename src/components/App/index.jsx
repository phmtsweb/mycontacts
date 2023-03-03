import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import { Container } from './styles';
import { Routes } from '../../Routes';
import { Header } from '../Header';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Container>
          <Header />
          <Routes />
        </Container>

      </ThemeProvider>
    </BrowserRouter>
  );
}

export { App };
