import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  /* iframe styling */
  iframeWrapper: {
    width: '100%',
    display: 'block',
    margin: '0 auto'
  },

  iframeContainer: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    paddingTop: '56.25%' /* 16:9 Aspect Ratio */
  },

  responsiveIframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
    border: 'none'
  }
}))
