import Item from './Item/Item'
import Style from './styles'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded'
import BusinessCenterRoundedIcon from '@material-ui/icons/BusinessCenterRounded'
import SmsRoundedIcon from '@material-ui/icons/SmsRounded'
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded'
import AppsRoundedIcon from '@material-ui/icons/AppsRounded'
import Paper from '@material-ui/core/Paper'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import Popper from '@material-ui/core/Popper'
import Grow from '@material-ui/core/Grow'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import React from 'react'
import UserData from '../../UserData/UserData'
import {NavLink} from 'react-router-dom'

function Navbar () {
  const classes = Style()
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown (event) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])

  const items = [
    { Icon: <HomeRoundedIcon/>, title: 'Home', arrow: false, to: '/home' },
    { Icon: <SupervisorAccountRoundedIcon/>, title: 'Network', arrow: false, to: '/network' },
    { Icon: <BusinessCenterRoundedIcon/>, title: 'Jobs', arrow: false, to: '/jobs' },
    { Icon: <SmsRoundedIcon/>, title: 'Messages', arrow: false, to: '/messages' },
    { Icon: <NotificationsRoundedIcon/>, title: 'Notifications', arrow: false, to: '/notifications' },
    { Icon: <span ref={anchorRef} aria-controls={open ? 'menu-list-grow' : undefined} aria-haspopup="true" onClick={handleToggle}><AccountCircleRoundedIcon/></span>, title: <span ref={anchorRef} aria-controls={open ? 'menu-list-grow' : undefined} aria-haspopup="true" onClick={handleToggle}>Me</span>, arrow: true, to: '#' },
    { Icon: <AppsRoundedIcon/>, title: 'Apps', arrow: true, to: '/apps' }
  ]

  return (
    <>
      <div className={classes.navbar}>
        {items.map(({ Icon, title, arrow, onClick, to }, i) => (
          <Item key={i} Icon={Icon} title={title} arrow={arrow} onClick={onClick} to={to} />
        ))}
      </div>
      <div>
        <div>
          <Popper className={classes.additionalList} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
            {({TransitionProps, placement}) => (
              <Grow
                {...TransitionProps}
                style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList id="menu-list-grow" onKeyDown={handleListKeyDown}>
                      <MenuItem component={NavLink} to='/personal' onClick={handleClose}><UserData/></MenuItem>
                      <MenuItem className={classes.logoutLink} onClick={handleClose}>Logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    </>
  )
}

export default Navbar