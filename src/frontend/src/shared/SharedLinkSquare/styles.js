import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  link: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: theme.typography.h5.fontSize,
    paddingBottom: theme.spacing(1),
    padding: theme.spacing(2),
    textDecoration: 'none',
    color: theme.palette.grey[700],
    '&:hover': {
      borderRadius: theme.shape.small,
      backgroundColor: theme.palette.grey[200]
    }
  }
}))
