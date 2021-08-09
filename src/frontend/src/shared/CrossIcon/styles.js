import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  cross: {
    display: 'flex',
    width: theme.spacing(6),
    color: 'rgba(0,0,0,.5)',
    fontSize: theme.typography.icons.large.fontSize,
    cursor: 'pointer'
  }
}))
