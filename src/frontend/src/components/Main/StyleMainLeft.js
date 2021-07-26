import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  mainLeft: {
    display: 'grid',
    gridArea: 'leftside'
  },
  profileCard: {
    textAlign: 'center',
    overflow: 'hidden',
    backgroundColor: '#fff',
    border: 'none',
    position: 'relative',
    borderRadius: '5px',
    marginBottom: '7.5px',
    boxShadow: '0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 19.5%)'
  },
  profileInfo: {
    wordWrap: 'break-word',
    wordBreak: 'break-word',
    padding: '12px 12px 16px',
    borderBottom: '0.5px solid rgba(0, 0, 0, 0.10)'
  },
  profileBg: {
    width: '72px',
    height: '72px',
    boxShadow: 'none',
    boxSizing: 'border-box',
    backgroundClip: 'content-box',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#fff',
    backgroundPosition: 'center',
    backgroundSize: '60%',
    border: '2px solid #fff',
    margin: '-38px auto 12px'
  },
  profileLink: {
    lineHeight: '1.5',
    fontSize: '16px',
    fontWeight: '600',
    color: 'rgba(0, 0, 0, 0.5)'
  }
}))