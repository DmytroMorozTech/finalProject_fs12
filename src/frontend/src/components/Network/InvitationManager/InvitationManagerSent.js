import styles from './styles'
import { Container, Grid } from '@material-ui/core'
import InvitationManagerHeader from './InvitationManagerHeader/InvitationManagerHeader'
import InvitationManagerSentMain from './InvitationManagerMain/InvitationManagerSentMain'
import InvitationManagerRight from './InvitationManagerRight/InvitationManagerRight'

function InvitationManagerSent (props) {
  const {numberOfReceived = 1, numberOfSent = 1} = props

  const classes = styles()

  return (
    <Container maxWidth={'lg'} className={classes.invitationManager}>

      <Grid container spacing={4} alignItems="flex-start" justifyContent="center">
        <Grid item xs={7}>
          <div className={classes.main}>
            <InvitationManagerHeader numberOfReceived={numberOfReceived} numberOfSent={numberOfSent}/>
            <InvitationManagerSentMain numberOfSent={numberOfSent}/>
          </div>
        </Grid>

        <Grid item xs={3}>
          <InvitationManagerRight/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default InvitationManagerSent
