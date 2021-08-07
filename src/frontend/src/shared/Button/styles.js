import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(() => ({

  btn: {
    margin: '5px',
    borderRadius: 30,
    boxShadow: 'none',
    paddingTop: '2px',
    paddingBottom: '2px',
    '&:hover': {
      boxShadow: 'none'
    },

    '&:disabled': {
      cursor: 'not-allowed',
      pointerEvents: 'auto'
    }
  }
}))
