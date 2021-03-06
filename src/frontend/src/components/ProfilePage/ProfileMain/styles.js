import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  root: {
    position: 'relative',
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    padding: theme.spacing(4),
    backgroundSize: '100% 160px',
    backgroundRepeat: 'no-repeat',
    zIndex: 0
  },

  header: {
    display: 'flex',
    justifyContent: 'flex-end'
  },

  photoIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: theme.typography.icons.extraSmall.fontSize,
    width: theme.spacing(6),
    height: theme.spacing(6),
    backgroundColor: theme.palette.common.white,
    borderRadius: '50%',
    cursor: 'pointer'
  },

  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },

  avatar: {
    display: 'flex',
    marginBottom: theme.spacing(3)
  },

  bigAvatar: {
    width: theme.avatar.profileAvatar,
    border: '4px solid white',
    borderRadius: '50%'
  },

  cursorPointer: {
    cursor: 'pointer'
  },

  profileBackgroundImg: {
    width: '100%',
    position: 'absolute',
    maxHeight: '180px',
    top: 0,
    left: 0,
    zIndex: -10,
    borderTopRightRadius: theme.shape.medium,
    borderTopLeftRadius: theme.shape.medium
  },

  editName: {
    cursor: 'pointer',
    color: theme.palette.grey[700],
    width: theme.spacing(7),
    height: theme.spacing(7),
    borderRadius: '50%',
    padding: theme.spacing(1.3),
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.1)'
    }
  },

  info: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: theme.spacing(1)
  },

  leftPanel: {
    minWidth: '68%'
  },

  rightPanel: {
    display: 'flex',
    alignItems: 'center'
  },

  businessIcon: {
    backgroundColor: theme.palette.grey[300],
    marginRight: theme.spacing(1)
  },

  bold: {
    fontWeight: theme.typography.fontWeightBold
  },

  box: {
    width: '50%',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.grey[200],
    borderRadius: theme.shape.small,
    marginTop: theme.spacing(2),
    padding: theme.spacing(2)
  },

  column: {
    display: 'flex',
    flexDirection: 'column'
  },

  createIcon: {
    cursor: 'pointer',
    color: theme.palette.grey[700],
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  hidden: {
    visibility: 'hidden'
  }
}))
