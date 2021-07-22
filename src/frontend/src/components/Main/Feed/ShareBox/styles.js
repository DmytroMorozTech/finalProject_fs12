import {makeStyles} from '@material-ui/core/styles'
export default makeStyles(() => ({
  share: {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    border: '1px solid rgba(0, 0, 0, 0.5)',
    borderRadius: '10px',
    width: '45%'
  },
  post: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: '8px',
    color: 'gray',
    '& > .MuiSvgIcon-root': {
      fontSize: 40
    }
  },
  postButton: {
    margin: '4px 4px',
    flexGrow: '1',
    paddingLeft: '16px',
    border: '1px solid rgba(0, 0, 0, 0.15)',
    borderRadius: '35px',
    textAlign: 'left',
    height: '30px',
    backgroundColor: 'white',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.10)'
    }
  },
  shareButtons: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  photo: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    color: '#0a66c2',
    transition: 'all 0.35s ease',
    padding: '10px',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.10)'
    }
  },
  video: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    color: '#3ACB0A',
    transition: 'all 0.35s ease',
    padding: '10px',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.10)'
    }
  },
  event: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    color: '#F8A558',
    transition: 'all 0.35s ease',
    padding: '10px',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.10)'
    }
  },
  article: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    color: '#E6699D',
    transition: 'all 0.35s ease',
    padding: '10px',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.10)'
    }
  },
  names: {
    color: 'gray',
    fontSize: 12,
    fontWeight: 400,
    marginLeft: '10px'
  }
}))