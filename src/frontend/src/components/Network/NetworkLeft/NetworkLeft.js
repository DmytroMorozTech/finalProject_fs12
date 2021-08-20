import styles from './styles'
import React from 'react'
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded'
import PermContactCalendarOutlinedIcon from '@material-ui/icons/PermContactCalendarOutlined'
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined'
import GroupIcon from '@material-ui/icons/Group'
import EventIcon from '@material-ui/icons/Event'
import DashboardIcon from '@material-ui/icons/Dashboard'
import ListAltIcon from '@material-ui/icons/ListAlt'
import GridOnIcon from '@material-ui/icons/GridOn'
import Item from './Item/Item'

function NetworkLeft (props) {
  const classes = styles()

  const { numberConnections = 100, numberContacts, numberPeopleIFollow, numberGroups, numberEvents, numberPages, numberNewsletters, numberHashtags } = props

  const items = [
    { Icon: <SupervisorAccountRoundedIcon fontSize="inherit"/>, title: 'Connections', number: numberConnections, onClick: () => console.log('Connections') },
    { Icon: <PermContactCalendarOutlinedIcon fontSize="inherit"/>, title: 'Contacts', number: numberContacts, onClick: () => console.log('Contacts') },
    { Icon: <PermIdentityOutlinedIcon fontSize="inherit"/>, title: 'People I Follow', number: numberPeopleIFollow, onClick: () => console.log('People I Follow') },
    { Icon: <GroupIcon fontSize="inherit"/>, title: 'Groups', number: numberGroups, onClick: () => console.log('Groups') },
    { Icon: <EventIcon fontSize="inherit"/>, title: 'Events', number: numberEvents, onClick: () => console.log('Events') },
    { Icon: <DashboardIcon fontSize="inherit"/>, title: 'Pages', number: numberPages, onClick: () => console.log('Pages') },
    { Icon: <ListAltIcon fontSize="inherit"/>, title: 'Newsletters', number: numberNewsletters, onClick: () => console.log('Newsletters') },
    { Icon: <GridOnIcon fontSize="inherit"/>, title: 'Hashtags', number: numberHashtags, onClick: () => console.log('Hashtags') }
  ]

  return (
    <div className={classes.networkLeft}>
      <div className={classes.title}>
        Manage my network
      </div>
      <div className={classes.items}>
        <div>
          {items.map(({ Icon, title, number, onClick }, i) => (
            <Item key={i} Icon={Icon} title={title} number={number} onClick={onClick}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NetworkLeft
