import styles from './styles'
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded'
import LocalAtmIcon from '@material-ui/icons/LocalAtm'
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined'
import NoteIcon from '@material-ui/icons/Note'
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined'
import SettingsIcon from '@material-ui/icons/Settings'
import React from 'react'
import { MenuItem } from '@material-ui/core'
import Item from '../../JobsLeft/Item/Item'

function JobsAdditions () {
  const classes = styles()

  const items = [
    {
      Icon: <NotificationsRoundedIcon fontSize="inherit"/>,
      title: 'Job Alerts',
      onClick: () => console.log('Job Alerts')
    },
    {
      Icon: <LocalAtmIcon fontSize="inherit"/>,
      title: 'Salary',
      onClick: () => console.log('Salary')
    },
    {
      Icon: <AssignmentTurnedInOutlinedIcon fontSize="inherit"/>,
      title: 'Skill Assessments',
      onClick: () => console.log('Skill Assessments')
    },
    {
      Icon: <NoteIcon fontSize="inherit"/>,
      title: 'Interview Prep',
      onClick: () => console.log('Interview Prep')
    },
    {
      Icon: <InsertDriveFileOutlinedIcon fontSize="inherit"/>,
      title: 'Resume Builder',
      onClick: () => console.log('Resume Builder')
    },
    {
      Icon: <SettingsIcon fontSize="inherit"/>,
      title: 'Application Settings',
      onClick: () => console.log('Application Settings')
    }
  ]

  return (
    <div className={classes.container}>
      {items.map(({ Icon, title, onClick }, i) => (
        <MenuItem className={classes.menuItem}>
          <Item key={i} Icon={Icon} title={title} onClick={onClick}/>
        </MenuItem>
      ))}
    </div>
  )
}

export default JobsAdditions
