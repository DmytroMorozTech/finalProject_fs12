import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  mainRight: {
    gridArea: 'rightside'
  },
  followCard: {
    textAlign: 'center',
    overflow: 'hidden',
    position: 'relative',
    border: 'none',
    backgroundColor: 'white',
    padding: '12px',
    marginBottom: '7.6px',
    borderRadius: '4.5px',
    boxShadow: '0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%)'
  },
  followCardTitle: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '16px',
    width: '100%',
    color: 'rgba(0, 0, 0, 0.5)'
  },
  feedList: {
    marginTop: '16px'
  },
  feedListItems: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    fontSize: '14px',
    margin: '12px 0'
  },
  feedListItem: {
    display: 'flex',
    flexDirection: 'column'
  },
  feedListItemBtn: {
    backgroundColor: 'transparent',
    outline: 'none',
    textAlign: 'center',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px',
    boxSizing: 'border-box',
    boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.5)',
    color: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '15px',
    maxHeight: '31.5px',
    maxWidth: '479.6px',
    fontWeight: '550'
  },
  recommendations: {
    display: 'flex',
    color: '#0a66c2',
    alignItems: 'center',
    fontSize: '13.5px'
  },
  bannerPart: {
    img: {
      width: '100%',
      height: '100%'
    }
  },
  feedListPic: {
    backgroundImage: 'url("")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    marginRight: '7.5px',
    width: '47.5px',
    height: '47.5px'
  }
}))