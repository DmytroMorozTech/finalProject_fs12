import styles from './styles'
import React from 'react'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded'
import LocalAtmIcon from '@material-ui/icons/LocalAtm'
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined'
import NoteIcon from '@material-ui/icons/Note'
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined'
import SettingsIcon from '@material-ui/icons/Settings'
import Item from './Item/Item'

function JobsLeft () {
  const classes = styles()

  const items = [
    { Icon: <BookmarkIcon fontSize="inherit"/>, title: 'My Jobs', onClick: () => console.log('My Jobs') },
    { Icon: <NotificationsRoundedIcon fontSize="inherit"/>, title: 'Job Alerts', onClick: () => console.log('Job Alerts') },
    { Icon: <LocalAtmIcon fontSize="inherit"/>, title: 'Salary', onClick: () => console.log('Salary') },
    { Icon: <AssignmentTurnedInOutlinedIcon fontSize="inherit"/>, title: 'Skill Assessments', onClick: () => console.log('Skill Assessments') },
    { Icon: <NoteIcon fontSize="inherit"/>, title: 'Interview Prep', onClick: () => console.log('Interview Prep') },
    { Icon: <InsertDriveFileOutlinedIcon fontSize="inherit"/>, title: 'Resume Builder', onClick: () => console.log('Resume Builder') },
    { Icon: <SettingsIcon fontSize="inherit"/>, title: 'Application Settings', onClick: () => console.log('Application Settings') }
  ]

  return (
    <div className={classes.container}>
      {items.map(({ Icon, title, onClick }, i) => (
        <Item key={i} Icon={Icon} title={title} onClick={onClick}/>
      ))}
    </div>
  )
}

export default JobsLeft
