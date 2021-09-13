import styles from './styles'
import { Typography } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

function InvitationManagerHeader (props) {
  const {numberOfInvReceived, numberOfInvSent} = props

  const classes = styles()

  return (
    <div className={classes.invitationManagerHeader}>
      <div>
        <Typography variant="h3" className={classes.title}>
          Manage invitations
        </Typography>
        <div className={classes.headerItems}>
          <NavLink to='/network/invitation_manager/received' className={classes.headerItem} activeClassName={classes.active}>
            <Typography variant='h5' color='inherit'>
            Received ({numberOfInvReceived})
            </Typography>
          </NavLink>
          <NavLink to='/network/invitation_manager/sent' className={classes.headerItem} activeClassName={classes.active}>
            <Typography variant='h5' color='inherit'>
            Sent ({numberOfInvSent})
            </Typography>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default InvitationManagerHeader
