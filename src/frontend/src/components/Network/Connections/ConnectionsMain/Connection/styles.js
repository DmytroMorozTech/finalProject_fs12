import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  connection: {
    display: 'flex',
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    justifyContent: 'space-between'
  },

  removed: {
    display: 'none'
  },

  flex: {
    display: 'flex'
  },

  avatar: {
    width: theme.avatar.large,
    borderRadius: '50%'
  },

  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: theme.spacing(2)
  },

  link: {
    textDecoration: 'none',
    fontSize: theme.typography.sh3.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.grey[700],
    '&:hover': {
      textDecoration: 'underline',
      textDecorationThickness: '2px',
      textDecorationColor: theme.palette.grey[700]
    }
  },

  buttons: {
    display: 'flex',
    alignItems: 'center'
  },

  button: {
    marginRight: theme.spacing(2)
  },

  line: {
    width: 'calc(100% - 100px)',
    height: '0.5px',
    border: '0',
    margin: '0',
    marginLeft: '100px',
    backgroundColor: theme.palette.grey[300]
  },

  linkButton: {
    textDecoration: 'none'
  }
}))
