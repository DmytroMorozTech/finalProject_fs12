import { Typography } from '@material-ui/core'
import SharedButton from '../../../../shared/SharedButton/SharedButton'
import styles from './styles'
import { Link, NavLink } from 'react-router-dom'

function PeopleIFollowHeader (props) {
  const classes = styles()

  const {numberOfUsersFollowedByMe, numberOfUsersFollowingMe} = props

  return (
    <div className={classes.header}>
      <div>
        <NavLink to='/network' className={classes.headerItem} >
          <Typography variant='h5'>
          Follow fresh perspectives
          </Typography>
        </NavLink>
        <NavLink to='/network/following' className={classes.headerItem} activeClassName={classes.active}>
          <Typography variant='h5' color='inherit'>
            {numberOfUsersFollowedByMe} Following
          </Typography>
        </NavLink>
        <NavLink to='/network/followers' className={classes.headerItem} activeClassName={classes.active}>
          <Typography variant='h5' color='inherit'>
            {numberOfUsersFollowingMe} Followers
          </Typography>
        </NavLink>
      </div>
      <SharedButton title='Done' component={Link} to='/home'/>
    </div>
  )
}

export default PeopleIFollowHeader
