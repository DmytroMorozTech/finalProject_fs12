import React, {useEffect, useState} from 'react'
import Style from './styles'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import clsx from 'clsx'
import {useDispatch, useSelector} from 'react-redux'
import {filterChatsAction, getUserChatsAction} from '../../redux/Message/messageActions'
import {allChats, selectedChatSelector} from '../../redux/Message/messageSelector'
import {activeUserSelector} from '../../redux/User/userSelector'
import ChatsList from './ChatsList'
import Chat from './Chat'
import {NavLink} from 'react-router-dom'
import * as actions from '../../redux/Message/messageActionTypes'

function Messages () {
  const classes = Style()
  const dispatch = useDispatch()
  const activeUser = useSelector(activeUserSelector)
  const activeUserId = activeUser && activeUser.id
  const selectedChat = useSelector(selectedChatSelector)
  let chatsList = useSelector(allChats)

  useEffect(() => {
    dispatch(getUserChatsAction(activeUserId))
  }, [dispatch, activeUserId])

  const [inputIsFocusedSearch, setInputIsFocusedSearch] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const handleSearchInputChange = e => {
    let searchInputVal = e.currentTarget.value
    setSearchValue(searchInputVal)
  }

  const findUser = (e) => {
    if (e.keyCode === 13) {
      dispatch(filterChatsAction(activeUserId, searchValue))
    }
  }

  return (
    <main className={classes.layoutListDetail}>
      <div className={classes.listDetailInner}>
        <section className={clsx(classes.layoutList, selectedChat && classes.selectedChatList)}>
          <div className={classes.containerHeader}>
            <div className={classes.containerTitle}>
              <h1 className={classes.flexGrow}>Messages</h1>
            </div>
            <div className={classes.header_search_container}>
              <div className={clsx(classes.header_search, inputIsFocusedSearch ? classes.header_searchActive : '')}>
                <SearchRoundedIcon className={`${classes.absolut} ${classes.iconSearch}`}/>
                <input placeholder="Search"
                  onFocus={() => setInputIsFocusedSearch(!inputIsFocusedSearch)}
                  onBlur={() => setInputIsFocusedSearch(!inputIsFocusedSearch)}
                  value={searchValue}
                  onChange={handleSearchInputChange}
                  onKeyDown={(e) => findUser(e)}
                />
              </div>
            </div>
          </div>
          {chatsList.length > 0 ? chatsList && chatsList.map(c => {
            const chatMember = c.users.filter(u => u.id !== activeUser.id)[0]
            return (
              <NavLink className={`${classes.link}`} key={c.id} to={`/messages/${c.id}`} onClick={() => dispatch({ type: actions.SELECTED_CHAT, payload: true })}>
                <ChatsList key={c.id} chatId={c.id} activeUserId={activeUser.id} user={chatMember}/>
              </NavLink>
            )
          }) : <p className={classes.noChatInfo}>No one chat was started</p>}
        </section>
        <div className={clsx(classes.chatWindow, selectedChat && classes.selectedChat, chatsList.length === 0 ? classes.chatWindowNull : '')}>
          {chatsList.length > 0 ? <Chat user={activeUser} chats={chatsList}/> : ''}
        </div>
      </div>
    </main>
  )
}

export default Messages
