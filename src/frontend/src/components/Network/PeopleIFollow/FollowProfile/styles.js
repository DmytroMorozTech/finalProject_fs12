import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  followProfile: {
    maxWidth: '195px'
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

  link: {
    textDecoration: 'none'
  },

  line: {
    width: '100%',
    height: '0.5px',
    border: '0',
    margin: '0 auto',
    backgroundColor: theme.palette.grey[300]
  }
}))
