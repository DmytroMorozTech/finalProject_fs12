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
    { Icon: <BookmarkIcon fontSize="inherit"/>, title: 'My Jobs', to: '/jobs/my-jobs', onClick: () => console.log('My Jobs') },
    { Icon: <NotificationsRoundedIcon fontSize="inherit"/>, title: 'Job Alerts', to: '/jobs/my-jobs', onClick: () => console.log('Job Alerts') },
    { Icon: <LocalAtmIcon fontSize="inherit"/>, title: 'Salary', to: '/jobs/my-jobs', onClick: () => console.log('Salary') },
    { Icon: <AssignmentTurnedInOutlinedIcon fontSize="inherit"/>, title: 'Skill Assessments', to: '/jobs/my-jobs', onClick: () => console.log('Skill Assessments') },
    { Icon: <NoteIcon fontSize="inherit"/>, title: 'Interview Prep', to: '/jobs/my-jobs', onClick: () => console.log('Interview Prep') },
    { Icon: <InsertDriveFileOutlinedIcon fontSize="inherit"/>, title: 'Resume Builder', to: '/jobs/my-jobs', onClick: () => console.log('Resume Builder') },
    { Icon: <SettingsIcon fontSize="inherit"/>, title: 'Application Settings', to: '/jobs/my-jobs', onClick: () => console.log('Application Settings') }
  ]

  return (
    <div className={classes.container}>
      {items.map(({ Icon, title, to, onClick }, i) => (
        <Item key={i} Icon={Icon} title={title} to={to} onClick={onClick}/>
      ))}
    </div>
  )
}

export default JobsLeft
