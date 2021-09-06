import NavbarItem from './NavbarItem/NavbarItem'
import styles from './styles'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded'
import BusinessCenterRoundedIcon from '@material-ui/icons/BusinessCenterRounded'
import SmsRoundedIcon from '@material-ui/icons/SmsRounded'
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded'
import React from 'react'
import { Hidden } from '@material-ui/core'
import {useSelector} from 'react-redux'
import {activeUserSelector} from '../../../redux/User/userSelector'

function Navbar () {
  const activeUser = useSelector(activeUserSelector)
  const activeUserId = activeUser.id
  const classes = styles()

  const items = [
    { Icon: <HomeRoundedIcon fontSize='inherit'/>, title: 'Home', arrow: false, toggleMenu: false, to: '/home' },
    { Icon: <SupervisorAccountRoundedIcon fontSize='inherit'/>, title: 'Network', arrow: false, toggleMenu: false, to: '/network', exact: false },
    { Icon: <BusinessCenterRoundedIcon fontSize='inherit'/>, title: 'Jobs', arrow: false, toggleMenu: false, to: '/jobs', exact: false },
    { Icon: <SmsRoundedIcon fontSize='inherit'/>, title: 'Messages', arrow: false, toggleMenu: false, to: '/messages' },
    { Icon: <NotificationsRoundedIcon fontSize='inherit'/>, title: 'Notifications', arrow: false, toggleMenu: false, to: '/notifications' },
    { Icon: <AccountCircleRoundedIcon fontSize='inherit'/>, title: 'Me', arrow: true, toggleMenu: true, to: `/profiles/${activeUserId}` }
  ]

  return (
    <div className={classes.navbar}>
      {items.map(({ Icon, ...rest }, i) => (
        <NavbarItem key={i} Icon={Icon} {...rest} />
      ))}
      <Hidden mdDown>
        <span className={classes.margin}> </span>
      </Hidden>
    </div>
  )
}

export default Navbar
