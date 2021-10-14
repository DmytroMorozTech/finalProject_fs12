import styles from './styles'
import Invitation from '../../NetworkMain/Invitation/Invitation'
import { Typography } from '@material-ui/core'
import Image from '../../../../shared/Image/Image'
import React from 'react'

function InvitationManagerReceivedMain (props) {
  const { numbOfInvReceived, data } = props

  const classes = styles()

  return (
    <div>
      { numbOfInvReceived > 0
        ? (data.map(invitation => <Invitation key={invitation.id} data={invitation} isReceived={true} isManage={true}/>))
        : <div className={classes.blockNoInvitations}>
          <Image
            imageUrl={'linkedin/general/xbzouduhmt3awvxyxou2'}
            alt={'No received invitations'}
            className={classes.image}
          />
          <Typography variant='h3' className={classes.defaultText}>
            No received invitations
          </Typography>
        </div>
      }
    </div>
  )
}

export default InvitationManagerReceivedMain
