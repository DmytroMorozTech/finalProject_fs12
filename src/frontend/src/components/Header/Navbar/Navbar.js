import Item from './Item/Item'
import Style from './styles'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded'
import BusinessCenterRoundedIcon from '@material-ui/icons/BusinessCenterRounded'
import SmsRoundedIcon from '@material-ui/icons/SmsRounded'
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded'
import AppsRoundedIcon from '@material-ui/icons/AppsRounded'
import React from 'react'

function Navbar () {
  const classes = Style()

  const items = [
    { Icon: <HomeRoundedIcon/>, title: 'Home', arrow: false, to: '/home' },
    { Icon: <SupervisorAccountRoundedIcon/>, title: 'Network', arrow: false, to: '/network' },
    { Icon: <BusinessCenterRoundedIcon/>, title: 'Jobs', arrow: false, to: '/jobs' },
    { Icon: <SmsRoundedIcon/>, title: 'Messages', arrow: false, to: '/messages' },
    { Icon: <NotificationsRoundedIcon/>, title: 'Notifications', arrow: false, to: '/notifications' },
    { Icon: <AccountCircleRoundedIcon/>, title: 'Me', arrow: true, to: '#' },
    { Icon: <AppsRoundedIcon/>, title: 'Apps', arrow: true, to: '/apps' }
  ]

  return (
    <div className={classes.navbar}>
      {items.map(({ Icon, title, arrow, onClick, to }, i) => (
        <Item key={i} Icon={Icon} title={title} arrow={arrow} onClick={onClick} to={to} />
      ))}
    </div>
  )
}

export default Navbar