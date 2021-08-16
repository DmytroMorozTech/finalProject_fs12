import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: theme.spacing(2),
    color: theme.palette.grey[700],
    marginBottom: theme.spacing(3)
  },
  likeMini: {
    color: theme.palette.common.white,
    fontSize: theme.typography.icons.large.fontSize,
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.shape.large
  },
  word: {
    fontWeight: theme.typography.fontWeightBold
  },
  icon: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  number: {
    color: theme.palette.grey[700]
  },
  avatar: {
    display: 'flex',
    flexDirection: 'column',
    width: theme.avatar.medium
  },
  userAvatar: {
    position: 'relative'
  },
  iconStatus: {
    position: 'absolute',
    right: 0,
    top: '70%',
    border: '2px solid white',
    borderWidth: '2px',
    borderRadius: '50%'
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'row'
  },
  buttonGroup: {
    paddingLeft: theme.spacing(1),
    paddingTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column'
  },
  name: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.fontWeightBold
  },
  position: {
    fontSize: theme.typography.body1.fontSize,
    color: theme.palette.grey[700]
  },
  vl: {
    borderLeft: '1px solid gray',
    height: theme.spacing(2),
    left: '50%',
    top: 0,
    marginLeft: theme.spacing(1)
  }
}))