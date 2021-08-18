import styles from './styles'
import React from 'react'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded'
import LocalAtmIcon from '@material-ui/icons/LocalAtm'
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined'
import NoteIcon from '@material-ui/icons/Note'
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined'
import SettingsIcon from '@material-ui/icons/Settings'

function JobsLeft () {
  const classes = styles()

  const items = [
    { Icon: <BookmarkIcon fontSize='inherit'/>, title: 'My Jobs' },
    { Icon: <NotificationsRoundedIcon fontSize='inherit'/>, title: 'Job Alerts' },
    { Icon: <LocalAtmIcon fontSize='inherit'/>, title: 'Salary' },
    { Icon: <AssignmentTurnedInOutlinedIcon fontSize='inherit'/>, title: 'Skill Assessments' },
    { Icon: <NoteIcon fontSize='inherit'/>, title: 'Interview Prep' },
    { Icon: <InsertDriveFileOutlinedIcon fontSize='inherit'/>, title: 'Resume Builder' },
    { Icon: <SettingsIcon fontSize='inherit'/>, title: 'Application Settings' }
  ]

  return (
    <div className={classes.root}>

    </div>
  )
}

export default JobsLeft
