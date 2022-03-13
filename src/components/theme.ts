import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      // main: "#333842",
      // light: '#dddddd',
      // dark: '#131415',
      // contrastText: "#ffa522"
      main: "#1e1f26",
      light: '#5a5f73',
      dark: '#131417',
      contrastText: "#ffa522"
    }, 
    secondary: {
      main: '#282c34',
      dark: "black",
      light: "#282c34"
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: "#131415",
      secondary: "#aaaaaa",
      disabled: "#666666"
    },
    info: {
      main: '#aaa',
      dark: "1e1f26",
      light: "#1e1f26"
    }
  },
  typography: {
    fontSize: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
          '*': {
            scrollbarWidth: 'thin',
          },
          '*::-webkit-scrollbar': {
            width: '4px',
            height: '4px',
          }
        }
    }
  }
});

export default theme;