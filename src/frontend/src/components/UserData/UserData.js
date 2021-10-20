import React from 'react'
import styles from './styles'
import { Link } from 'react-router-dom'
import { MenuItem } from '@material-ui/core'
import {useDispatch, useSelector} from 'react-redux'
import {activeUserSelector} from '../../redux/User/userSelector'
import Image from '../../shared/Image/Image'
import {signOutAction} from '../../redux/User/userActions'
import SharedButton from '../../shared/SharedButton/SharedButton'

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
      <SharedButton component={Link} to={`/profiles/${activeUserId}`} className={classes.profileButton} variant="outlined" color="primary">
        View Profile
      </SharedButton>
      <SharedButton
        id='SignOut'
        className={classes.profileButton} variant="outlined" color="secondary"
        onClick={() => signOut()}>
        Sign Out
      </SharedButton>
    </div>
  )
}

export default UserData
