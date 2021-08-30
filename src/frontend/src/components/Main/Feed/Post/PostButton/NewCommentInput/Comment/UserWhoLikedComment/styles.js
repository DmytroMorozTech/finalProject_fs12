import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: theme.spacing(5),
    color: theme.palette.grey[700],
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    borderBottom: theme.border.likesModal,
    width: '160px'
  },

  likeMini: {
    display: 'flex',
    color: theme.palette.common.white,
    fontSize: theme.typography.icons.medium.fontSize,
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.shape.large,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1)
  },

  link: {
    display: 'flex',
    textDecoration: 'none'
  },

  subtitle: {
    display: 'flex',
    fontWeight: theme.typography.fontWeightRegular
  },

  number: {
    color: theme.palette.success.main,
    marginTop: theme.spacing(1)
  },

  line: {
    width: '100%',
    height: '0.5px',
    border: '0',
    margin: '0 auto',
    backgroundColor: theme.palette.grey[300]
  },

  lineItem: {
    marginLeft: theme.spacing(12),
    width: 'calc(100% - 60px)',
    height: '0.5px',
    border: '0',
    margin: '0',
    backgroundColor: theme.palette.grey[300]
  },

  avatar: {
    display: 'flex',
    width: theme.avatar.small
  },

  userAvatar: {
    position: 'relative'
  },

  iconStatus: {
    position: 'absolute',
    left: '70%',
    top: '65%',
    border: '2px solid white',
    borderWidth: '2px',
    borderRadius: '50%'
  },

  width: {
    width: '100%'
  },

  usersWhoLiked: {
    padding: theme.spacing(5),
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },

  userWhoLiked: {
    padding: theme.spacing(2)
  },

  userInfo: {
    display: 'flex',
    flexDirection: 'row'
  },

  buttonGroup: {
    paddingLeft: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
}))
