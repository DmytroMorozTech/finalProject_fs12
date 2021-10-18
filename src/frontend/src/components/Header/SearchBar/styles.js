import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  searchBarContainer: {
    position: 'relative',
    width: '100%',
    minWidth: '250px'
  },

  headerSearch: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1.5),
    paddingLeft: theme.spacing(3),
    borderRadius: theme.shape.extraSmall,
    backgroundColor: 'rgba(220,230,241,0.5)',
    fontSize: theme.typography.icons.medium.fontSize,
    color: theme.palette.grey[800],
    '& > input': {
      fontSize: theme.typography.h4.fontSize,
      fontWeight: theme.typography.h4.fontWeight,
      marginLeft: theme.spacing(1),
      border: 0,
      backgroundColor: 'transparent',
      '&:focus': {
        outline: 'none',
        '&:placeholder': {
          opacity: 0
        }
      },
      '&::placeholder': {
        color: theme.palette.grey[600],
        fontSize: theme.typography.h4.fontSize,
        fontWeight: theme.typography.h4.fontWeight
      }
    }
  },
  headerButtonSearch: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: theme.spacing(1.5),
    paddingTop: theme.spacing(2),
    transition: 'all 0.4s ease',
    fontSize: theme.typography.icons.large.fontSize,
    color: theme.palette.grey[700],
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.common.black
    }
  },

  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: theme.spacing(16),
    height: theme.spacing(3),
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.header.fontWeight
  },

  icon: {
    width: theme.spacing(8),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: theme.typography.icons.large.fontSize
  },
  searchDropDownWrapper: {
    width: '100%',
    position: 'absolute',
    top: '36px',
    left: 0
  },

  dropDownItem: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: theme.palette.common.white,
    zIndex: 100,
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
      cursor: 'pointer'
    }
  },

  dropDownUser: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing(1)
  },

  line: {
    zIndex: 100,
    width: '100%',
    height: '0.5px',
    border: '0',
    margin: '0 auto',
    backgroundColor: theme.palette.grey[300]
  },

  smallAvatar: {
    width: theme.avatar.small,
    borderRadius: '50%',
    marginRight: theme.spacing(2)
  },

  hidden: {
    display: 'none'
  },

  link: {
    textDecoration: 'none'
  }

}))
