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
    backgroundColor: theme.palette.grey[100]
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

  verticalLine: {
    borderLeft: theme.border.simple,
    margin: theme.spacing(1)
  }
}))
