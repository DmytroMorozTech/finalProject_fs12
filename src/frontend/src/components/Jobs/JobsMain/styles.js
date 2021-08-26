import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  container: {
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white,
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
  },

  regular: {
    fontWeight: theme.typography.fontWeightRegular
  },

  seeMore: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2)
  },

  button: {
    fontSize: theme.typography.h6.fontSize,
    padding: theme.spacing(1)
  }
}))
