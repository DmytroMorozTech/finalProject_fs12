import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  root: {
    width: '264px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderTopLeftRadius: '150%'
  },

  menuItem: {
    width: '100%',
    padding: theme.spacing(2)
  },

  avatarWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  avatar: {
    width: theme.avatar.large,
    borderRadius: '50%',
    display: 'flex',
    alignSelf: 'flex-start'
  },

  profileButton: {
    borderRadius: '100px',
    height: '1.5rem',
    fontSize: theme.typography.button.fontSize,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    margin: theme.spacing(1)
  },

  userDataWrapper: {
    width: '100%',
    marginLeft: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flex-start'
  },

  userName: {
    whiteSpace: 'normal',
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.h5.fontWeight
  },

  userProfession: {
    width: '100%',
    whiteSpace: 'normal',
    fontSize: theme.typography.h6.fontSize
  }
}))
