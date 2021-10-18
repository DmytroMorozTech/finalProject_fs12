import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  followProfile: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '20%',
    minWidth: '149px',
    borderRight: theme.border.simple,
    borderBottom: theme.border.simple
  },

  userInfo: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '225px',
    padding: theme.spacing(3)
  },

  link: {
    textDecoration: 'none'
  },

  largeAvatar: {
    width: theme.avatar.large,
    borderRadius: '50%'
  },

  name: {
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.h3.fontWeight,
    color: theme.palette.grey[700],
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    cursor: 'pointer'
  },

  smallLine: {
    width: '50px',
    height: '0.5px',
    border: '0',
    marginLeft: '0',
    marginBottom: theme.spacing(3),
    backgroundColor: theme.palette.grey[300]
  },

  line: {
    width: '100%',
    height: '0.5px',
    border: '0',
    margin: '0 auto',
    backgroundColor: theme.palette.grey[300]
  },

  follow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
    cursor: 'pointer',
    fontSize: theme.typography.icons.medium.fontSize,
    color: theme.palette.grey[700],
    width: '100%',
    '&:hover': {
      backgroundColor: 'rgba(112, 181, 249, 0.2)'
    }
  },

  followTitle: {
    marginLeft: theme.spacing(1)
  }
}))
