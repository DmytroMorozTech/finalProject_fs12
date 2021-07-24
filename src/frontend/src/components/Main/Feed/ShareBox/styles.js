import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  share: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #e0e0e0',
    borderRadius: '10px',
    width: '100%'
  },
  post: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: '10px',
    marginTop: '4px'
  },
  avatar: {
    marginTop: '5px',
    marginLeft: '20px'
  },
  postButton: {
    margin: '0 10px',
    flexGrow: '1',
    paddingLeft: '16px',
    border: '1px solid #e0e0e0',
    borderRadius: '35px',
    textAlign: 'left',
    height: '50px',
    backgroundColor: 'white',
    cursor: 'pointer',
    color: 'grey',
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
    cursor: 'pointer',
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
    cursor: 'pointer',
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
    cursor: 'pointer',
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
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.10)'
    }
  },
  names: {
    color: 'grey',
    fontSize: 14,
    fontWeight: 400,
    marginLeft: '10px',
    cursor: 'pointer'
  }
}))