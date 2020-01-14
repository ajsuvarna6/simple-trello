import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as theme from './configs/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        App
      </div>
    </ThemeProvider>
  );
}

export default App;
