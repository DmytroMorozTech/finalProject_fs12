import React from 'react'
import styles from './styles'
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual'
import YouTubeIcon from '@material-ui/icons/YouTube'
import EventNoteIcon from '@material-ui/icons/EventNote'
import AssignmentIcon from '@material-ui/icons/Assignment'
import Avatar from '../../../../shared/Avatar/Avatar'
import toggleModalAction from '../../../../redux/Modal/modalActions'
import { useDispatch } from 'react-redux'
import { ADD_NEW_POST } from '../../../../redux/Modal/modalTypes'
import { Hidden } from '@material-ui/core'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

function ShareBox (props) {
  const {activeUser} = props
  const classes = styles()
  const dispatch = useDispatch()

  const linkToActiveUserProfile = '/profiles/' + activeUser.id

  return (
    <div className={classes.share}>
      <div className={classes.post}>
        <div className={classes.smallAvatar}>
          <Link to={linkToActiveUserProfile}>
            <Avatar avatarUrl={activeUser.avatarUrl}/>
          </Link>
        </div>
        <button className={classes.postButton} onClick={() =>
          dispatch(toggleModalAction({modalType: ADD_NEW_POST}))}
        disabled={!!props.loading}>
          Start a post
        </button>
      </div>
      <div className={classes.shareButtons}>
        <div className={clsx(classes.shareButton, classes.photo)}>
          <PhotoSizeSelectActualIcon/>
          <Hidden xsDown>
            <div className={classes.names}>Photo</div>
          </Hidden>
        </div>
        <div className={clsx(classes.shareButton, classes.video)}>
          <YouTubeIcon/>
          <Hidden xsDown>
            <div className={classes.names}>Video</div>
          </Hidden>
        </div>
        <div className={clsx(classes.shareButton, classes.event)}>
          <EventNoteIcon/>
          <Hidden xsDown>
            <div className={classes.names}>Event</div>
          </Hidden>
        </div>
        <div className={clsx(classes.shareButton, classes.article)}>
          <AssignmentIcon/>
          <Hidden xsDown>
            <div className={classes.names}>Write article</div>
          </Hidden>
        </div>
      </div>
    </div>
  )
}

export default ShareBox
