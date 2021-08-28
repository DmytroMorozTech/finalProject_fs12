import styles from './styles'
import React from 'react'
import TelegramIcon from '@material-ui/icons/Telegram'
import LinkIcon from '@material-ui/icons/Link'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import SavedVacancyAdditionsItem from './SavedVacancyAdditionsItem/SavedVacancyAdditionsItem'
import { MenuItem } from '@material-ui/core'

function SavedVacancyAdditions () {
  const classes = styles()

  const handlerSendMessage = () => {
    console.log('Send in a message')
  }

  const handlerCopyLink = () => {
    console.log('Copy link')
  }

  const handlerUnsave = () => {
    console.log('Unsave')
  }

  const items = [
    {
      Icon: <TelegramIcon fontSize="inherit"/>,
      title: 'Send in a message',
      onClick: handlerSendMessage
    },
    {
      Icon: <LinkIcon fontSize="inherit"/>,
      title: 'Copy link',
      onClick: handlerCopyLink
    },
    {
      Icon: <BookmarkBorderIcon fontSize="inherit"/>,
      title: 'Unsave',
      onClick: handlerUnsave
    }
  ]

  return (
    <div>
      {items.map(({ Icon, title, onClick }, i) => (
        <MenuItem className={classes.menuItem}>
          <SavedVacancyAdditionsItem key={i} Icon={Icon} title={title} onClick={onClick}/>
        </MenuItem>
      ))}
    </div>
  )
}

export default SavedVacancyAdditions
