import styles from './styles'
import Invitation from '../../NetworkMain/Invitation/Invitation'
import { Typography } from '@material-ui/core'
import noSentInvitations from '../../../../temporaryImages/noSentInvitationsImage.PNG'

function InvitationManagerSentMain (props) {
  const {numberOfInvSent, data} = props

  const classes = styles()

  return (
    <div>
      {numberOfInvSent > 0
        ? (data.map(invitation => <Invitation data={invitation} isReceived={false} isManage={true}/>))
        : <div className={classes.blockNoInvitations}>
          <img alt='No sent invitations' src={noSentInvitations} className={classes.image}/>
          <Typography variant='h3' className={classes.defaultText}>
            No sent invitations
          </Typography>
        </div>
      }
    </div>
  )
}

export default InvitationManagerSentMain
