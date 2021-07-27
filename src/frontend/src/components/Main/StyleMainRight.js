import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  container: {
    display: 'grid',
    gridArea: 'rightside'
  },
  followCard: {
    textAlign: 'center',
    overflow: 'hidden',
    backgroundColor: 'white',
    position: 'relative',
    border: 'none',
    borderRadius: '4.5px',
    padding: '11.5px',
    boxShadow: '0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%)'
  },
  followCardTitle: {
    display: 'inline-flex',
    fontSize: '15.5px',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    color: 'rgba(0, 0, 0, 0.5)'
  },
  followCardNewsList: {
    marginTop: '16px'
  },
  newsListItems: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    margin: '12px 0'
  },
  newsListItem: {
    display: 'flex',
    flexDirection: 'column'
  },
  btnNewsListItem: {
    backgroundColor: 'transparent',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    outline: 'none',
    textAlign: 'center',
    padding: '16px',
    borderRadius: '14px',
    maxWidth: '475px',
    maxHeight: '31.5px',
    boxSizing: 'border-box',
    fontWeight: '550'
  },
  text: {
    fontSize: '11px'
  },
  recommendationsText: {
    display: 'flex',
    color: '#0a66c2',
    fontSize: '14px',
    alignItems: 'center'
  }
}))