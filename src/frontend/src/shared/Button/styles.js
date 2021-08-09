import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  btn: {
    margin: theme.spacing(1),
    borderRadius: theme.shape.large,
    boxShadow: 'none',
    fontSize: theme.typography.h5.fontSize,
    '&:hover': {
      boxShadow: 'none'
    },

    '&:disabled': {
      cursor: 'not-allowed',
      pointerEvents: 'auto'
    }
  }
}))
