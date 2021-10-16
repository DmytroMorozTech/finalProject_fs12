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
import {useDispatch, useSelector} from 'react-redux'
import {activeUserSelector} from '../../../redux/User/userSelector'
import {getNumberOfNewMessagesAction} from '../../../redux/Message/messageActions'

function Navbar () {
  const activeUser = useSelector(activeUserSelector)
  const activeUserId = activeUser.id
  const classes = styles()
  const dispatch = useDispatch()

  const items = [
    { Icon: <HomeRoundedIcon fontSize='inherit' onClick={() => dispatch(getNumberOfNewMessagesAction())}/>, title: 'Home', arrow: false, toggleMenu: false, badge: false, to: '/home' },
    { Icon: <SupervisorAccountRoundedIcon fontSize='inherit' onClick={() => dispatch(getNumberOfNewMessagesAction())}/>, title: 'Network', arrow: false, toggleMenu: false, badge: false, to: '/network', exact: false },
    { Icon: <BusinessCenterRoundedIcon fontSize='inherit' onClick={() => dispatch(getNumberOfNewMessagesAction())}/>, title: 'Jobs', arrow: false, toggleMenu: false, badge: false, to: '/jobs', exact: false },
    { Icon: <SmsRoundedIcon fontSize='inherit' onClick={() => dispatch(getNumberOfNewMessagesAction())}/>, title: 'Messages', arrow: false, toggleMenu: false, badge: true, to: '/messages' },
    { Icon: <NotificationsRoundedIcon fontSize='inherit' onClick={() => dispatch(getNumberOfNewMessagesAction())}/>, title: 'Notifications', arrow: false, toggleMenu: false, badge: false, to: '/notifications' },
    { Icon: <AccountCircleRoundedIcon fontSize='inherit' onClick={() => dispatch(getNumberOfNewMessagesAction())}/>, title: 'Me', arrow: true, toggleMenu: true, badge: false, to: `/profiles/${activeUserId}` }
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
