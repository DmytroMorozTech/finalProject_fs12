import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  container: {
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white,
    paddingTop: theme.spacing(3)
  },

  title: {
    fontSize: theme.typography.h3.fontSize,
    color: theme.palette.grey[900],
    paddingLeft: theme.spacing(5)
  },

  btn: {
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(1)
  },

  line: {
    width: '100%',
    height: '0.5px',
    border: '0',
    margin: '0 auto',
    backgroundColor: theme.palette.grey[300]
  }
}))
