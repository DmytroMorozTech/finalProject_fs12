import CancelIcon from '@material-ui/icons/Cancel'
import styles from './styles'

function Cross () {
  const classes = styles()
  return (

    <div className={classes.cross}>
      <CancelIcon fontSize='inherit'/>
    </div>
  )
}

export default Cross
