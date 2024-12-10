import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(119, 176, 244, 1)",
      dark: "rgba(54, 121, 201, 1)",
    },
    secondary: {
      main: "rgba(23,23,23,1)",
      dark: "rgba(30,30,30,1)",
    },
    background: {
      default: "rgba(23,23,23,1)",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(23,23,23,1)",
          color: "rgba(119, 176, 244, 1)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        text: {
          color: "rgba(119, 176, 244, 1)",
          backgroundColor: "rgba(0, 0, 0, 0)",
          ":hover": {
            backgroundColor: "rgba(119, 176, 244, 1)",
          },
          ":disabled": {
            opacity: 0.25,
          },
        },
        contained: {
          color: "rgba(23, 23, 23, 1)",
          backgroundColor: "rgba(119, 176, 244, 1)",
          ":hover": {
            backgroundColor: "rgba(119, 176, 244, 1)",
          },
          ":disabled": {
            opacity: 0.25,
          },
        },
        outlined: {
          color: "rgba(119, 176, 244, 1)",
          border: "1px solid rgba(119, 176, 244, 1)",
          ":hover": {
            backgroundColor: "rgba(0, 0, 0, 0)",
            border: "1px solid rgba(119, 176, 244, 1)",
          },
          ":disabled": {
            opacity: 0.25,
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "'Oswald', 'Rubik', sans-serif",
    button: {
      textTransform: "none", // disable uppercase text on buttons
    },
  },
});
export default theme;
