import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual'
import YouTubeIcon from '@material-ui/icons/YouTube'
import EventNoteIcon from '@material-ui/icons/EventNote'
import Tooltip from '@material-ui/core/Tooltip'

const useStyles = makeStyles(() => ({
  shareButtons: {
    display: 'flex',
    flexDirection: 'row',
    color: 'gray',
    cursor: 'pointer',
    marginRight: ''
  },
  photo: {
    marginRight: '10px'
  },
  video: {
    marginRight: '10px'
  },
  docs: {
    marginRight: '50px'
  },
  vl: {
    borderLeft: '1px solid gray',
    height: '30px',
    left: '50%',
    top: 0,
    marginLeft: '10px'
  },
  tooltip: {
    backgroundColor: 'white',
    color: 'grey'
  }
}))
const NewPostFooter = () => {
  const classes = useStyles()
  const longText1 = `Add photo`
  const longText2 = `Add video`
  const longText3 = `Add documents`
  return (
    <>
      <div className={classes.shareButtons}>
        <Tooltip className={classes.tooltip} title={longText1} placement={'top'}>
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
      </div>
      <div className={classes.vl}></div>
    </>
  )
}
export default NewPostFooter