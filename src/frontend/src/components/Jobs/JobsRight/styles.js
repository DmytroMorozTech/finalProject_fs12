import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  container: {
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    width: '300px'
  },

  bestPracticesBlock: {
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    marginTop: theme.spacing(2),
    padding: theme.spacing(3),
    display: 'flex'
  },

  title: {
    fontWeight: theme.typography.fontWeightRegular
  },

  bulb: {
    display: 'flex',
    alignItems: 'center',
    fontSize: theme.typography.icons.extraLarge.fontSize,
    paddingRight: theme.spacing(3),
    color: '#f8c77e'
  },

  bestPractices: {
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline'
    }
  },

  description: {
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.grey[700]
  }
}))
