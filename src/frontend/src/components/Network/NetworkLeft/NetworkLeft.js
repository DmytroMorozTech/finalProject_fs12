import styles from './styles'
import React, { useState } from 'react'
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded'
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined'
import GroupIcon from '@material-ui/icons/Group'
import NetworkLeftItem from './NetworkLeftItem/NetworkLeftItem'
import jobs from '../../../temporaryImages/jobs.jpg'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Button from '@material-ui/core/Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

function NetworkLeft (props) {
  const classes = styles()
  const {numberOfConnections, numberOfUsersFollowingMe, numberGroups} = props

  const items = [
    {
      Icon: <SupervisorAccountRoundedIcon fontSize="inherit"/>,
      title: 'Connections',
      number: numberOfConnections,
      to: '/network/connections',
      onClick: () => console.log('Connections')
    },
    {
      Icon: <PermIdentityOutlinedIcon fontSize="inherit"/>,
      title: 'People I Follow',
      number: numberOfUsersFollowingMe,
      to: '/network/following',
      onClick: () => console.log('People I Follow')
    },
    {
      Icon: <GroupIcon fontSize="inherit"/>,
      title: 'Groups',
      number: numberGroups,
      to: '#', // this is temporary hardcoded
      onClick: () => console.log('Groups')
    }
  ]

  const [showMore, setShowMore] = useState(false)

  let shortItems = items.filter(item => item.title === 'Connections')

  return (
    <div className={classes.networkLeft}>
      <div className={classes.title}>
        Manage my network
      </div>
      <div className={classes.items}>
        <div>
          {showMore
            ? items.map(({ Icon, ...rest }, i) => (
              <NetworkLeftItem key={i} Icon={Icon} {...rest}/>
            ))
            : shortItems.map(({ Icon, ...rest }, i) => (
              <NetworkLeftItem key={i} Icon={Icon} {...rest}/>
            ))}
          <Button variant="contained" endIcon={showMore ? <ExpandLessIcon/> : <ExpandMoreIcon/>} className={classes.btn} onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Show less' : 'Show more'}
          </Button>
        </div>
      </div>
      <hr className={classes.line}/>
      <Link to="/jobs">
        <img alt="jobs" src={jobs} className={classes.img}/>
      </Link>
      <hr className={classes.line}/>
      {/* Link is hardcoded below */}
      <Link to="#" className={classes.link}>
        <Typography variant="h5" color="primary" align="center">
          Grow your network
        </Typography>
      </Link>
      <hr className={classes.line}/>
      <div className={classes.logo}>
        <span>Linked</span>
        <LinkedInIcon fontSize="inherit"/>
        <div className={classes.signature}>
          LinkedIn Corporation © 2021
        </div>
      </div>
    </div>
  )
}

export default NetworkLeft
