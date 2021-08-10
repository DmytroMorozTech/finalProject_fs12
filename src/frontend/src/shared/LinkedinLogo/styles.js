import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  logo: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.primary.main,
    fontSize: theme.typography.icons.extraLarge.fontSize,
    '& > span': {
      fontSize: theme.typography.icons.header.fontSize,
      fontWeight: theme.typography.h3.fontWeight,
      paddingTop: theme.spacing(0.5)
    }
  }
}))
