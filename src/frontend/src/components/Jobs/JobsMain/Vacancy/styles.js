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
    margin: theme.spacing(1)
  },

  vacancyInfo: {
    paddingLeft: theme.spacing(1)
  },

  link: {
    display: 'flex',
    fontSize: theme.typography.h5.fontSize,
    color: theme.palette.primary.main,
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline'
    }
  },

  recruiting: {
    display: 'flex',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    alignItems: 'center'
  },

  iconTarget: {
    color: theme.palette.green.main,
    fontSize: theme.typography.icons.medium.fontSize,
    marginRight: theme.spacing(1)
  },

  date: {
    display: 'flex',
    marginTop: theme.spacing(2)
  },

  applicants: {
    color: theme.palette.green.main,
    fontWeight: theme.typography.fontWeightBold
  },

  icons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  icon: {
    display: 'flex',
    cursor: 'pointer',
    fontSize: theme.typography.icons.medium.fontSize,
    color: theme.palette.grey[700],
    padding: theme.spacing(1),
    borderRadius: '50%',
    '&:hover': {
      transitionDuration: '0.5s',
      backgroundColor: 'rgba(0,0,0,0.1)'
    }
  },

  hover: {
    opacity: 0,
    '&:hover': {
      opacity: 1
    }
  },

  line: {
    width: '100%',
    height: '0.5px',
    border: '0',
    margin: '0 auto',
    backgroundColor: theme.palette.grey[300]
  }
}))
