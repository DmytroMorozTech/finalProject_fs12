import Item from './Item/Item'
import styles from './styles'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded'
import BusinessCenterRoundedIcon from '@material-ui/icons/BusinessCenterRounded'
import SmsRoundedIcon from '@material-ui/icons/SmsRounded'
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded'
import React from 'react'

function Navbar () {
  const classes = styles()

  // let selectedItem
  //
  // const handleNavbar = (e) => {
  //   let target = e.currentTarget
  //
  //   while (target.getElementsByClassName('itemPrimaryActive') > 1) {
  //     if (target.tagName === 'Item') {
  //       itemPrimaryActive(target)
  //       return
  //     }
  //     target = target.parentNode
  //   }
  // }
  //
  // const itemPrimaryActive = (node) => {
  //   if (selectedItem) {
  //     selectedItem.classList.remove('itemPrimaryActive')
  //   }
  //   selectedItem = node
  //   selectedItem.classList.add('itemPrimaryActive')
  // }

  const items = [
    { Icon: <HomeRoundedIcon fontSize='inherit'/>, title: 'Home', arrow: false, toggleMenu: false, to: '/home' },
    { Icon: <SupervisorAccountRoundedIcon fontSize='inherit'/>, title: 'Network', arrow: false, toggleMenu: false, to: '/network' },
    { Icon: <BusinessCenterRoundedIcon fontSize='inherit'/>, title: 'Jobs', arrow: false, toggleMenu: false, to: '/jobs' },
    { Icon: <SmsRoundedIcon fontSize='inherit'/>, title: 'Messages', arrow: false, toggleMenu: false, to: '/messages' },
    { Icon: <NotificationsRoundedIcon fontSize='inherit'/>, title: 'Notifications', arrow: false, toggleMenu: false, to: '/notifications' },
    { Icon: <AccountCircleRoundedIcon fontSize='inherit'/>, title: 'Me', arrow: true, toggleMenu: true, to: '/personal' }
  ]

  return (
    <div className={classes.navbar} onClick={e => console.log(e.currentTarget)}>
      {items.map(({ Icon, title, arrow, toggleMenu, onClick, to }, i) => (
        <Item key={i} Icon={Icon} title={title} arrow={arrow} toggleMenu={toggleMenu} onClick={onClick} to={to} />
      ))}
    </div>
  )
}

export default Navbar