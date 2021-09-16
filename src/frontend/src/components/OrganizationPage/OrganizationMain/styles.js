import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  organizationMain: {
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

  organizationAvatar: {
    width: theme.avatar.largeAvatar,
    cursor: 'pointer',
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(12)
  },

  organizationBackgroundImg: {
    width: '100%',
    position: 'absolute',
    maxHeight: '134px',
    top: 0,
    left: 0,
    zIndex: -10,
    borderTopRightRadius: theme.shape.medium,
    borderTopLeftRadius: theme.shape.medium
  },

  info: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1)
  },

  connection: {
    '&:hover': {
      color: theme.palette.primary.main
    }
  },

  buttons: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  about: {
    zIndex: '-1'
  },

  whiteSpace: {
    marginTop: theme.spacing(2),
    whiteSpace: 'pre-line'
  }
}))
