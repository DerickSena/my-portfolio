import { createTheme, responsiveFontSizes } from "@mui/material"

let theme = createTheme({
    palette: {
      primary: {
        main: '#232323',
      },
      secondary: {
        main: '#4f8e3e',
      },
    },
    typography:{
        fontFamily: "Apple Color Emoji"
    }
  });
  theme = responsiveFontSizes(theme);

  export default theme;