import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  blockNoInvitations: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(8),
    borderTop: theme.border.simple
  },

  image: {
    height: '128px',
    width: '128px'
  },

  defaultText: {
    fontWeight: theme.typography.fontWeightRegular,
    paddingTop: theme.spacing(4)
  }
}))
