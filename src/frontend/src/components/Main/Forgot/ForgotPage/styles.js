import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  forgotPageCard: {
    width: 450,
    height: 500,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainText: {
    fontSize: '16px'
  },
  subText: {
    fontSize: '14px'
  },
  form: {
    width: '50%',
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