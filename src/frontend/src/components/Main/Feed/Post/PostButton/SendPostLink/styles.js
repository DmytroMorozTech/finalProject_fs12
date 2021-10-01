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
    width: '160px'
  },

  subtitle: {
    display: 'flex',
    fontWeight: theme.typography.fontWeightRegular
  },

  line: {
    width: '100%',
    height: '0.5px',
    border: '0',
    margin: '0 auto',
    backgroundColor: theme.palette.grey[300]
  },

  inputBase: {
    paddingLeft: theme.spacing(5),
    padding: theme.spacing(1)
  },

  button: {
    display: 'flex',
    flexDirection: 'row-reverse',
    padding: theme.spacing(1),
    paddingRight: theme.spacing(4)
  }
}))
