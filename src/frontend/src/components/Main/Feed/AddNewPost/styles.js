import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  title: {
    marginLeft: theme.spacing(4),
    color: theme.palette.grey[700],
    fontSize: theme.typography.h3.fontSize,
    fontWeight: theme.typography.h4.fontWeight,
    marginBottom: theme.spacing(3)
  },
  avatar: {
    display: 'flex',
    flexDirection: 'column'
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'row'
  },
  userAvatar: {
    width: theme.avatar.medium,
    borderRadius: '50%'
  },
  buttonGroup: {
    paddingLeft: theme.spacing(2)
  },
  shareComment: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: theme.shape.large,
    cursor: 'pointer',
    color: theme.palette.grey[700],
    backgroundColor: theme.palette.common.white,
    border: theme.border.boldLight,
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.05)',
      border: theme.border.boldDark
    }
  },
  icons: {
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
  line: {
    borderLeft: theme.border.simple,
    margin: theme.spacing(1)
  }
}))