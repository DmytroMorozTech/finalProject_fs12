import styles from './styles'
import avatar from '../../../../../temporaryImages/avatar.jpg'
import Avatar from '../../../../../shared/Avatar/Avatar'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import SharedButton from '../../../../../shared/Button/SharedButton'
import TreeDots from '../../../../../shared/ThreeDots/TreeDots'
import { Link } from 'react-router-dom'

function Connection (props) {
  const classes = styles()

  const {
    avatarUrl = avatar,
    fullName = 'George Lupin',
    positionAndCompany = 'Fullstack Developer — GlobalLogic',
    dateCreated = '3 days ago'
  } = props

  return (
    <div>
      <div>
        <div className={classes.connection}>
          <div className={classes.flex}>
            <Link to="/profiles/:id">
              <div className={classes.avatar}>
                <Avatar avatarUrl={avatarUrl}/>
              </div>
            </Link>
            <div className={classes.userInfo}>
              <Link to="/profiles/:id" className={classes.link}>
                {fullName}
              </Link>
              <Typography variant="body1" color="textSecondary">
                {positionAndCompany}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                Connected {dateCreated}
              </Typography>
            </div>
          </div>
          <div className={classes.buttons}>
            <div>
              <SharedButton title="Message" size='medium' variant="outlined"/>
            </div>
            <div className={classes.threeDots}>
              <TreeDots/>
            </div>
          </div>
        </div>
      </div>
      <hr className={classes.line}/>
    </div>
  )
}

export default Connection
