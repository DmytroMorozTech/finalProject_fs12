import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({

  logo: {
    display: 'flex',
    alignItems: 'flex-end',
    color: '#0a66c2',
    paddingTop: '3px',
    '& > span': {
      fontSize: 32,
      fontWeight: 700,
      paddingBottom: '1px'
    },
    '& > .MuiSvgIcon-root': {
      fontSize: 45
    }
  }
}))
