import styles from './styles'
import React, { useState } from 'react'
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded'
import PermContactCalendarOutlinedIcon from '@material-ui/icons/PermContactCalendarOutlined'
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined'
import GroupIcon from '@material-ui/icons/Group'
// import EventIcon from '@material-ui/icons/Event'
// import DashboardIcon from '@material-ui/icons/Dashboard'
// import ListAltIcon from '@material-ui/icons/ListAlt'
// import GridOnIcon from '@material-ui/icons/GridOn'
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

  const {
    numberConnections = 100,
    numberContacts,
    numberPeopleIFollow,
    numberGroups
    // numberEvents,
    // numberPages,
    // numberNewsletters,
    // numberHashtags
  } = props

  const items = [
    {
      Icon: <SupervisorAccountRoundedIcon fontSize="inherit"/>,
      title: 'Connections',
      number: numberConnections,
      to: '/network/connections',
      onClick: () => console.log('Connections')
    },
    {
      Icon: <PermContactCalendarOutlinedIcon fontSize="inherit"/>,
      title: 'Contacts',
      number: numberContacts,
      to: '/network/connections', // this is temporary hardcoded
      onClick: () => console.log('Contacts')
    },
    {
      Icon: <PermIdentityOutlinedIcon fontSize="inherit"/>,
      title: 'People I Follow',
      number: numberPeopleIFollow,
      to: '/network/connections', // this is temporary hardcoded
      onClick: () => console.log('People I Follow')
    },
    {
      Icon: <GroupIcon fontSize="inherit"/>,
      title: 'Groups',
      number: numberGroups,
      to: '/network/connections', // this is temporary hardcoded
      onClick: () => console.log('Groups')
    }
    // {
    //   Icon: <EventIcon fontSize="inherit"/>,
    //   title: 'Events',
    //   number: numberEvents,
    //   to: '/network/connections', // this is temporary hardcoded
    //   onClick: () => console.log('Events')
    // },
    // {
    //   Icon: <DashboardIcon fontSize="inherit"/>,
    //   title: 'Pages',
    //   number: numberPages,
    //   to: '/network/connections', // this is temporary hardcoded
    //   onClick: () => console.log('Pages')
    // },
    // {
    //   Icon: <ListAltIcon fontSize="inherit"/>,
    //   title: 'Newsletters',
    //   number: numberNewsletters,
    //   to: '/network/connections', // this is temporary hardcoded
    //   onClick: () => console.log('Newsletters')
    // },
    // {
    //   Icon: <GridOnIcon fontSize="inherit"/>,
    //   title: 'Hashtags',
    //   number: numberHashtags,
    //   to: '/network/connections', // this is temporary hardcoded
    //   onClick: () => console.log('Hashtags')
    // }
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
            ? items.map(({ Icon, title, number, to, onClick }, i) => (
              <NetworkLeftItem key={i} Icon={Icon} title={title} number={number} to={to} onClick={onClick}/>
            ))
            : shortItems.map(({ Icon, title, number, to, onClick }, i) => (
              <NetworkLeftItem key={i} Icon={Icon} title={title} number={number} to={to} onClick={onClick}/>
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
      <Link to="/network" className={classes.link}>
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
