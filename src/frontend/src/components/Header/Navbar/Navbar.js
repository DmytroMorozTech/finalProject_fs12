import Item from './Item/Item'
import Style from './styles'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded'
import BusinessCenterRoundedIcon from '@material-ui/icons/BusinessCenterRounded'
import SmsRoundedIcon from '@material-ui/icons/SmsRounded'
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded'
import AppsRoundedIcon from '@material-ui/icons/AppsRounded'
import {NavLink} from 'react-router-dom'

function Navbar () {
  const classes = Style()

  const items = [
    { Icon: <NavLink className={classes.itemPrimary} to="/home"><HomeRoundedIcon/></NavLink>, title: <NavLink className={classes.itemPrimaryText} to="/home">Home</NavLink>, arrow: false },
    { Icon: <NavLink className={classes.itemPrimary} to="/network"><SupervisorAccountRoundedIcon/></NavLink>, title: <NavLink className={classes.itemPrimaryText} to="/network">Network</NavLink>, arrow: false },
    { Icon: <NavLink className={classes.itemPrimary} to="/jobs"><BusinessCenterRoundedIcon/></NavLink>, title: <NavLink className={classes.itemPrimaryText} to="/jobs">Jobs</NavLink>, arrow: false },
    { Icon: <NavLink className={classes.itemPrimary} to="/messages"><SmsRoundedIcon/></NavLink>, title: <NavLink className={classes.itemPrimaryText} to="/messages">Messages</NavLink>, arrow: false },
    { Icon: <NavLink className={classes.itemPrimary} to="/notifications"><NotificationsRoundedIcon/></NavLink>, title: <NavLink className={classes.itemPrimaryText} to="/notifications">Notifications</NavLink>, arrow: false },
    { Icon: <NavLink className={classes.itemPrimary} to="/personal"><AccountCircleRoundedIcon/></NavLink>, title: <NavLink className={classes.itemPrimaryText} to="/personal">Me</NavLink>, arrow: true },
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