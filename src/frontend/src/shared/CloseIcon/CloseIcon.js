import CloseIcon from '@material-ui/icons/Close'
import styles from './styles'

function Close () {
  const classes = styles()
  return (
    <div className={classes.cross}>
      <CloseIcon fontSize='inherit'/>
    </div>
  )
}

export default Close