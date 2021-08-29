import styles from './styles'
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded'
// import LocalAtmIcon from '@material-ui/icons/LocalAtm'
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined'
import NoteIcon from '@material-ui/icons/Note'
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined'
import SettingsIcon from '@material-ui/icons/Settings'
import React from 'react'
import { MenuItem } from '@material-ui/core'
import JobsLeftItem from '../../JobsLeft/JobsLeftItem/JobsLeftItem'

function JobsAdditions () {
  const classes = styles()

  /* Links is hardcoded in items */
  const items = [
    {
      Icon: <NotificationsRoundedIcon fontSize="inherit"/>,
      title: 'Job Alerts',
      to: '#'
    },
    // {
    //   Icon: <LocalAtmIcon fontSize="inherit"/>,
    //   title: 'Salary',
    //   to: '#'
    // },
    {
      Icon: <AssignmentTurnedInOutlinedIcon fontSize="inherit"/>,
      title: 'Skill Assessments',
      to: '#'
    },
    {
      Icon: <NoteIcon fontSize="inherit"/>,
      title: 'Interview Prep',
      to: '#'
    },
    {
      Icon: <InsertDriveFileOutlinedIcon fontSize="inherit"/>,
      title: 'Resume Builder',
      to: '#'
    },
    {
      Icon: <SettingsIcon fontSize="inherit"/>,
      title: 'Application Settings',
      to: '#'
    }
  ]

  return (
    <div className={classes.container}>
      {items.map(({ Icon, ...rest }, i) => (
        <MenuItem className={classes.menuItem} key={i}>
          <JobsLeftItem key={i} Icon={Icon} {...rest}/>
        </MenuItem>
      ))}
    </div>
  )
}

export default JobsAdditions
