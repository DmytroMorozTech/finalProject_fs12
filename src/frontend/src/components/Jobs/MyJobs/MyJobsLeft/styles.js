import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  item: {
    borderRadius: theme.shape.up,
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing(2),
    paddingTop: theme.spacing(3),
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.grey[700]
  },

  icon: {
    fontSize: theme.typography.icons.medium.fontSize,
    display: 'flex'
  },

  title: {
    paddingLeft: theme.spacing(2),
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.fontWeightRegular
  },

  line: {
    width: '100%',
    height: '0.5px',
    border: '0',
    margin: '0 auto',
    backgroundColor: theme.palette.grey[300]
  },

  subtitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    color: theme.palette.primary.main,
    fontSize: theme.typography.h5.fontSize,
    borderLeft: '5px solid #0a66c2',
    backgroundColor: theme.palette.common.white,
    borderRadius: theme.shape.down
  },

  number: {
    color: theme.palette.grey[900]
  }
}))
