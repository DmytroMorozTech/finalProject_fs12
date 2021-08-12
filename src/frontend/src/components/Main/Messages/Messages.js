import React, {useEffect, useState} from 'react'
import Style from './styles'
import TemporaryAvatar from '../../../temporaryImages/avatar.jpg'
import TemporaryAvatarOne from '../../../temporaryImages/avatarTempMessage.png'
import TemporaryAvatarTwo from '../../../temporaryImages/avatarTempMassegeTwo.png'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import OpenInNewSharpIcon from '@material-ui/icons/OpenInNewSharp'
// import MenuSharpIcon from '@material-ui/icons/MenuSharp'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import clsx from 'clsx'
import {useDispatch, useSelector} from 'react-redux'
import {getChatMessagesAction, getUserChatsAction} from '../../../redux/Message/messageActions'
import {allChats} from '../../../redux/Message/messageSelector'
import {activeUserSelector} from '../../../redux/User/userSelector'
import ChatsList from './ChatsList'
import Chat from './Chat'

function Messages () {
  const classes = Style()
  const dispatch = useDispatch()
  const activeUser = useSelector(activeUserSelector)
  const chatsList = useSelector(allChats)

  useEffect(() => {
    dispatch(getUserChatsAction(activeUser.id))
  }, [])
  console.log(chatsList)

  const [SearchValue, setSearchValue] = useState('')
  const [inputIsFocusedSearch, setInputIsFocusedSearch] = useState(false)

  const handleSearchInputChange = e => {
    let SearchInputVal = e.currentTarget.value
    setSearchValue(SearchInputVal)
  }

  return (
    <main className={classes.layoutListDetail}>
      <div className={classes.listDetailInner}>
        <section className={classes.layoutList}>

          <div className={classes.containerHeader}>
            <div className={classes.containerTitle}>
              <h1 className={classes.flexGrow}>Messages</h1>
              <div className={classes.menu}>
                <MoreHorizIcon/>
              </div>
              <div className={classes.menu}>
                <OpenInNewSharpIcon/>
              </div>
            </div>

            <div className={classes.header_search_container}>
              <div className={clsx(classes.header_search, inputIsFocusedSearch ? classes.header_searchActive : '')}>
                <SearchRoundedIcon className={`${classes.absolut} ${classes.iconSearch}`}/>
                <input placeholder="Search"
                  onFocus={() => setInputIsFocusedSearch(!inputIsFocusedSearch)}
                  onBlur={() => setInputIsFocusedSearch(!inputIsFocusedSearch)}
                  value={SearchValue}
                  onChange={handleSearchInputChange}
                />
                {/* <div className={classes.menu}> */}
                {/*  <MenuSharpIcon className={classes.iconNavMenu}/> */}
                {/* </div> */}
              </div>
            </div>
          </div>
          {chatsList.map(c => {
            const chatMember = c.users.filter(u => u.id !== activeUser.id)[0]
            dispatch(getChatMessagesAction(c.id))
            return (
              <ChatsList chatId={c.id} user={chatMember} />
            )
          })}
        </section>
        <Chat user={activeUser}/>
      </div>
    </main>
  )
}

export default Messages
