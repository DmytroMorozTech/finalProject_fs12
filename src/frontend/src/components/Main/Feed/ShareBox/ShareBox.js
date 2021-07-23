import React, {useState} from 'react'
import Style from './styles'
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual'
import YouTubeIcon from '@material-ui/icons/YouTube'
import EventNoteIcon from '@material-ui/icons/EventNote'
import AssignmentIcon from '@material-ui/icons/Assignment'
import Avatar from '../../../../shared/Avatar/Avatar'

function ShareBox (props) {
  const classes = Style()
  const [showModal, setShowModal] = useState('close')
  const clickHandler = (event) => {
    event.preventDefault()
    if (event.target !== event.currentTarget) {
      return
    }
    switch (showModal) {
      case 'open':
        setShowModal('close')
        break
      case 'close':
        setShowModal('open')
        break
      default:
        setShowModal('close')
        break
    }
  }
  return (
    <div className={classes.share}>
      <div className={classes.post}>
        <Avatar/>
        <button className={classes.postButton} onClick={clickHandler} disabled={!!props.loading}>
                        New post
        </button>
      </div>
      <div className={classes.shareButtons}>
        <div className={classes.photo}>
          <PhotoSizeSelectActualIcon/>
          <div className={classes.names}>Photo</div>
        </div>
        <div className={classes.video}>
          <YouTubeIcon/>
          <div className={classes.names}>Video</div>
        </div>
        <div className={classes.event}>
          <EventNoteIcon/>
          <div className={classes.names}>Event</div>
        </div>
        <div className={classes.article}>
          <AssignmentIcon/>
          <div className={classes.names}>Write Article</div>
        </div>
      </div>
    </div>
  )
}
export default ShareBox