import CancelIcon from '@material-ui/icons/Cancel'
import StyleCross from './StyleCross'

function Cross () {
  const classes = StyleCross()
  return (
    <div className={classes.cross}>
      <CancelIcon/>
    </div>
  )
}

export default Cross