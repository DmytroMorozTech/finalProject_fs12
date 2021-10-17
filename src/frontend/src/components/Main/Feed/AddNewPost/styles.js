import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  title: {
    marginLeft: theme.spacing(4),
    color: theme.palette.grey[700],
    fontSize: theme.typography.h3.fontSize,
    fontWeight: theme.typography.h4.fontWeight,
    marginBottom: theme.spacing(3)
  },

  horizontalLine: {
    height: '1px',
    border: '0',
    margin: '0',
    backgroundColor: theme.palette.grey[100]
  },

  userInfo: {
    display: 'flex',
    flexDirection: 'row'
  },

  userAvatar: {
    width: theme.avatar.small,
    borderRadius: '50%'
  },

  buttonGroup: {
    paddingLeft: theme.spacing(2)
  },

  sharePost: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: theme.shape.large,
    cursor: 'pointer',
    color: theme.palette.grey[700],
    backgroundColor: theme.palette.common.white,
    border: theme.border.boldLight,
    paddingRight: theme.spacing(3),
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.05)',
      border: theme.border.boldDark
    }
  },

  showedValidateMessage: {
    display: 'flex',
    justifyContent: 'space-between',
    color: theme.palette.error.main,
    alignItems: 'center',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(2)
  },

  hidden: {
    display: 'none'
  },

  validateMessage: {
    display: 'flex',
    fontSize: theme.typography.icons.small.fontSize,
    alignItems: 'center'
  },

  validateInfo: {
    display: 'flex',
    margin: theme.spacing(1),
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightBold
  },

  worldIcon: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingTop: theme.spacing(1),
    fontSize: theme.typography.icons.medium.fontSize,
    color: theme.palette.grey[800]
  },

  editor: {
    marginTop: theme.spacing(4)
  },

  shareButtons: {
    display: 'flex',
    flexDirection: 'row',
    color: theme.palette.grey[700],
    marginLeft: theme.spacing(2)
  },

  shareButton: {
    padding: theme.spacing(2),
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.05)',
      borderRadius: '50%'
    }
  },

  verticalLine: {
    borderLeft: theme.border.simple,
    margin: theme.spacing(1)
  },

  previewImgWrapper: {
    maxWidth: '50%',
    maxHeight: '50%',
    position: 'relative'
  },

  previewImg: {
    width: '100%',
    borderRadius: theme.shape.medium
  },

  icons: {
    display: 'flex',
    cursor: 'pointer'
  },

  cross: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: theme.spacing(7),
    height: theme.spacing(7),
    fontSize: theme.typography.icons.medium.fontSize,
    color: theme.palette.common.white,
    backgroundColor: 'rgba(0,0,0,.5)',
    padding: theme.spacing(1),
    borderRadius: '50%',
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
    cursor: 'pointer'
  },

  crossForVideoNotification: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: theme.spacing(7),
    height: theme.spacing(7),
    fontSize: theme.typography.icons.medium.fontSize,
    color: theme.palette.common.white,
    backgroundColor: 'rgba(0,0,0,.5)',
    padding: theme.spacing(1),
    borderRadius: '50%',
    position: 'relative',
    cursor: 'pointer',
    marginLeft: theme.spacing(2)
  },

  removed: {
    display: 'none'
  },

  preloader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: '35vh'
  },

  videoWasChosenNotification: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative'
  },

  nameVideo: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  }

}))
