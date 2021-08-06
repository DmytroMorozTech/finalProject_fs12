import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  btn: {
    margin: '5px',
    borderRadius: theme.shape.large,
    boxShadow: 'none',
    fontSize: '14px',
    padding: '0px',
    '&:hover': {
      boxShadow: 'none'
    }
  }
}))
