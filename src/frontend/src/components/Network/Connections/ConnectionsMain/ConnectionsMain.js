import styles from './styles'
import Typography from '@material-ui/core/Typography'
import Connection from './Connection/Connection'

function ConnectionsMain (props) {
  const classes = styles()

  const { numberOfConnections = 5 } = props

  return (
    <div className={classes.connectionsMain}>
      <Typography variant="h3" className={classes.title}>
        {numberOfConnections} Connections
      </Typography>
      <hr className={classes.line}/>
      <Connection/>
    </div>
  )
}

export default ConnectionsMain
