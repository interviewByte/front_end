import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import ContactCard from './components/ContactCard';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ContactCard/>
    </ThemeProvider>
  );
};

export default App;
