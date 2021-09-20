import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white,
    paddingTop: theme.spacing(1)
  },

  line: {
    width: '100%',
    height: '0.5px',
    border: '0',
    margin: '0 auto',
    backgroundColor: theme.palette.grey[300]
  },

  item: {
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    padding: theme.spacing(1),
    marginLeft: theme.spacing(1),
    width: '100%'
  },

  events: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  add: {
    color: theme.palette.grey[700],
    marginRight: theme.spacing(1),
    margin: theme.spacing(1),
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.1)',
      borderRadius: theme.shape.large
    }
  },

  discover: {
    height: theme.spacing(8),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.grey[700],
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    '&:hover': {
      borderRadius: theme.shape.down,
      backgroundColor: 'rgba(0,0,0,0.1)'
    }
  }
}))
