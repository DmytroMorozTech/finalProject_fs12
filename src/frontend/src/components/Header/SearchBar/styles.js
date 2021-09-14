import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  headerSearch: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1.5),
    paddingLeft: theme.spacing(3),
    borderRadius: theme.shape.extraSmall,
    backgroundColor: 'rgba(220,230,241,0.5)',
    fontSize: theme.typography.icons.medium.fontSize,
    color: theme.palette.grey[800],
    marginRight: theme.spacing(25),
    '& > input': {
      fontSize: theme.typography.h4.fontSize,
      fontWeight: theme.typography.h4.fontWeight,
      marginLeft: theme.spacing(1),
      border: 0,
      backgroundColor: 'transparent',
      width: theme.spacing(50),
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
    width: '35%',
    position: 'absolute',
    top: '50px',
    left: '15%'
  },

  dropDownItem: {
    display: 'flex',
    // flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
    height: 40,
    zIndex: 100,
    fontSize: theme.typography.h4.fontSize,
    borderRadius: theme.shape.extraSmall,
    border: '1px solid gray',
    '&:hover': {
      backgroundColor: 'lightgray',
      cursor: 'pointer'
    }
  },
  searchIcon: {
    padding: theme.spacing(2)
  },

  hidden: {
    display: 'none'
  }

}))
