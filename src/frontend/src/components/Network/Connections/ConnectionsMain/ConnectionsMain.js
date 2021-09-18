import styles from './styles'
import Typography from '@material-ui/core/Typography'
import Connection from './Connection/Connection'

function ConnectionsMain (props) {
  const classes = styles()
  const {connections} = props

  return (
    <div className={classes.connectionsMain}>
      <Typography variant="h3" className={classes.title}>
        {connections.length} Connections
      </Typography>
      <hr className={classes.line}/>
      {connections.map(connection => <Connection connection={connection}/>)}
    </div>
  )
}

export default ConnectionsMain
