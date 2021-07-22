import CancelIcon from '@material-ui/icons/Cancel'
import Style from './styles'

function Cross () {
  const classes = Style()
  return (
    <div className={classes.cross}>
      <CancelIcon/>
    </div>
  )
}

export default Cross