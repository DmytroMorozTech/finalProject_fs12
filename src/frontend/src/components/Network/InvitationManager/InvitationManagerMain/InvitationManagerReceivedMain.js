import styles from './styles'
import Invitation from '../../NetworkMain/Invitation/Invitation'
import { Typography } from '@material-ui/core'
import noReceivedInvitations from '../../../../temporaryImages/noReceivedInvitationsImage.jpg'

function InvitationManagerReceivedMain (props) {
  const { numbOfInvReceived, data } = props

  const classes = styles()

  return (
    <div>
      { numbOfInvReceived > 0
        ? (data.map(invitation => <Invitation data={invitation} isReceived={true} isManage={true}/>))
        : <div className={classes.blockNoInvitations}>
          <img alt='No received invitations' src={noReceivedInvitations} className={classes.image}/>
          <Typography variant='h3' className={classes.defaultText}>
            No received invitations
          </Typography>
        </div>
      }
    </div>
  )
}

export default InvitationManagerReceivedMain
