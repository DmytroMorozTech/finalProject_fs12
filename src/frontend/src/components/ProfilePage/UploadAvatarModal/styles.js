import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  title: {
    marginLeft: theme.spacing(4),
    color: theme.palette.grey[700],
    fontSize: theme.typography.h3.fontSize,
    fontWeight: theme.typography.h4.fontWeight,
    marginBottom: theme.spacing(3)
  },
  pageImg: {
    backgroundAttachment: 'center',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '30%'
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
    top: theme.spacing(1),
    right: theme.spacing(1),
    cursor: 'pointer'
  },
  uploadAvatarWrapper: {
    minHeight: '250px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
}))
