import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  networkMain: {
    display: 'flex',
    flexDirection: 'column'
  },

  block: {
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white,
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2)
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: theme.spacing(2),
    fontSize: theme.typography.h5.fontSize,
    color: theme.palette.grey[700],
    '& > div': {
      paddingTop: theme.spacing(1)
    }
  },

  miniProfiles: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingLeft: theme.spacing(1)
  }
}))
