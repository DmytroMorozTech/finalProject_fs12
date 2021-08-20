import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  invitations: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    marginBottom: theme.spacing(2),
    fontSize: theme.typography.h5.fontSize,
    color: theme.palette.grey[700]
  },

  button: {
    padding: 0
  },

  people: {
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(4)
  },

  mayKnow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: theme.typography.h5.fontSize,
    color: theme.palette.grey[700]
  },

  miniProfiles: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: theme.spacing(2)
  }
}))
