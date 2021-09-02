import styles from './styles'
import { Container, Grid } from '@material-ui/core'
import PeopleIFollowHeader from './PeopleIFollowHeader/PeopleIFollowHeader'
import Following from './Following/Following'

function PeopleIFollowFollowing () {
  const classes = styles()

  return (
    <Container maxWidth={'lg'} className={classes.peopleIFollow}>

      <Grid container spacing={4} alignItems="flex-start" justifyContent="center">
        <Grid item xs={12}>
          <PeopleIFollowHeader/>
        </Grid>

        <Grid item xs={12}>
          <Following/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default PeopleIFollowFollowing
