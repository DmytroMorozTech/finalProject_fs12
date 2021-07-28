import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual'
import YouTubeIcon from '@material-ui/icons/YouTube'
import EventNoteIcon from '@material-ui/icons/EventNote'
import Tooltip from '@material-ui/core/Tooltip'

const useStyles = makeStyles(() => ({
  shareButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'gray',
    cursor: 'pointer'
  },
  photo: {
    marginRight: '10px',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.10)',
      backgroundSize: '150%',
      borderRadius: '50%'
    }
  },
  video: {
    marginRight: '10px',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.10)',
      borderRadius: '50%'
    }
  },
  docs: {
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.10)',
      borderRadius: '50%'
    }
  },
  vl: {
    borderLeft: '1px solid gray',
    height: '30px',
    left: '50%',
    top: 0,
    marginLeft: '10px'
  }
}))
const NewPostFooter = () => {
  const classes = useStyles()
  const longText1 = `Add photo`
  const longText2 = `Add video`
  const longText3 = `Add documents`
  return (
    <div className={classes.shareButtons}>
      <Tooltip title={longText1} placement={'top'}>
        <div className={classes.photo}>
          <PhotoSizeSelectActualIcon/>
        </div>
      </Tooltip>
      <Tooltip title={longText2} placement={'top'}>
        <div className={classes.video}>
          <YouTubeIcon/>
        </div>
      </Tooltip>
      <Tooltip title={longText3} placement={'top'}>
        <div className={classes.docs}>
          <EventNoteIcon/>
        </div>
      </Tooltip>
      <div className={classes.vl}></div>
    </div>
  )
}
export default NewPostFooter