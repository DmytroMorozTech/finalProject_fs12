import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  logo: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.primary.main,
    fontSize: theme.typography.icons.extraLarge.fontSize,
    cursor: 'pointer',
    '& > span': {
      fontSize: theme.typography.icons.header.fontSize,
      fontWeight: theme.typography.h3.fontWeight,
      paddingTop: theme.spacing(0.5),
      '@media screen and (max-width: 640px)': {
        fontSize: theme.typography.h2.fontSize
      }
    },
    '@media screen and (max-width: 640px)': {
      fontSize: theme.typography.h2.fontSize,
      width: '5rem',
      marginRight: '1rem'
    }
  }
}))
