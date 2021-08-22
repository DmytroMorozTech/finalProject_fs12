import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  connectionsMain: {
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white
  },

  title: {
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    color: theme.palette.grey[700],
    fontWeight: theme.typography.fontWeightRegular
  },

  line: {
    width: '100%',
    height: '0.5px',
    border: '0',
    margin: '0 auto',
    backgroundColor: theme.palette.grey[300]
  }
}))
