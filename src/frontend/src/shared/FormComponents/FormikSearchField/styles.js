import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  searchFieldWrapper: {
    position: 'relative',
    zIndex: 100
  },

  searchDropDownWrapper: {
    width: '100%',
    position: 'absolute',
    top: '38px',
    left: 0
  },

  dropDownItem: {
    width: '100%',
    backgroundColor: 'white',
    height: 40,
    zIndex: 100,
    border: '1px solid gray',
    '&:hover': {
      backgroundColor: 'lightgray',
      cursor: 'pointer'
    }
  },

  hidden: {
    display: 'none'
  }

}))
