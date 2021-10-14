import styles from './styles'
import Invitation from '../../NetworkMain/Invitation/Invitation'
import { Typography } from '@material-ui/core'
import Image from '../../../../shared/Image/Image'
import React from 'react'

function InvitationManagerSentMain (props) {
  const {numberOfInvSent, data} = props

  const classes = styles()

  return (
    <div>
      {numberOfInvSent > 0
        ? (data.map(invitation => <Invitation key={invitation.id} data={invitation} isReceived={false} isManage={true}/>))
        : <div className={classes.blockNoInvitations}>
          <Image
            imageUrl={'linkedin/general/ifdan6uahicr9iwqtzs1'}
            alt={'No sent invitations'}
            className={classes.image}
          />
          <Typography variant='h3' className={classes.defaultText}>
            No sent invitations
          </Typography>
        </div>
      }
    </div>
  )
}

export default InvitationManagerSentMain
