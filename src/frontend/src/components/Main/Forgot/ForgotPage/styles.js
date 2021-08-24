import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  forgotPageCard: {
    width: 350,
    height: 500,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(4)
  },
  
  mainText: {
    fontSize: '16px'
  },
  subText: {
    fontSize: '14px'
  },
  form: {
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  link: {
    backgroundColor: theme.palette.background.default
  },
  returnBtn: {
    backgroundColor: theme.palette.grey
  }
}))