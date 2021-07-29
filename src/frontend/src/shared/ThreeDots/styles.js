import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  dots: {
    cursor: 'pointer',
    width: '40px',
    height: '40px',
    '& > .MuiSvgIcon-root': {
      margin: '8px'
    },
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.10)',
      borderRadius: '50%'
    }
  }
}))