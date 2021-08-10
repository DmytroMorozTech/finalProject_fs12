import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  likeMini: {
    color: theme.palette.common.white,
    fontSize: theme.typography.h6.fontSize,
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.shape.large,
    cursor: 'pointer',
    marginRight: theme.spacing(1)
  }
}))
