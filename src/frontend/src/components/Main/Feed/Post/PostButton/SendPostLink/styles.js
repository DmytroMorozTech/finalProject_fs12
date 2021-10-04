import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: theme.spacing(5),
    color: theme.palette.grey[700],
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    width: '160px'
  },

  subtitle: {
    display: 'flex',
    fontWeight: theme.typography.fontWeightRegular
  },

  line: {
    width: '100%',
    height: '0.5px',
    border: '0',
    margin: '0 auto',
    backgroundColor: theme.palette.grey[300]
  },

  inputs: {
    position: 'relative'
  },

  inputBase: {
    paddingLeft: theme.spacing(5),
    padding: theme.spacing(1)
  },

  inputSearch: {
    display: 'flex',
    alignItems: 'center',
    height: '55px'
  },

  foundedUsersDropdown: {
    width: '100%',
    zIndex: 1,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    top: 55,
    left: 0
  },

  user: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(5),
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)'
    }
  },

  smallAvatar: {
    width: theme.avatar.small,
    borderRadius: '50%',
    marginRight: theme.spacing(2)
  },

  button: {
    display: 'flex',
    flexDirection: 'row-reverse',
    padding: theme.spacing(1),
    paddingRight: theme.spacing(4)
  }
}))
