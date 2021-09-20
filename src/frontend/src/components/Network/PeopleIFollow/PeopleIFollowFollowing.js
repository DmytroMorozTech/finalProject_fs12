import styles from './styles'
import { Container, Grid } from '@material-ui/core'
import PeopleIFollowHeader from './PeopleIFollowHeader/PeopleIFollowHeader'
import Following from './Following/Following'
import { useDispatch, useSelector } from 'react-redux'
import { usersFollowedSelector, usersFollowingSelector } from '../../../redux/Network/networkSelector'
import { useEffect } from 'react'
import { getUsersFollowedAction, getUsersFollowingAction } from '../../../redux/Network/networkActions'

function PeopleIFollowFollowing () {
  const classes = styles()

  const dispatch = useDispatch()

  const usersFollowed = useSelector(usersFollowedSelector)
  const usersFollowing = useSelector(usersFollowingSelector)

  useEffect(() => {
    dispatch(getUsersFollowingAction())
    dispatch(getUsersFollowedAction())
  }, [dispatch])

  return (
    <Container maxWidth={'lg'} className={classes.peopleIFollow}>

      <Grid container spacing={4} alignItems="flex-start" justifyContent="center">
        <Grid item xs={12}>
          <PeopleIFollowHeader
            numberOfUsersFollowing={usersFollowing.length}
            numberOfUsersFollowed={usersFollowed.length}
          />
        </Grid>

        <Grid item xs={12}>
          <Following
            usersFollowing={usersFollowing}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default PeopleIFollowFollowing
