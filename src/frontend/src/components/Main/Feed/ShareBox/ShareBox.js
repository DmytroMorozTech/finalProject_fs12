import React from 'react'
import Style from './styles'
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual'
import YouTubeIcon from '@material-ui/icons/YouTube'
import EventNoteIcon from '@material-ui/icons/EventNote'
import AssignmentIcon from '@material-ui/icons/Assignment'
import Avatar from '../../../../shared/Avatar/Avatar'
import toggleModalAction from '../../../../redux/Modal/modalActions'
import {useDispatch} from 'react-redux'
import {ADD_NEW_POST} from '../../../Modal/modalTypes'
import {Hidden} from '@material-ui/core'

function ShareBox (props) {
  const classes = Style()
  const dispatch = useDispatch()
  // const [showModal, setShowModal] = useState('close')
  // const clickHandler = (event) => {
  //   event.preventDefault()
  //   if (event.target !== event.currentTarget) {
  //     return
  //   }
  //   switch (showModal) {
  //     case 'open':
  //       setShowModal('close')
  //       break
  //     case 'close':
  //       setShowModal('open')
  //       break
  //     default:
  //       setShowModal('close')
  //       break
  //   }
  // }
  return (
    <div className={classes.share}>
      <div className={classes.post}>
        <div className={classes.avatar}>
          <Avatar/>
        </div>
        <button className={classes.postButton} onClick={() => dispatch(toggleModalAction(ADD_NEW_POST))} disabled={!!props.loading}>
            New post
        </button>
      </div>
      <div className={classes.shareButtons}>
        <div className={classes.photo}>
          <PhotoSizeSelectActualIcon/>
          <Hidden mdDown>
            <div className={classes.names}>Photo</div>
          </Hidden>
        </div>
        <div className={classes.video}>
          <YouTubeIcon/>
          <Hidden mdDown>
            <div className={classes.names}>Video</div>
          </Hidden>
        </div>
        <div className={classes.event}>
          <EventNoteIcon/>
          <Hidden mdDown>
            <div className={classes.names}>Event</div>
          </Hidden>
        </div>
        <div className={classes.article}>
          <AssignmentIcon/>
          <Hidden mdDown>
            <div className={classes.names}>Write article</div>
          </Hidden>
        </div>
      </div>
    </div>
  )
}

export default ShareBox
