import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  smallMyItems: {
    display: 'flex',
    justifyContent: 'space-between',
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(4),
    marginTop: theme.spacing(4),
    width: '100%',
    height: '70px',
    textDecoration: 'none',
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.h5.fontSize,
    cursor: 'pointer'
  },

  item: {
    display: 'flex',
    alignItems: 'center'
  },

  icon: {
    fontSize: theme.typography.icons.medium.fontSize
  },

  title: {
    fontSize: theme.typography.h5.fontSize,
    paddingLeft: theme.spacing(2)
  }
}))
