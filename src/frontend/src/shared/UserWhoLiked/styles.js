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
    borderBottom: theme.border.success,
    width: '160px'
  },

  subtitle: {
    display: 'flex',
    fontWeight: theme.typography.fontWeightRegular
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

  usersWhoLiked: {
    padding: theme.spacing(5),
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}))
