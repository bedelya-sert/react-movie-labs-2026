import {createTheme} from "@mui/material/styles";
// Took code from https://mui.com/material-ui/customization/palette/,  https://mui.com/material-ui/customization/typography/
// Used https://zenoo.github.io/mui-theme-creator/ to help decide a design
const theme = createTheme({
    palette: {
     mode: 'light',
        primary: {
            main: '#020e58',
            sub: '#ecbe62',
            light: '#203366',
            contrastText: '#ffe272',
            background: '#a4a593',
            },
        secondary: {
            main: '#9322d9',
            },
        background: {
            default: "#d6d4ca",
  },
  },
  typography: {
    fontFamily: '"Source Sans 3", "Arial", sans-serif',
    bigTitle: {
        fontFamily: '"Undeveloped", sans-serif',
        fontSize: "3rem",
        fontWeight: 100,
        letterSpacing: "0.02em",
        lineHeight: 1
    },
    h4: {fontWeight: 700},
    h5: {fontWeight: 600},
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiCssBaseline: {
        styleOverrides: `
        @font-face {
        font-family: "Undeveloped";
        src: url("/fonts/Undeveloped.ttf");
        font-display:swap;
        }`
    },
    MuiTypography:{
     defaultProps: {
        variantMapping:{
            bigTitle: "h1",
        }
     }
    },
    MuiButton:{
        styleOverrides: {
            root: {textTransform: "none"},
        },
    },
    MuiCard: {
        styleOverrides: {
            root: {boxShadow: "0 2px 8px rgba(0, 0, 0, 0.5)"},
        }
    }
  }
})

export default theme;