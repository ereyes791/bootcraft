import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    // Customize Material-UI with your theme
    // See more here: https://material-ui.com/customization/themes/
    primary:{
      main:'#f7f7f7',
      white:'#f4f4ec',
      sky:'#76e2f4',
      blue:'#615dec',
      cobaltBlue:'#301781'
    },
    typography: {
      fontFamily: [
        'Mulish',
      ].join(','),
    }
  }
})

export default theme
