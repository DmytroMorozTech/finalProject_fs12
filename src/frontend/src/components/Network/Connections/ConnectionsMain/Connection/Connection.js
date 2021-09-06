import styles from './styles'
import React, { useEffect, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import SharedButton from '../../../../../shared/SharedButton/SharedButton'
import TreeDots from '../../../../../shared/ThreeDots/TreeDots'
import { Link } from 'react-router-dom'
import SimpleMenu from '../../../../../shared/PopupMenu/PopupMenu'
import ConnectionAddition from './ConnectionAddition/ConnectionAddition'
import { useDispatch } from 'react-redux'
// import { useSelector } from 'react-redux'
import { getUserChatsAction } from '../../../../../redux/Message/messageActions'
import Image from '../../../../../shared/Image/Image'
// import { isTemporaryChatOpenAction } from '../../../../../redux/Message/messageActions'
// import { allChats } from '../../../../../redux/Message/messageSelector'
// import { activeUserSelector } from '../../../../../redux/User/userSelector'

function Connection (props) {
  const classes = styles()
  const dispatch = useDispatch()
  // const chats = useSelector(allChats)
  // const activeUser = useSelector(activeUserSelector)
  // const activeUserId = activeUser && activeUser.id

  const {
    id = 3,
    avatarPublicId = 'linkedin/avatars/p1qwriz6hzjgwkaihwpa',
    fullName = 'Laura Lee',
    positionAndCompany = 'Sales manager at Microsoft',
    dateCreated = '3 days ago'
  } = props

  useEffect(() => {
    dispatch(getUserChatsAction(id && id))
  }, [dispatch, id])

  const [removedConnection, setRemovedConnection] = useState(false)

  const handleRemoved = () => {
    setRemovedConnection(!removedConnection)
  }

  // const findIfChatExist = () => {
  //   dispatch(isTemporaryChatOpenAction(false))
  //   let existChatId = null
  //   chats && chats.forEach(c => {
  //     if (c.users.filter(u => u.id === activeUserId).length > 0) {
  //       existChatId = c.id
  //     }
  //   })
  //   return existChatId !== null ? existChatId : 'new/' + id
  // }

  return (
    <div className={removedConnection ? classes.removed : ''}>
      <div>
        <div className={classes.connection}>
          <div className={classes.flex}>
            <Link to={`/profiles/${id}`}>
              <Image
                imageUrl={avatarPublicId}
                alt={'user avatar'}
                className={classes.avatar}
                type={'largeAvatar'}
              />
            </Link>
            <div className={classes.userInfo}>
              <Link to={`/profiles/${id}`} className={classes.link}>
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
            <div className={classes.button}>
              {/* <NavLink className={classes.linkButton} key={id} to={`/chat/${findIfChatExist()}`}> */}
              <SharedButton title="Message" size="medium" variant="outlined" />
              {/* <SharedButton component={NavLink} title="Message" size="medium" variant="outlined" /> */}
              {/* </NavLink> */}
            </div>
            <div>
              <SimpleMenu menuItem={
                <TreeDots/>
              } userData={<ConnectionAddition onClick={handleRemoved}/>}/>
            </div>
          </div>
        </div>
      </div>
      <hr className={classes.line}/>
    </div>
  )
}

export default Connection
