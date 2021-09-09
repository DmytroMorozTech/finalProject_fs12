import React from 'react'
import styles from './styles'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { MenuItem } from '@material-ui/core'
import {useDispatch, useSelector} from 'react-redux'
import {activeUserSelector} from '../../redux/User/userSelector'
import Image from '../../shared/Image/Image'
import {signOutAction} from '../../redux/User/userActions'

function UserData () {
  const classes = styles()
  const activeUser = useSelector(activeUserSelector)
  const activeUserId = activeUser.id
  const dispatch = useDispatch()

  const signOut = () => {
    dispatch(signOutAction())
  }

  return (
    <div className={classes.root}>
      <MenuItem component={Link} to={`/profiles/${activeUserId}`} className={classes.menuItem}>
        <div className={classes.avatarWrapper}>
          {/* <img className={classes.avatar} src={activeUser.avatarPublicId} alt={}/> */}
          <Image
            imageUrl={activeUser.avatarPublicId}
            alt={`Avatar of ${activeUser.fullName}`}
            className={classes.avatar}
            type={'smallAvatar'}
          />
          <div className={classes.userDataWrapper}>
            <span className={classes.userName}>{activeUser.fullName}</span>
            <div className={classes.userProfession}>{activeUser.positionAndCompany}</div>
          </div>
        </div>
      </MenuItem>
      <Button component={Link} to={`/profiles/${activeUserId}`} className={classes.profileButton} variant="outlined" color="primary">
        View Profile
      </Button>
      <Button className={classes.profileButton} variant="outlined" color="secondary" onClick={() => signOut()}>
        Sign Out
      </Button>
    </div>
  )
}

export default UserData
