import React from 'react'
import style from './styles'
import Typography from '@material-ui/core/Typography'
import Avatar from '../../../shared/Avatar/Avatar'
import avatarUrl from '../../../temporaryImages/avatar.jpg'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import {Link} from '@material-ui/core'

function MainLeft (props) {
  const {numberOfConnections = 45, numberOfViews = 40} = props
  const classes = style()
  const preventDefault = (event) => event.preventDefault()

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.mediumAvatar}>
          <Avatar avatarUrl={avatarUrl} />
        </div>
        <Link className={classes.name} onClick={preventDefault}>
            Richard West
        </Link>
        <Typography color="textSecondary">
          Junior Java developer
        </Typography>
      </div>
      <hr className={classes.line}/>
      <Link href="#" onClick={preventDefault} underline="none">
        <div className={classes.connection}>
          <div className={classes.connectionLink}>
            <span>Connections</span>
            <span className={classes.number}>{numberOfConnections}</span>
          </div>
          <span className={classes.connectionText}>Grow your network</span>
        </div>
      </Link>
      <Link href="#" onClick={preventDefault} underline="none">
        <div className={classes.views}>
          <span>Who viewed your profile</span>
          <span className={classes.number}>{numberOfViews}</span>
        </div>
      </Link>
      <hr className={classes.line}/>
      <Link href="#" onClick={preventDefault} underline="none">
        <div className={classes.items}>
          <BookmarkIcon/>
          <span>My items</span>
        </div>
      </Link>
    </div>
  )
}
export default MainLeft