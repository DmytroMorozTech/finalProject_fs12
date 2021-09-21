import styles from './styles'
import { Container, Grid } from '@material-ui/core'
import PeopleIFollowHeader from './PeopleIFollowHeader/PeopleIFollowHeader'
import Following from './Following/Following'
import { useDispatch, useSelector } from 'react-redux'
import { usersFollowedByMeSelector, usersFollowingMeSelector } from '../../../redux/Network/networkSelector'
import { useEffect } from 'react'
import { getUsersFollowedAction, getUsersFollowingAction } from '../../../redux/Network/networkActions'

function PeopleIFollowFollowing () {
  const classes = styles()

  const dispatch = useDispatch()

  const usersFollowedByMe = useSelector(usersFollowedByMeSelector)
  const usersFollowingMe = useSelector(usersFollowingMeSelector)

  useEffect(() => {
    dispatch(getUsersFollowingAction())
    dispatch(getUsersFollowedAction())
  }, [dispatch])

  return (
    <Container maxWidth={'lg'} className={classes.peopleIFollow}>

      <Grid container spacing={4} alignItems="flex-start" justifyContent="center">
        <Grid item xs={12}>
          <PeopleIFollowHeader
            numberOfUsersFollowedByMe={usersFollowedByMe.length}
            numberOfUsersFollowingMe={usersFollowingMe.length}
          />
        </Grid>

        <Grid item xs={12}>
          <Following
            usersFollowedByMe={usersFollowedByMe}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default PeopleIFollowFollowing
