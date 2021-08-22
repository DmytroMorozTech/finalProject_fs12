import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  share: {
    display: 'flex',
    flexDirection: 'column',
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    width: '100%',
    backgroundColor: theme.palette.common.white
  },
  post: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2)
  },
  mediumAvatar: {
    width: theme.avatar.small,
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(4)
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
    padding: theme.spacing(3.5),
    backgroundColor: theme.palette.common.white,
    cursor: 'pointer',
    color: theme.palette.grey[500],
    letterSpacing: theme.typography.h5.letterSpacing,
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.05)'
    }
  },
  shareButtons: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: theme.spacing(1)
  },
  shareButton: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    transition: 'all 0.35s ease',
    borderRadius: theme.shape.small,
    cursor: 'pointer',
    padding: theme.spacing(2),
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.05)'
    }
  },
  photo: {
    color: theme.palette.primary.main
  },
  video: {
    color: '#3ACB0A'
  },
  event: {
    color: '#F8A558'
  },
  article: {
    color: '#E6699D'
  },
  names: {
    fontWeight: theme.typography.h5.fontWeight,
    fontSize: theme.typography.h4.fontSize,
    color: theme.palette.grey[500],
    marginLeft: theme.spacing(2),
    cursor: 'pointer'
  }
}))
