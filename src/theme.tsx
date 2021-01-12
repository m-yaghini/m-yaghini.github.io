import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';


// A custom theme for this app
let theme = createMuiTheme({
  typography: {
    fontSize: 14,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(',')
  },
  palette: {
    action: {
      hover: "transparent"
    },
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

theme = responsiveFontSizes(theme, { factor: 3 });
export default theme;
