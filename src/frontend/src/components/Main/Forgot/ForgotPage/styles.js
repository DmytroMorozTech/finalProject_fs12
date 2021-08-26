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
    fontSize: theme.typography.h3.fontSize,
    marginBottom: 390,
    position: 'absolute'
  },
  subText: {
    fontSize: theme.typography.h5.fontSize,
    marginBottom: 270,
    position: 'absolute'
  },
  form: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  link: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingTop: '15px',
    textDecoration: 'none'
  }
}))