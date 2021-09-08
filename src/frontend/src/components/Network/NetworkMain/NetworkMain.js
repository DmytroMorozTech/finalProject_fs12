import styles from './styles'
import MiniProfile from './MiniProfile/MiniProfile'
import SharedLinkSquare from '../../../shared/SharedLinkSquare/SharedLinkSquare'
import Invitation from './Invitation/Invitation'
import clsx from 'clsx'

function NetworkMain (props) {
  const {isInvitation = true} = props

  const classes = styles()

  return (
    <div className={classes.networkMain}>
      <div className={classes.block}>
        <div className={clsx(classes.header, classes.invitationHeader)}>
          <div>
            {isInvitation
              ? 'Invitations'
              : 'No pending invitations'}
          </div>
          <SharedLinkSquare title='Manage' to='/network/invitation_manager/received'/>
        </div>
        <div>
          {isInvitation
            ? <Invitation isReceived={true} isManage={false}/>
            : ''}
        </div>
      </div>
      <div className={clsx(classes.block, classes.people)}>
        <div className={classes.header}>
          <div>
            People you may know
          </div>
          {/* Link is hardcoded below */}
          <SharedLinkSquare title='See all' to='#'/>
        </div>
        <div className={clsx(classes.miniProfiles, classes.smallMiniProfiles)}>
          <MiniProfile/>
        </div>
      </div>
    </div>
  )
}

export default NetworkMain
