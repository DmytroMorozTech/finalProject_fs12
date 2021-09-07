import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  invitationManager: {
    marginTop: '75px'
  },

  main: {
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white,
    overflow: 'hidden'
  }
}))
