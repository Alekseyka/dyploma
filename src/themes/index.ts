'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976D2',
    },
    info: {
      main: '#2196F3',
    },
    secondary: {
      main: '#FFC107',
      contrastText: "#fff"
    },
    error: {
      main: '#f44336'
    },
    text: {
      primary: '#212121'
    }
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  shape: {
    borderRadius: 4,
  },
});

export default theme;