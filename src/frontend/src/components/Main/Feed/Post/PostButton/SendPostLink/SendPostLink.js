import Typography from '@material-ui/core/Typography'
import React, { useCallback, useState } from 'react'
import styles from './styles'
import InputBase from '@material-ui/core/InputBase'
import toggleModalAction from '../../../../../../redux/Modal/modalActions'
import { useDispatch } from 'react-redux'
import SharedButton from '../../../../../../shared/SharedButton/SharedButton'
import _ from 'lodash'
import http from '../../../../../../services/httpService'
import Image from '../../../../../../shared/Image/Image'
import clsx from 'clsx'
import {createMessageFromFeed} from '../../../../../../redux/Post/postActions'

function SendPostLink (props) {
  const classes = styles()

  const {postId} = props

  const linkToPost = 'http://localhost:3000/posts/' + postId

  const dispatch = useDispatch()

  const [sendInputText, setSendInputText] = useState('Hello! Take a look at this post: \n' + linkToPost)
  const [searchInputValue, setSearchInputValue] = useState('')
  const [foundUsers, setFoundUsers] = useState(null)
  const [showDropDown, setShowDropDown] = useState(false)
  const [chosenUser, setChosenUser] = useState(null)

  const onSendSubmitHandler = () => {
    createMessageFromFeed({
      userWhomId: chosenUser.id,
      text: sendInputText
    })
    dispatch(toggleModalAction())
  }

  const handleSendInputChange = e => {
    let sendInputVal = e.currentTarget.value
    setSendInputText(sendInputVal)
  }

  const numberCharacterToShowValidate = 8000

  let btnIsDisabled = sendInputText.length === 0 ||
    sendInputText.length > numberCharacterToShowValidate ||
    sendInputText.trim() === '' || chosenUser === null

  const handleEnterPressed = (e) => {
    if (e.keyCode === 13) {
      if (e.ctrlKey) {
        let sendInputText = e.currentTarget.value + '\n'
        setSendInputText(sendInputText)
      } else if (sendInputText.length > numberCharacterToShowValidate || sendInputText.trim() === '') {
        e.preventDefault()
      } else {
        e.preventDefault()
        onSendSubmitHandler()
      }
    }
  }

  const findConnectedUsersByName = (searchInput) => {
    return http
      .get(`/api/users/connections/${searchInput}`)
      .then((res) => res.data)
  }

  // eslint-disable-next-line
  const debounce = useCallback(
    _.debounce((_searchVal) => {
      // send the server request here
      findConnectedUsersByName(_searchVal)
        .then((usersList) => {
          setFoundUsers(usersList)
          setShowDropDown(true)
        })
    }, 1000),
    []

  )

  const handleChange = (event) => {
    const {value} = event.target
    setSearchInputValue(value)

    if (value.trim() === '') return
    debounce(value)
  }

  function singleUserTab (user, userIsChosen) {
    return (
      <div>
        <div key={user.id} className={clsx(classes.user, !userIsChosen && classes.foundedUsers)} onClick={() => !userIsChosen ? setChosenUser(user) : null }>
          <Image
            imageUrl={user.avatarPublicId}
            alt={'user avatar'}
            type={'smallAvatar'}
            className={classes.smallAvatar}
          />
          <Typography variant='h5'>{user.fullName}</Typography>
        </div>
        <hr className={classes.line}/>
      </div>
    )
  }

  return (
    <div>
      <div className={classes.title}>
        <Typography variant="h3" className={classes.subtitle}>
          Send Post Link
        </Typography>
      </div>
      <div className={classes.inputs}>
        <hr className={classes.line}/>
        <div className={clsx(classes.inputBase, classes.inputSearch)}>
          {!chosenUser &&
        <InputBase
          placeholder="Type a name"
          fullWidth={true}
          value={searchInputValue}
          onChange={handleChange}
          onBlur={() => setTimeout(() => setShowDropDown(false), 200)}
        />
          }
          {chosenUser && singleUserTab(chosenUser, true) }
        </div>

        {foundUsers && showDropDown &&
      (<div className={classes.foundedUsersDropdown}>
        {foundUsers.map((user) => singleUserTab(user, false))}
      </div>)
        }
      </div>

      <hr className={classes.line}/>
      <div className={classes.inputBase}>
        <InputBase
          placeholder="Write a message..."
          fullWidth={true}
          multiline={true}
          minRows={7}
          value={sendInputText}
          onChange={handleSendInputChange}
          onKeyDown={handleEnterPressed}
        />
      </div>
      <hr className={classes.line}/>
      <div className={classes.button}>
        <SharedButton
          title="Send"
          disabled={btnIsDisabled}
          onClick={btnIsDisabled ? '' : onSendSubmitHandler}/>
      </div>
    </div>
  )
}

export default SendPostLink
