import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  'palette': {
    // main color of Linkedin
    'primary': { 'main': '#0a66c2', 'light': '#0b76e0', 'dark': '#0a56a3', 'contrastText': '#fff' },
    // secondary color of Linkedin
    'secondary': {
      'main': '#757575', 'light': 'rgb(0.93, 0.93, 0.93, 0.36)', 'dark': 'rgb(0.13, 0.13, 0.13, 0.36)', 'contrastText': '#fff'
    }
  },
  'typography': {
    'button': {
      // changed font weight
      'fontWeight': 600,
      // not uppercase
      'textTransform': 'none'
    }
  }
})

export default theme