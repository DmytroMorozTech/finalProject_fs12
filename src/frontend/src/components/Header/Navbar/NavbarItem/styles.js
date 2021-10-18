import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  menuItem: {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    paddingTop: theme.spacing(1),
    transition: 'all 0.4s ease',
    lineHeight: theme.typography.h4.lineHeight,
    '&:hover': {
      color: theme.palette.common.black
    }
  },
  icons: {
    width: theme.spacing(7),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: theme.typography.icons.header.fontSize
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: theme.spacing(16),
    height: theme.spacing(3),
    '& > span': {
      fontSize: theme.typography.h6.fontSize,
      fontWeight: theme.typography.header.fontWeight,
      marginBottom: theme.spacing(1)
    }
  },
  itemPrimary: {
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.grey[700],
    '&:hover': {
      color: theme.palette.common.black,
      fontWeight: 'bold'
    }
  },
  itemPrimaryActive: {
    transition: 'all 0.4s ease',
    '& > div': {
      color: theme.palette.common.black
    },
    '& hr': {
      width: theme.spacing(16),
      transition: 'width 0.4s ease-in'
    }
  },
  arrow: {
    position: 'relative',
    top: -theme.spacing(0.5),
    left: -theme.spacing(0.5)
  },
  line: {
    width: '0px',
    height: '1.5px',
    border: '0',
    marginTop: '0',
    marginBottom: '0',
    backgroundColor: theme.palette.common.black,
    transition: 'width 0.4s ease-out'
  },
  badge: {
    '& > span': {
      top: 7,
      right: 10
    }
  }
}))
