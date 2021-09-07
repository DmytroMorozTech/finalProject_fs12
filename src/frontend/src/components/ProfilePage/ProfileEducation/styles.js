import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  root: {
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white,
    marginBottom: theme.spacing(4),
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
    cursor: 'pointer',
    color: theme.palette.grey[700],
    width: theme.spacing(7),
    height: theme.spacing(7),
    borderRadius: '50%',
    padding: theme.spacing(1.3),
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.1)'
    }
  },
  dash: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  schoolName: {
    fontWeight: theme.typography.fontWeightBold
  },
  hidden: {
    visibility: 'hidden'
  }
}))
