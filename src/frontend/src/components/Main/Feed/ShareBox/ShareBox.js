import React from 'react'
import styles from './styles'
import toggleModalAction from '../../../../redux/Modal/modalActions'
import { useDispatch } from 'react-redux'
import { ADD_NEW_POST } from '../../../../redux/Modal/modalTypes'
import { Link } from 'react-router-dom'
import Image from '../../../../shared/Image/Image'

function ShareBox (props) {
  const {activeUser} = props
  const classes = styles()
  const dispatch = useDispatch()

  const linkToActiveUserProfile = '/profiles/' + activeUser.id

  return (
    <div className={classes.share}>
      <Link to={linkToActiveUserProfile} className={classes.link}>
        <Image
          imageUrl={activeUser.avatarPublicId}
          alt={'user avatar'}
          className={classes.smallAvatar}
          type={'largeAvatar'}
        />
      </Link>
      <button className={classes.postButton} onClick={() =>
        dispatch(toggleModalAction({modalType: ADD_NEW_POST}))}
      disabled={!!props.loading}>
          Start a post
      </button>
    </div>
  )
}

export default ShareBox
