import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  searchFieldWrapper: {
    position: 'relative',
    zIndex: 100
  },

  searchDropDownWrapper: {
    width: '100%',
    border: '2px solid #0a66c2',
    borderBottomLeftRadius: theme.shape.small,
    borderBottomRightRadius: theme.shape.small,
    overflow: 'hidden',
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    top: '36px',
    left: 0
  },

  dropDownItem: {
    width: '100%',
    height: 40,
    zIndex: 100,
    backgroundColor: theme.palette.common.white,
    borderTop: theme.border.normal,
    border: 'transparent',
    fontSize: theme.typography.h5.fontSize,
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
      cursor: 'pointer'
    }
  },

  hidden: {
    display: 'none'
  }

}))
