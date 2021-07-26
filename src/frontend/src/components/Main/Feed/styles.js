import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({

  feed: {
    marginTop: '50px',
    paddingLeft: '50px',
    maxWidth: '40%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  text: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))