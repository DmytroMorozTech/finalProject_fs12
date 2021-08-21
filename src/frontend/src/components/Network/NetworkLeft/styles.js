import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  networkLeft: {
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white,
    paddingTop: theme.spacing(4),
    color: theme.palette.grey[700],
    fontSize: theme.typography.h5.fontSize
  },

  title: {
    paddingLeft: theme.spacing(4)
  },

  items: {
    marginTop: theme.spacing(1)
  },

  btn: {
    marginLeft: theme.spacing(3),
    padding: theme.spacing(1),
    color: theme.palette.secondary.main,
    boxShadow: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    backgroundColor: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
      boxShadow: 'none'
    },
    '&:focus': {
      backgroundColor: theme.palette.grey[200],
      boxShadow: 'none'
    }
  },

  line: {
    width: '100%',
    height: '0.5px',
    border: '0',
    backgroundColor: theme.palette.grey[300]
  },

  img: {
    display: 'flex',
    maxWidth: '300px',
    margin: '0 auto',
    width: '100%'
  },

  link: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },

  logo: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    color: theme.palette.primary.main,
    fontSize: theme.typography.icons.small.fontSize,
    margin: theme.spacing(2),
    '& > span': {
      fontSize: theme.typography.h6.fontSize,
      fontWeight: theme.typography.fontWeightBold,
      paddingTop: theme.spacing(0.5)
    }
  },

  signature: {
    marginLeft: theme.spacing(1),
    fontSize: theme.typography.h6.fontSize,
    color: theme.palette.grey[700],
    paddingTop: theme.spacing(0.5)
  }
}))
