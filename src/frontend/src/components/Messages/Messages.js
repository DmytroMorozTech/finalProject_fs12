import React, { useEffect, useState } from 'react'
import Style from './styles'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import OpenInNewSharpIcon from '@material-ui/icons/OpenInNewSharp'
// import MenuSharpIcon from '@material-ui/icons/MenuSharp'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { getUserChatsAction } from '../../redux/Message/messageActions'
import { allChats } from '../../redux/Message/messageSelector'
import { activeUserSelector } from '../../redux/User/userSelector'
import ChatsList from './ChatsList'
import Chat from './Chat'
import { NavLink } from 'react-router-dom'

function Messages () {
  const classes = Style()
  const dispatch = useDispatch()
  const activeUser = useSelector(activeUserSelector)
  const activeUserId = activeUser && activeUser.id
  const chatsList = useSelector(allChats)

  useEffect(() => {
    dispatch(getUserChatsAction(activeUserId))
  }, [dispatch, activeUserId])

  const [inputIsFocusedSearch, setInputIsFocusedSearch] = useState(false)
  const [SearchValue, setSearchValue] = useState('')

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
          {chatsList.length > 0 ? chatsList && chatsList.map(c => {
            const chatMember = c.users.filter(u => u.id !== activeUser.id)[0]
            return (
              <NavLink className={`${classes.link}`} key={c.id} to={`/messages/${c.id}`}>
                <ChatsList key={c.id} chatId={c.id} activeUserId={activeUser.id} user={chatMember}/>
              </NavLink>
            )
          }) : <p className={classes.noChatInfo}>No one chat was started</p>}
        </section>
        {chatsList.length > 0 ? <Chat user={activeUser} chats={chatsList}/> : ''}

      </div>
    </main>
  )
}

export default Messages
