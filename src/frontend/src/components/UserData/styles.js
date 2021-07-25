import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(() => ({

  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: '40%',
    borderRadius: '50%'
  },
  profileButton: {
    width: '60%',
    marginTop: 15
  },
  userDataWrapper: {
    marginLeft: 15
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  userProfession: {
    width: '50%',
    fontSize: 12,
    marginBottom: 30
  }
}))