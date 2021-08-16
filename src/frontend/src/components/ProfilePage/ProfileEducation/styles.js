import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white,
    marginBottom: theme.spacing(3),
    padding: theme.spacing(4)
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(3)
  },
  btnCreate: {
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  createIcon: {
    color: theme.palette.grey[700],
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.05)',
      borderRadius: theme.shape.large
    }
  },
  dash: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  schoolName: {
    fontWeight: theme.typography.fontWeightBold
  }
}))
