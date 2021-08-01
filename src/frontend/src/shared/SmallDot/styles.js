import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({

  smallDot: {
    display: 'flex',
    justifyContent: 'center',
    margin: '5px',
    '& > .MuiSvgIcon-root': {
      fontSize: 3
    }
  }
}))
