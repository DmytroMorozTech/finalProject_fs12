import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white,
    marginBottom: theme.spacing(3)
  },
  line: {
    width: '100%',
    height: '0.5px',
    border: '0',
    margin: '0 auto',
    marginTop: theme.spacing(1),
    backgroundColor: theme.palette.grey[300]
  },
  item: {
    fontSize: theme.typography.h6.fontSize,
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  events: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: theme.typography.h6.fontSize,
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  add: {
    color: theme.palette.grey[700],
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.05)',
      borderRadius: theme.shape.medium
    }
  },
  discover: {
    height: theme.spacing(8),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: theme.palette.grey[700],
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    paddingLeft: '20%',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.05)'
    }
  }
}))