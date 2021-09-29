import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  share: {
    borderRadius: theme.shape.medium,
    width: '100%',
    backgroundColor: theme.palette.common.white,
    border: theme.border.simple,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    padding: theme.spacing(2)
  },

  link: {
    display: 'flex'
  },

  smallAvatar: {
    width: theme.avatar.small,
    marginLeft: theme.spacing(2),
    borderRadius: '50%'
  },

  postButton: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    fontWeight: theme.typography.h5.fontWeight,
    fontSize: theme.typography.h4.fontSize,
    flexGrow: '1',
    paddingLeft: theme.spacing(3),
    border: theme.border.normal,
    borderRadius: theme.shape.large,
    textAlign: 'left',
    padding: theme.spacing(3),
    backgroundColor: theme.palette.common.white,
    cursor: 'pointer',
    color: theme.palette.grey[500],
    letterSpacing: theme.typography.h5.letterSpacing,
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.05)'
    }
  }
}))
