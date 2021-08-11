import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white,
    marginBottom: theme.spacing(3)
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(3)
  },
  mediumAvatar: {
    width: theme.avatar.medium,
    cursor: 'pointer'
  },
  line: {
    width: '100%',
    height: '0.5px',
    border: '0',
    margin: '0 auto',
    marginTop: theme.spacing(3),
    backgroundColor: theme.palette.grey[300]
  },
  name: {
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.h3.fontWeight,
    color: theme.palette.grey[700],
    paddingTop: theme.spacing(4)
  },
  link: {
    underline: 'none'
  },
  connection: {
    color: theme.palette.grey[700],
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.05)'
    }
  },
  connectionLink: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: theme.typography.h6.fontSize,
    marginTop: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  connectionText: {
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    paddingLeft: theme.spacing(2)
  },
  views: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: theme.typography.h6.fontSize,
    color: theme.palette.grey[700],
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.05)'
    }
  },
  number: {
    color: theme.palette.primary.main
  },
  items: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: theme.palette.grey[700],
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    paddingLeft: theme.spacing(2),
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.05)'
    }
  }
}))
