import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  mainText: {
    fontSize: '16px'
  },
  subText: {
    fontSize: '14px'
  },
  form: {
    width: '70%',
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