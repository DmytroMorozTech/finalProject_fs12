import styles from './styles'
import Button from '@material-ui/core/Button'
import MiniProfile from './MiniProfile/MiniProfile'

function NetworkMain () {
  const classes = styles()

  return (
    <div>
      <div className={classes.invitations}>
        No pending invitations
        <Button color="secondary" className={classes.button}>
          Manage
        </Button>
      </div>
      <div className={classes.people}>
        <div className={classes.mayKnow}>
          People you may know
          <Button color="secondary" className={classes.button}>
            See all
          </Button>
        </div>
        <div className={classes.miniProfiles}>
          <MiniProfile/>
        </div>
      </div>
    </div>
  )
}

export default NetworkMain
