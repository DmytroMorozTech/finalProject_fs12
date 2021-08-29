import { unstable_createMuiStrictModeTheme as createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  breakpoints: {
    values: {xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920}
  },
  palette: {
    primary: { main: '#0a66c2', light: '#0b76e0', dark: '#0a56a3', contrastText: '#fff' },
    secondary: {
      main: '#757575', light: 'rgb(0.93, 0.93, 0.93, 0.36)', dark: 'rgb(0.13, 0.13, 0.13, 0.36)', contrastText: '#fff'
    },
    background: {
      paper: '#ffffff',
      default: '#f1f1f1'
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161'
    },
    success: {
      main: '#057642', light: '#08a45d', dark: '#04532f', contrastText: '#fff'
    },
    error: {
      main: '#cc1016'
    }
  },
  spacing: 5,
  typography: {
    body1: {
      fontSize: '0.900rem',
      lineHeight: 1.43,
      color: '#333333'
    },
    body2: {
      fontSize: '0.700rem'
    },
    header: {
      fontWeight: 400
    },
    h3: {
      fontSize: '1.2rem',
      fontWeight: 700,
      lineHeight: 1.5
    },
    sh3: {
      fontSize: '1.1rem'
    },
    h4: {
      fontSize: '0.900rem',
      fontWeight: 500,
      lineHeight: 1,
      letterSpacing: '0.02em'
    },
    h5: {
      fontSize: '0.900rem',
      fontWeight: 600,
      letterSpacing: '0.02em',
      lineHeight: 1.3,
      color: '#616161'
    },
    h6: {
      fontSize: '0.750rem',
      fontWeight: 500,
      letterSpacing: '0.02em',
      lineHeight: 1.3,
      color: '#9e9e9e'
    },
    additions: {
      lineHeight: 0.5
    },
    icons: {
      smallest: {
        fontSize: '0.200rem'
      },
      extraSmall: {
        fontSize: '0.900rem'
      },
      small: {
        fontSize: '1.1rem'
      },
      medium: {
        fontSize: '1.3rem'
      },
      large: {
        fontSize: '1.9rem'
      },
      header: {
        fontSize: '2.1rem'
      },
      extraLarge: {
        fontSize: '3rem'
      }
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      fontSize: '0.900rem'
    }
  },
  avatar: {
    extraSmall: '45px',
    small: '50px',
    medium: '65px',
    large: '72px',
    extraLarge: '100px'
  },
  border: {
    simple: '1px solid #e0e0e0',
    normal: '1px solid #bdbdbd',
    dark: '1px solid #757575',
    boldLight: '2px solid #bdbdbd',
    boldDark: '2px solid #757575',
    comment: '0 10px 10px 10px'
  },
  shape: {
    extraSmall: 3,
    small: 5,
    medium: 10,
    large: 35,
    up: '10px 10px 0 0',
    down: '0 0 10px 10px'
  }
})

export default theme
