import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  title: {
    marginLeft: theme.spacing(4),
    color: theme.palette.grey[700],
    fontSize: theme.typography.h3.fontSize,
    fontWeight: theme.typography.h4.fontWeight,
    marginBottom: theme.spacing(3)
  },

  subtitle: {
    marginLeft: theme.spacing(4),
    marginTop: theme.spacing(1),
    color: theme.palette.common.black
  },

  checkbox: {
    display: 'flex',
    alignItems: 'center',
    '& > p': {
      margin: 0
    }
  },

  pageImg: {
    backgroundAttachment: 'center',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '300px'
  }
}))
