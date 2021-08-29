import styles from './styles'
import MiniProfile from './MiniProfile/MiniProfile'
import SharedLinkSquare from '../../../shared/SharedLinkSquare/SharedLinkSquare'

function NetworkMain () {
  const classes = styles()

  return (
    <div className={classes.networkMain}>
      <div className={classes.block}>
        <div className={classes.header}>
          <div>
            No pending invitations
          </div>
          {/* Link is hardcoded below */}
          <SharedLinkSquare title='Manage' to='#'/>
        </div>
      </div>
      <div className={classes.block}>
        <div className={classes.header}>
          <div>
            People you may know
          </div>
          {/* Link is hardcoded below */}
          <SharedLinkSquare title='See all' to='#'/>
        </div>
        <div className={classes.miniProfiles}>
          <MiniProfile/>
        </div>
      </div>
    </div>
  )
}

export default NetworkMain
