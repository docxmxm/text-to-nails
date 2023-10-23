import Feed from './components/Feed';
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Feed />
        {/* <Rightbar /> */}
      </Box>
    </ThemeProvider>
  );
}

export default App;
