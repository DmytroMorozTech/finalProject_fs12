import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  searchFieldWrapper: {
    position: 'relative',
    zIndex: 100
  },

  searchDropDownWrapper: {
    width: '100%',
    position: 'absolute',
    top: '60%',
    left: 0
  },

  dropDownItem: {
    width: '100%',
    backgroundColor: 'lightgray',
    height: 50,
    zIndex: 100,
    border: '1px solid gray',
    '&:hover': {
      backgroundColor: 'darkgray',
      cursor: 'pointer'
    }
  }

}))
