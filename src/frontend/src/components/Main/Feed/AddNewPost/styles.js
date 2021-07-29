import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  title: {
    width: '100vh',
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
    paddingLeft: '10px'
  },
  shareComment: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '5px',
    fontSize: 10,
    borderRadius: '15px',
    cursor: 'pointer'
  },
  worldIcon: {
    '& > .MuiSvgIcon-root': {
      fontSize: 15,
      color: 'grey'
    }
  },
  arrow: {
    '& > .MuiSvgIcon-root': {
      fontSize: 15,
      color: 'grey'
    }
  },
  editor: {
    height: 150
  },
  shareButtons: {
    display: 'flex',
    flexDirection: 'row',
    color: 'gray',
    cursor: 'pointer',
    marginRight: ''
  },
  photo: {
    marginRight: '10px'
  },
  video: {
    marginRight: '10px'
  },
  docs: {
    marginRight: '50px'
  },
  vl: {
    borderLeft: '1px solid gray',
    height: '30px',
    left: '50%',
    top: 0,
    marginLeft: '10px'
  },
  tooltip: {
    backgroundColor: 'white',
    color: 'grey'
  }
}))