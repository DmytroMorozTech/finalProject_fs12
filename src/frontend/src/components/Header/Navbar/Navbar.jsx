import Item from './Item/Item'
import StyleNavbar from './StyleNavbar'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded'
import BusinessCenterRoundedIcon from '@material-ui/icons/BusinessCenterRounded'
import SmsRoundedIcon from '@material-ui/icons/SmsRounded'
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded'
import AppsRoundedIcon from '@material-ui/icons/AppsRounded'

function Navbar () {
  const classes = StyleNavbar()

  const items = [
    { Icon: <HomeRoundedIcon/>, title: 'Home', arrow: false },
    { Icon: <SupervisorAccountRoundedIcon/>, title: 'Network', arrow: false },
    { Icon: <BusinessCenterRoundedIcon/>, title: 'Jobs', arrow: false },
    { Icon: <SmsRoundedIcon/>, title: 'Messages', arrow: false },
    { Icon: <NotificationsRoundedIcon/>, title: 'Notifications', arrow: false },
    { Icon: <AccountCircleRoundedIcon/>, title: 'Me', arrow: true },
    { Icon: <AppsRoundedIcon/>, title: 'Apps', arrow: true }
  ]

  return (
    <div className={classes.navbar}>
      {items.map(({ Icon, title, arrow, onClick }, i) => (
        <Item key={i} Icon={Icon} title={title} arrow={arrow} onClick={onClick}/>
      ))}
    </div>
  )
}

export default Navbar