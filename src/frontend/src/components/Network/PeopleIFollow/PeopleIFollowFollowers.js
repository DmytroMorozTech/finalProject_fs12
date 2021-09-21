import styles from './styles'
import { Container, Grid } from '@material-ui/core'
import PeopleIFollowHeader from './PeopleIFollowHeader/PeopleIFollowHeader'
import Followers from './Followers/Followers'
import { useDispatch, useSelector } from 'react-redux'
import { usersFollowedByMeSelector, usersFollowingMeSelector } from '../../../redux/Network/networkSelector'
import { useEffect } from 'react'
import { getUsersFollowedAction, getUsersFollowingAction } from '../../../redux/Network/networkActions'

function PeopleIFollowFollowers () {
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
            numberOfUsersFollowingMe={usersFollowingMe.length}
            numberOfUsersFollowedByMe={usersFollowedByMe.length}/>
        </Grid>

        <Grid item xs={12}>
          <Followers
            usersFollowingMe={usersFollowingMe}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default PeopleIFollowFollowers
