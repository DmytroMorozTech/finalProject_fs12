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
    paddingBottom: theme.spacing(1)
  },
  subText: {
    fontSize: theme.typography.h5.fontSize,
    marginBottom: theme.spacing(3)
  },
  form: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  link: {
    marginTop: theme.spacing(2),
    justifyContent: 'space-around',
    paddingTop: theme.spacing(2),
    textDecoration: 'none'
  },
  cardBtn: {
    display: 'flex',
    flexDirection: 'column'
  }
}))