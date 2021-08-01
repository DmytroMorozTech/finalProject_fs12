import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(() => ({

  root: {
    width: '20vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderTopLeftRadius: '150%'
  },
  menuItem: {
    width: '20vw'
  },
  avatarWrapper: {
    width: '10vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: '5vw',
    borderRadius: '50%'
  },
  profileButton: {
    borderRadius: '100px',
    width: '19vw',
    height: '1.5rem',
    fontSize: '0.9vw',
    margin: '1vh auto'

  },
  userDataWrapper: {
    marginLeft: '1vw'
  },
  userName: {
    fontSize: '1vw',
    fontWeight: 'bold'
  },
  userProfession: {
    width: '5vw',
    fontSize: '0.8vw',
    marginBottom: '2vh'
  },
  logoutLink: {
    width: '20vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'grey',
    fontSize: '0.9vw'
  }
}))