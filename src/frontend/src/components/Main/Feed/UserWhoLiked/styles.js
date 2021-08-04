import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  title: {
    marginLeft: '20px',
    color: 'gray'
  },
  avatar: {
    display: 'flex',
    flexDirection: 'column'
  },
  userAvatar: {
    width: '65px',
    borderRadius: '50%'
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'row'
  },
  buttonGroup: {
    paddingLeft: '10px',
    paddingTop: '10px',
    display: 'flex',
    flexDirection: 'column'
  },
  vl: {
    borderLeft: '1px solid gray',
    height: '30px',
    left: '50%',
    top: 0,
    marginLeft: '10px'
  }
}))