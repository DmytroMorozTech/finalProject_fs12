import styles from './styles'
import { Container, Grid } from '@material-ui/core'
import InvitationManagerHeader from './InvitationManagerHeader/InvitationManagerHeader'
import InvitationManagerReceivedMain from './InvitationManagerMain/InvitationManagerReceivedMain'
import InvitationManagerRight from './InvitationManagerRight/InvitationManagerRight'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {getAllInvitations} from '../../../redux/Network/networkActions'

function InvitationManagerReceived (props) {
  const {numberOfReceived = 1, numberOfSent = 1} = props

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllInvitations())
  }, [dispatch])

  const classes = styles()

  return (
    <Container maxWidth={'lg'} className={classes.invitationManager}>

      <Grid container spacing={4} alignItems="flex-start" justifyContent="center">
        <Grid item xs={7}>
          <div className={classes.main}>
            <InvitationManagerHeader numberOfReceived={numberOfReceived} numberOfSent={numberOfSent}/>
            <InvitationManagerReceivedMain numberOfReceived={numberOfReceived}/>
          </div>
        </Grid>

        <Grid item xs={3}>
          <InvitationManagerRight/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default InvitationManagerReceived
