import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  vacancy: {
    display: 'flex',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    justifyContent: 'space-between',
    width: '100%'
  },

  row: {
    display: 'flex'
  },

  vacancyImg: {
    width: theme.spacing(10),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3)
  },

  link: {
    display: 'flex',
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.grey[900],
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.main,
      textDecoration: 'underline',
      textDecorationThickness: '2px'
    }
  },

  org: {
    color: theme.palette.grey[900]
  },

  recruiting: {
    display: 'flex',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    alignItems: 'center'
  },

  iconTarget: {
    color: theme.palette.success.main,
    fontSize: theme.typography.icons.medium.fontSize,
    marginRight: theme.spacing(1)
  },

  date: {
    display: 'flex',
    marginTop: theme.spacing(2)
  },

  applicants: {
    color: theme.palette.success.main,
    fontWeight: theme.typography.fontWeightBold
  },

  popupMenu: {
    marginRight: theme.spacing(5),
    marginTop: theme.spacing(2)
  },

  line: {
    width: '100%',
    height: '0.5px',
    border: '0',
    margin: '0 auto',
    backgroundColor: theme.palette.grey[300]
  }
}))
