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
    justifyContent: 'flex-end'
  },
  photoIcon: {
    paddingTop: theme.spacing(3),
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  bigAvatar: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    cursor: 'pointer'
  },
  editName: {
    display: 'flex',
    justifyContent: 'flex-end'
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
  name: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  rightPanel: {
    marginRight: theme.spacing(10)
  },
  schoolName: {
    fontWeight: theme.typography.fontWeightBold
  },
  info: {
    display: 'flex',
    flexDirection: 'row'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  number: {
    marginRight: theme.spacing(1)
  },
  box: {
    width: '50%',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.grey[200],
    borderRadius: theme.shape.small,
    marginTop: theme.spacing(2),
    padding: theme.spacing(1)
    
  },
  linkText: {
    display: 'flex',
    flexDirection: 'column'
  },
  firstLine: {
    color: theme.palette.grey[700],
    fontWeight: theme.typography.fontWeightBold
  },
  secondLine: {
    color: theme.palette.grey[700]
  }
}))
